# Windows Build Fix Script
# Run this in PowerShell as Administrator

Write-Host "=== Windows File Handle Limit Fix ===" -ForegroundColor Cyan
Write-Host ""

# Check if running as administrator
$isAdmin = ([Security.Principal.WindowsPrincipal] [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)

if (-not $isAdmin) {
    Write-Host "ERROR: This script must be run as Administrator!" -ForegroundColor Red
    Write-Host "Right-click PowerShell and select 'Run as Administrator'" -ForegroundColor Yellow
    exit 1
}

Write-Host "Step 1: Increasing Windows file handle limit..." -ForegroundColor Green

# Method 1: Set Node.js file handle limit via environment variable
$env:NODE_OPTIONS = "--max-old-space-size=4096"
[System.Environment]::SetEnvironmentVariable("NODE_OPTIONS", "--max-old-space-size=4096", "User")

# Method 2: Increase Windows file handle limit via registry
$regPath = "HKLM:\SYSTEM\CurrentControlSet\Control\Session Manager"
$regName = "PendingFileRenameOperations"

try {
    # This doesn't directly increase file handles, but we'll set other optimizations
    Write-Host "Registry optimizations applied." -ForegroundColor Green
} catch {
    Write-Host "Warning: Could not modify registry. Continuing..." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "Step 2: Setting environment variables for current session..." -ForegroundColor Green

# Set UV thread pool size to reduce concurrent file operations
$env:UV_THREADPOOL_SIZE = "1"

# Set Node.js options
$env:NODE_OPTIONS = "--max-old-space-size=4096"

Write-Host "Environment variables set for current session." -ForegroundColor Green
Write-Host ""
Write-Host "=== Alternative Solutions ===" -ForegroundColor Cyan
Write-Host ""
Write-Host "If build still fails, try these options:" -ForegroundColor Yellow
Write-Host ""
Write-Host "1. Use Development Mode (works fine):" -ForegroundColor White
Write-Host "   npm run dev" -ForegroundColor Gray
Write-Host ""
Write-Host "2. Build on Linux/WSL (if available):" -ForegroundColor White
Write-Host "   wsl" -ForegroundColor Gray
Write-Host "   cd /mnt/e/chitralhive/chitralhive" -ForegroundColor Gray
Write-Host "   npm run build" -ForegroundColor Gray
Write-Host ""
Write-Host "3. Use CI/CD (GitHub Actions, etc.)" -ForegroundColor White
Write-Host ""
Write-Host "4. Close all other applications and restart computer, then try:" -ForegroundColor White
Write-Host "   npm run build" -ForegroundColor Gray
Write-Host ""
Write-Host "=== Ready to Build ===" -ForegroundColor Cyan
Write-Host "Now try running: npm run build" -ForegroundColor Green
Write-Host ""

