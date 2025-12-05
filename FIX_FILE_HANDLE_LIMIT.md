# Fix Windows File Handle Limit Error

## Problem
`EMFILE: too many open files` - Windows has a default limit of ~2048 file handles per process, and webpack needs to open many files simultaneously during build, especially with `@mui/icons-material` which has thousands of icon files.

## ✅ Solutions Applied

### 1. Webpack Configuration Optimization
Updated `next.config.js` to:
- Set `parallelism: 1` - Process files sequentially (reduces simultaneous file handles)
- Limited `maxInitialRequests: 25` - Reduces number of chunks created
- Separated MUI icons into their own chunk
- Disabled cache in production builds to reduce file handles

### 2. Run the Fix Script
**Run this PowerShell script as Administrator:**
```powershell
# Right-click PowerShell -> Run as Administrator
.\WINDOWS_BUILD_FIX.ps1
```

Then try building:
```powershell
npm run build
```

## 🔧 Alternative Solutions (If Still Fails)

### Option A: Increase Windows File Handle Limit (Requires Admin)

1. **Open PowerShell as Administrator**
2. **Run this command:**
```powershell
# Check current limit
[System.Environment]::GetEnvironmentVariable("NODE_OPTIONS", "Machine")

# Increase Node.js file handle limit (temporary for current session)
$env:UV_THREADPOOL_SIZE = "1"
npm run build
```

### Option B: Use WSL (Windows Subsystem for Linux)
If you have WSL installed:
```bash
wsl
cd /mnt/e/chitralhive/chitralhive
npm run build
```

### Option C: Build in Development Mode
For testing, use development mode which is less resource-intensive:
```powershell
npm run dev
```

### Option D: Close Other Applications
1. Close all unnecessary applications
2. Close file explorers, IDEs, browsers
3. Restart your computer
4. Try building again immediately after restart

### Option E: Use CI/CD
Build on a CI/CD system (GitHub Actions, GitLab CI, etc.) which typically has higher file handle limits.

## 📝 What Changed

**File**: `next.config.js`
- Added `config.parallelism = 1` to process files sequentially
- Added `maxInitialRequests: 25` to limit chunk creation
- Separated MUI icons into dedicated chunk

## ✅ Expected Result

The build should now work with the optimized webpack configuration. If it still fails, try the alternative solutions above.

---

**Note**: The `parallelism: 1` setting will make builds slightly slower but should prevent the file handle limit error on Windows.

