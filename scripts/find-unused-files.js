#!/usr/bin/env node
/**
 * Find Unused Images and Files
 * 
 * This script scans the codebase to find images and files in public/assets
 * that are not referenced anywhere in the code.
 * 
 * Usage:
 *   node scripts/find-unused-files.js
 *   node scripts/find-unused-files.js --delete  (WARNING: Actually deletes files!)
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const PUBLIC_DIR = path.join(__dirname, '../public');
const SEARCH_DIRS = [
  path.join(__dirname, '../src'),
  path.join(__dirname, '../pages'),
  path.join(__dirname, '../public'),
];
const IMAGE_EXTENSIONS = ['.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg', '.ico'];
const FILE_EXTENSIONS = ['.css', '.js', '.jsx', '.ts', '.tsx', '.json', '.md', '.html'];

// Colors for output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

// Get all files in a directory recursively
function getAllFiles(dir, extensions = []) {
  let results = [];
  
  if (!fs.existsSync(dir)) {
    return results;
  }
  
  const list = fs.readdirSync(dir);
  
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat && stat.isDirectory()) {
      // Skip node_modules and .next
      if (!filePath.includes('node_modules') && !filePath.includes('.next') && !filePath.includes('.git')) {
        results = results.concat(getAllFiles(filePath, extensions));
      }
    } else {
      const ext = path.extname(file).toLowerCase();
      if (extensions.length === 0 || extensions.includes(ext)) {
        results.push(filePath);
      }
    }
  });
  
  return results;
}

// Get all code files to search
function getCodeFiles() {
  let codeFiles = [];
  
  SEARCH_DIRS.forEach(dir => {
    if (fs.existsSync(dir)) {
      codeFiles = codeFiles.concat(getAllFiles(dir, FILE_EXTENSIONS));
    }
  });
  
  return codeFiles;
}

// Search for a string in all code files
function searchInCode(searchString) {
  const codeFiles = getCodeFiles();
  let found = false;
  
  for (const file of codeFiles) {
    try {
      const content = fs.readFileSync(file, 'utf8');
      // Search for various patterns
      const patterns = [
        searchString,
        searchString.replace(/\//g, '\\/'),
        path.basename(searchString),
        path.basename(searchString, path.extname(searchString)),
      ];
      
      for (const pattern of patterns) {
        if (content.includes(pattern)) {
          found = true;
          return { found: true, file };
        }
      }
    } catch (error) {
      // Skip files that can't be read
    }
  }
  
  return { found: false, file: null };
}

// Get file size in human-readable format
function formatSize(bytes) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

// Main function
function findUnusedFiles() {
  const deleteMode = process.argv.includes('--delete');
  
  log('\n🔍 Scanning for unused images and files...\n', 'cyan');
  
  // Get all image files in public directory
  const publicFiles = getAllFiles(PUBLIC_DIR, IMAGE_EXTENSIONS);
  
  log(`Found ${publicFiles.length} image files in public directory\n`, 'blue');
  
  const unusedFiles = [];
  const usedFiles = [];
  let totalUnusedSize = 0;
  
  // Check each file
  publicFiles.forEach((file, index) => {
    const relativePath = path.relative(PUBLIC_DIR, file);
    const publicPath = '/' + relativePath.replace(/\\/g, '/');
    const fileName = path.basename(file);
    
    process.stdout.write(`\rChecking ${index + 1}/${publicFiles.length}: ${fileName}...`);
    
    // Search for references
    const { found, file: foundIn } = searchInCode(publicPath);
    
    if (!found) {
      // Also check for just the filename
      const { found: foundByName } = searchInCode(fileName);
      
      if (!foundByName) {
        const stats = fs.statSync(file);
        unusedFiles.push({
          path: file,
          relativePath: relativePath,
          size: stats.size,
          sizeFormatted: formatSize(stats.size),
        });
        totalUnusedSize += stats.size;
      } else {
        usedFiles.push({ path: file, foundIn: 'filename match' });
      }
    } else {
      usedFiles.push({ path: file, foundIn });
    }
  });
  
  console.log('\n');
  
  // Report results
  log('\n📊 Results:', 'cyan');
  log(`   Total files scanned: ${publicFiles.length}`, 'blue');
  log(`   Used files: ${usedFiles.length}`, 'green');
  log(`   Unused files: ${unusedFiles.length}`, unusedFiles.length > 0 ? 'yellow' : 'green');
  log(`   Total unused size: ${formatSize(totalUnusedSize)}`, unusedFiles.length > 0 ? 'yellow' : 'green');
  
  if (unusedFiles.length > 0) {
    log('\n🗑️  Unused Files:', 'yellow');
    unusedFiles
      .sort((a, b) => b.size - a.size) // Sort by size (largest first)
      .forEach((file, index) => {
        log(`   ${index + 1}. ${file.relativePath} (${file.sizeFormatted})`, 'red');
      });
    
    // Save to file
    const reportPath = path.join(__dirname, '../unused-files-report.json');
    fs.writeFileSync(reportPath, JSON.stringify({
      timestamp: new Date().toISOString(),
      totalUnused: unusedFiles.length,
      totalUnusedSize: totalUnusedSize,
      totalUnusedSizeFormatted: formatSize(totalUnusedSize),
      files: unusedFiles.map(f => ({
        path: f.relativePath,
        size: f.size,
        sizeFormatted: f.sizeFormatted,
      })),
    }, null, 2));
    
    log(`\n📄 Report saved to: unused-files-report.json`, 'blue');
    
    if (deleteMode) {
      log('\n⚠️  DELETE MODE ENABLED - Files will be deleted!', 'red');
      log('   Press Ctrl+C within 5 seconds to cancel...\n', 'yellow');
      
      setTimeout(() => {
        log('\n🗑️  Deleting unused files...\n', 'red');
        let deletedCount = 0;
        let deletedSize = 0;
        
        unusedFiles.forEach(file => {
          try {
            fs.unlinkSync(file.path);
            deletedCount++;
            deletedSize += file.size;
            log(`   ✓ Deleted: ${file.relativePath}`, 'green');
          } catch (error) {
            log(`   ✗ Failed to delete: ${file.relativePath} - ${error.message}`, 'red');
          }
        });
        
        log(`\n✅ Deleted ${deletedCount} files (${formatSize(deletedSize)})`, 'green');
      }, 5000);
    } else {
      log('\n💡 To delete these files, run:', 'cyan');
      log('   node scripts/find-unused-files.js --delete', 'yellow');
      log('\n⚠️  WARNING: Always review the list before deleting!', 'yellow');
    }
  } else {
    log('\n✅ No unused files found!', 'green');
  }
  
  log('\n');
}

// Run the script
try {
  findUnusedFiles();
} catch (error) {
  log(`\n❌ Error: ${error.message}`, 'red');
  process.exit(1);
}

