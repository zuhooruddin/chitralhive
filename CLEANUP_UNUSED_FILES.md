# 🗑️ Cleanup Unused Images and Files

## Quick Start

### Find Unused Files (Safe - No Deletion)

**Using npm:**
```powershell
npm run find-unused
```

**Using PowerShell directly:**
```powershell
.\scripts\find-unused-files.ps1
```

**Using Node.js directly:**
```powershell
node scripts/find-unused-files.js
```

### Delete Unused Files (⚠️ WARNING: Actually Deletes!)

**Using npm:**
```powershell
npm run find-unused:delete
```

**Using PowerShell directly:**
```powershell
.\scripts\find-unused-files.ps1 -Delete
```

**Using Node.js directly:**
```powershell
node scripts/find-unused-files.js --delete
```

---

## What It Does

The script:
1. ✅ Scans all image files in `public/assets/` directory
2. ✅ Searches for references in all code files (`.js`, `.jsx`, `.ts`, `.tsx`, `.css`, `.json`, `.md`, `.html`)
3. ✅ Identifies files that are not referenced anywhere
4. ✅ Generates a report with file sizes
5. ✅ Optionally deletes unused files (with 5-second warning)

## Supported File Types

The script checks for:
- **Images:** `.png`, `.jpg`, `.jpeg`, `.gif`, `.webp`, `.svg`, `.ico`
- **Searches in:** `.js`, `.jsx`, `.ts`, `.tsx`, `.css`, `.json`, `.md`, `.html`

## Output

### Example Output

```
🔍 Scanning for unused images and files...

Found 1223 image files in public directory

📊 Results:
   Total files scanned: 1223
   Used files: 856
   Unused files: 367
   Total unused size: 12.5 MB

🗑️  Unused Files (sorted by size):
   1. assets/images/banners/old-banner-1.png (2.3 MB)
   2. assets/images/products/old-product.png (1.8 MB)
   ...

📄 Report saved to: unused-files-report.json

💡 To delete these files, run:
   npm run find-unused:delete

⚠️  WARNING: Always review the list before deleting!
```

### Report File

A detailed JSON report is saved to `unused-files-report.json`:

```json
{
  "timestamp": "2026-01-03T12:00:00.000Z",
  "totalUnused": 367,
  "totalUnusedSize": 13107200,
  "totalUnusedSizeFormatted": "12.5 MB",
  "files": [
    {
      "path": "assets/images/banners/old-banner-1.png",
      "size": 2411520,
      "sizeFormatted": "2.3 MB"
    }
  ]
}
```

## Safety Features

1. **Dry Run by Default** - Only scans and reports, doesn't delete
2. **5-Second Warning** - When using delete mode, gives you time to cancel
3. **Detailed Report** - JSON report saved before deletion
4. **Sorted by Size** - Shows largest files first (biggest impact)

## Common Use Cases

### 1. Find Large Unused Images

```powershell
npm run find-unused
# Review the report, then delete if safe
npm run find-unused:delete
```

### 2. Clean Up After Removing Features

After removing a feature/page:
1. Run the script to find orphaned assets
2. Review the list
3. Delete if confirmed safe

### 3. Regular Maintenance

Add to your monthly maintenance:
```powershell
# Check for unused files
npm run find-unused

# Review unused-files-report.json
# Delete if safe
npm run find-unused:delete
```

## Important Notes

### ⚠️ False Positives

The script may flag files as unused if they're:
- Referenced dynamically (e.g., `require(dynamicPath)`)
- Used in CSS with relative paths
- Referenced in external config files
- Used in build scripts

**Always review the list before deleting!**

### ✅ Safe to Delete

These are typically safe to delete:
- Old banner images replaced by new ones
- Unused product images
- Deprecated logo variations
- Test/demo images
- Backup files (`.backup`, `.old`)

### ❌ Be Careful With

- Files referenced in environment variables
- Files used by build tools
- Files referenced in external APIs
- Files that might be used in the future

## Manual Cleanup

If you prefer manual cleanup:

1. **Review the report:**
   ```powershell
   cat unused-files-report.json
   ```

2. **Manually delete specific files:**
   ```powershell
   Remove-Item "public/assets/images/path/to/unused-file.png"
   ```

3. **Delete entire unused directories:**
   ```powershell
   Remove-Item -Recurse "public/assets/images/unused-folder"
   ```

## Integration with Image Optimization

After optimizing images, you might have:
- Original PNG files (if you kept backups)
- Duplicate WebP files
- Old optimized versions

Run this script to find and clean them up:

```powershell
# 1. Optimize images
cd ..\chitralhivedjango
python manage.py optimize_images --backup

# 2. Find unused originals
cd ..\chitralhive
npm run find-unused

# 3. Review and delete if safe
npm run find-unused:delete
```

## Troubleshooting

### Script Not Found

```powershell
# Make sure you're in the project root
cd E:\chitralhive\chitralhive

# Check if script exists
Test-Path scripts/find-unused-files.js
```

### Permission Errors

If you get permission errors:
- Run PowerShell as Administrator
- Or manually delete files with proper permissions

### Script Too Slow

For large projects:
- The script searches all code files
- This can take a few minutes for large codebases
- Progress is shown during execution

## Expected Savings

After cleanup, you might save:
- **Small projects:** 5-20 MB
- **Medium projects:** 20-100 MB
- **Large projects:** 100-500 MB+

This improves:
- ✅ Build times
- ✅ Deployment size
- ✅ CDN costs
- ✅ Repository size

---

## Quick Reference

| Command | Action |
|---------|--------|
| `npm run find-unused` | Find unused files (safe) |
| `npm run find-unused:delete` | Find and delete unused files |
| `.\scripts\find-unused-files.ps1` | PowerShell version |
| `node scripts/find-unused-files.js` | Node.js version |

---

**Last Updated:** January 3, 2026  
**Status:** ✅ Ready to use

