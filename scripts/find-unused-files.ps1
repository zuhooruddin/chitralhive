# Find Unused Images and Files - PowerShell Version
# 
# This script scans the codebase to find images and files in public/assets
# that are not referenced anywhere in the code.
#
# Usage:
#   .\scripts\find-unused-files.ps1
#   .\scripts\find-unused-files.ps1 -Delete  (WARNING: Actually deletes files!)

param(
    [switch]$Delete
)

$ErrorActionPreference = "Stop"

# Colors
function Write-ColorOutput($ForegroundColor, $Message) {
    $fc = $host.UI.RawUI.ForegroundColor
    $host.UI.RawUI.ForegroundColor = $ForegroundColor
    Write-Output $Message
    $host.UI.RawUI.ForegroundColor = $fc
}

# Configuration
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$ProjectRoot = Split-Path -Parent $ScriptDir
$PublicDir = Join-Path $ProjectRoot "public"
$SearchDirs = @(
    Join-Path $ProjectRoot "src",
    Join-Path $ProjectRoot "pages",
    $PublicDir
)

$ImageExtensions = @('.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg', '.ico')
$CodeExtensions = @('.css', '.js', '.jsx', '.ts', '.tsx', '.json', '.md', '.html')

Write-ColorOutput Cyan "`n🔍 Scanning for unused images and files...`n"

# Get all image files recursively
function Get-AllFiles {
    param(
        [string]$Directory,
        [string[]]$Extensions
    )
    
    if (-not (Test-Path $Directory)) {
        return @()
    }
    
    $files = @()
    Get-ChildItem -Path $Directory -Recurse -File | ForEach-Object {
        $ext = [System.IO.Path]::GetExtension($_.Name).ToLower()
        if ($Extensions -contains $ext) {
            $files += $_.FullName
        }
    }
    
    return $files
}

# Search for string in code files
function Search-InCode {
    param(
        [string]$SearchString
    )
    
    $codeFiles = @()
    foreach ($dir in $SearchDirs) {
        if (Test-Path $dir) {
            $codeFiles += Get-AllFiles -Directory $dir -Extensions $CodeExtensions
        }
    }
    
    $fileName = Split-Path -Leaf $SearchString
    $fileNameWithoutExt = [System.IO.Path]::GetFileNameWithoutExtension($fileName)
    
    foreach ($file in $codeFiles) {
        try {
            $content = Get-Content $file -Raw -ErrorAction SilentlyContinue
            if ($content) {
                # Search for various patterns
                if ($content -match [regex]::Escape($SearchString) -or
                    $content -match [regex]::Escape($fileName) -or
                    $content -match [regex]::Escape($fileNameWithoutExt)) {
                    return @{ Found = $true; File = $file }
                }
            }
        } catch {
            # Skip files that can't be read
        }
    }
    
    return @{ Found = $false; File = $null }
}

# Format file size
function Format-Size {
    param([long]$Bytes)
    
    if ($Bytes -eq 0) { return "0 B" }
    $units = @("B", "KB", "MB", "GB")
    $i = [Math]::Floor([Math]::Log($Bytes, 1024))
    $size = [Math]::Round($Bytes / [Math]::Pow(1024, $i), 2)
    return "$size $($units[$i])"
}

# Main execution
$publicFiles = Get-AllFiles -Directory $PublicDir -Extensions $ImageExtensions

Write-ColorOutput Blue "Found $($publicFiles.Count) image files in public directory`n"

$unusedFiles = @()
$usedFiles = @()
$totalUnusedSize = 0

$counter = 0
foreach ($file in $publicFiles) {
    $counter++
    $relativePath = $file.Replace($PublicDir + '\', '').Replace('\', '/')
    $publicPath = "/$relativePath"
    $fileName = Split-Path -Leaf $file
    
    Write-Progress -Activity "Checking files" -Status "Checking: $fileName" -PercentComplete (($counter / $publicFiles.Count) * 100)
    
    $result = Search-InCode -SearchString $publicPath
    
    if (-not $result.Found) {
        $stats = Get-Item $file
        $unusedFiles += [PSCustomObject]@{
            Path = $file
            RelativePath = $relativePath
            Size = $stats.Length
            SizeFormatted = Format-Size $stats.Length
        }
        $totalUnusedSize += $stats.Length
    } else {
        $usedFiles += [PSCustomObject]@{ Path = $file; FoundIn = $result.File }
    }
}

Write-Progress -Activity "Checking files" -Completed

Write-ColorOutput Cyan "`n📊 Results:"
Write-ColorOutput Blue "   Total files scanned: $($publicFiles.Count)"
Write-ColorOutput Green "   Used files: $($usedFiles.Count)"
if ($unusedFiles.Count -gt 0) {
    Write-ColorOutput Yellow "   Unused files: $($unusedFiles.Count)"
    Write-ColorOutput Yellow "   Total unused size: $(Format-Size $totalUnusedSize)"
} else {
    Write-ColorOutput Green "   Unused files: 0"
}

if ($unusedFiles.Count -gt 0) {
    Write-ColorOutput Yellow "`n🗑️  Unused Files (sorted by size):"
    
    $sorted = $unusedFiles | Sort-Object -Property Size -Descending
    $index = 1
    foreach ($file in $sorted) {
        Write-ColorOutput Red "   $index. $($file.RelativePath) ($($file.SizeFormatted))"
        $index++
    }
    
    # Save report
    $reportPath = Join-Path $ProjectRoot "unused-files-report.json"
    $report = @{
        timestamp = (Get-Date).ToUniversalTime().ToString("o")
        totalUnused = $unusedFiles.Count
        totalUnusedSize = $totalUnusedSize
        totalUnusedSizeFormatted = Format-Size $totalUnusedSize
        files = $unusedFiles | ForEach-Object {
            @{
                path = $_.RelativePath
                size = $_.Size
                sizeFormatted = $_.SizeFormatted
            }
        }
    } | ConvertTo-Json -Depth 10
    
    $report | Out-File -FilePath $reportPath -Encoding UTF8
    Write-ColorOutput Blue "`n📄 Report saved to: unused-files-report.json"
    
    if ($Delete) {
        Write-ColorOutput Red "`n⚠️  DELETE MODE ENABLED - Files will be deleted!"
        Write-ColorOutput Yellow "   Press Ctrl+C within 5 seconds to cancel...`n"
        
        Start-Sleep -Seconds 5
        
        Write-ColorOutput Red "`n🗑️  Deleting unused files...`n"
        $deletedCount = 0
        $deletedSize = 0
        
        foreach ($file in $unusedFiles) {
            try {
                Remove-Item -Path $file.Path -Force
                $deletedCount++
                $deletedSize += $file.Size
                Write-ColorOutput Green "   ✓ Deleted: $($file.RelativePath)"
            } catch {
                Write-ColorOutput Red "   ✗ Failed to delete: $($file.RelativePath) - $($_.Exception.Message)"
            }
        }
        
        Write-ColorOutput Green "`n✅ Deleted $deletedCount files ($(Format-Size $deletedSize))"
    } else {
        Write-ColorOutput Cyan "`n💡 To delete these files, run:"
        Write-ColorOutput Yellow "   .\scripts\find-unused-files.ps1 -Delete"
        Write-ColorOutput Yellow "`n⚠️  WARNING: Always review the list before deleting!"
    }
} else {
    Write-ColorOutput Green "`n✅ No unused files found!"
}

Write-Output ""

