#!/usr/bin/env node

/**
 * SEO Validation Script for Codeloom Studio
 * 
 * This script checks for common SEO issues and validates the setup.
 * Run with: node scripts/validate-seo.js
 */

const fs = require('fs');
const path = require('path');

const RED = '\x1b[31m';
const GREEN = '\x1b[32m';
const YELLOW = '\x1b[33m';
const RESET = '\x1b[0m';

let errors = 0;
let warnings = 0;
let successes = 0;

function success(message) {
  console.log(`${GREEN}✓${RESET} ${message}`);
  successes++;
}

function error(message) {
  console.log(`${RED}✗${RESET} ${message}`);
  errors++;
}

function warning(message) {
  console.log(`${YELLOW}⚠${RESET} ${message}`);
  warnings++;
}

console.log('\n🔍 SEO Validation Starting...\n');

// Check if essential files exist
const filesToCheck = [
  { path: 'public/robots.txt', name: 'robots.txt' },
  { path: 'public/sitemap.xml', name: 'sitemap.xml' },
  { path: 'public/manifest.json', name: 'manifest.json' },
  { path: 'app/layout.js', name: 'layout.js' },
];

console.log('📁 Checking Essential Files:');
filesToCheck.forEach(({ path: filePath, name }) => {
  if (fs.existsSync(filePath)) {
    success(`${name} exists`);
  } else {
    error(`${name} is missing`);
  }
});

// Check robots.txt content
console.log('\n🤖 Validating robots.txt:');
try {
  const robotsContent = fs.readFileSync('public/robots.txt', 'utf-8');
  if (robotsContent.includes('User-agent:')) {
    success('robots.txt has User-agent directive');
  } else {
    error('robots.txt missing User-agent directive');
  }
  if (robotsContent.includes('Sitemap:')) {
    success('robots.txt includes Sitemap reference');
  } else {
    warning('robots.txt should reference sitemap.xml');
  }
} catch (err) {
  error('Could not read robots.txt');
}

// Check sitemap.xml
console.log('\n🗺️  Validating sitemap.xml:');
try {
  const sitemapContent = fs.readFileSync('public/sitemap.xml', 'utf-8');
  if (sitemapContent.includes('<?xml')) {
    success('sitemap.xml is valid XML');
  } else {
    error('sitemap.xml is not valid XML');
  }
  if (sitemapContent.includes('<urlset')) {
    success('sitemap.xml has urlset element');
  } else {
    error('sitemap.xml missing urlset element');
  }
  const currentYear = new Date().getFullYear();
  if (sitemapContent.includes(currentYear.toString())) {
    success('sitemap.xml has current year in lastmod dates');
  } else {
    warning('sitemap.xml dates may be outdated');
  }
} catch (err) {
  error('Could not read sitemap.xml');
}

// Check manifest.json
console.log('\n📱 Validating manifest.json:');
try {
  const manifestContent = fs.readFileSync('public/manifest.json', 'utf-8');
  const manifest = JSON.parse(manifestContent);
  
  if (manifest.name) {
    success('manifest.json has name');
  } else {
    error('manifest.json missing name');
  }
  
  if (manifest.icons && manifest.icons.length > 0) {
    success(`manifest.json has ${manifest.icons.length} icon(s)`);
  } else {
    error('manifest.json missing icons');
  }
  
  if (manifest.theme_color) {
    success('manifest.json has theme_color');
  } else {
    warning('manifest.json missing theme_color');
  }
} catch (err) {
  error('Could not parse manifest.json');
}

// Check layout.js for metadata
console.log('\n📄 Validating layout.js metadata:');
try {
  const layoutContent = fs.readFileSync('app/layout.js', 'utf-8');
  
  if (layoutContent.includes('export const metadata')) {
    success('layout.js exports metadata');
  } else {
    error('layout.js missing metadata export');
  }
  
  if (layoutContent.includes('openGraph')) {
    success('layout.js has OpenGraph metadata');
  } else {
    warning('layout.js missing OpenGraph metadata');
  }
  
  if (layoutContent.includes('twitter')) {
    success('layout.js has Twitter Card metadata');
  } else {
    warning('layout.js missing Twitter Card metadata');
  }
  
  if (layoutContent.includes('schema.org')) {
    success('layout.js includes Schema.org structured data');
  } else {
    warning('layout.js missing structured data');
  }
  
  if (layoutContent.includes('metadataBase')) {
    success('layout.js has metadataBase configured');
  } else {
    error('layout.js missing metadataBase');
  }
} catch (err) {
  error('Could not read layout.js');
}

// Check for OG image
console.log('\n🖼️  Validating OG Image:');
const ogImagePaths = [
  'public/assets/og-image.png',
  'public/og-image.png',
];

let ogImageFound = false;
ogImagePaths.forEach(imgPath => {
  if (fs.existsSync(imgPath)) {
    success(`OG image found at ${imgPath}`);
    ogImageFound = true;
  }
});

if (!ogImageFound) {
  warning('OG image not found. Create og-image.png (1200x630px)');
}

// Check for favicons
console.log('\n🎨 Validating Favicons:');
const faviconPaths = [
  'public/assets/favicon-16x16.png',
  'public/assets/favicon-32x32.png',
  'public/assets/apple-touch-icon.png',
];

faviconPaths.forEach(faviconPath => {
  if (fs.existsSync(faviconPath)) {
    success(`Favicon found: ${path.basename(faviconPath)}`);
  } else {
    warning(`Favicon missing: ${path.basename(faviconPath)}`);
  }
});

// Summary
console.log('\n' + '='.repeat(50));
console.log('📊 Validation Summary:');
console.log('='.repeat(50));
console.log(`${GREEN}Successes: ${successes}${RESET}`);
console.log(`${YELLOW}Warnings:  ${warnings}${RESET}`);
console.log(`${RED}Errors:    ${errors}${RESET}`);
console.log('='.repeat(50) + '\n');

if (errors === 0 && warnings === 0) {
  console.log(`${GREEN}🎉 Perfect! Your SEO setup looks great!${RESET}\n`);
  process.exit(0);
} else if (errors === 0) {
  console.log(`${YELLOW}⚠️  Good, but consider fixing the warnings above.${RESET}\n`);
  process.exit(0);
} else {
  console.log(`${RED}❌ Please fix the errors above before deploying.${RESET}\n`);
  process.exit(1);
}
