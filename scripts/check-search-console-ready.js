#!/usr/bin/env node

/**
 * Google Search Console Pre-verification Checker
 * 
 * This script helps verify your site is ready for Google Search Console
 * Run with: node scripts/check-search-console-ready.js
 */

const https = require('https');

const RED = '\x1b[31m';
const GREEN = '\x1b[32m';
const YELLOW = '\x1b[33m';
const BLUE = '\x1b[34m';
const RESET = '\x1b[0m';

const SITE_URL = 'https://codeloom.studio';

console.log(`\n${BLUE}═══════════════════════════════════════════════════════${RESET}`);
console.log(`${BLUE}   Google Search Console - Pre-verification Check${RESET}`);
console.log(`${BLUE}═══════════════════════════════════════════════════════${RESET}\n`);

let checks = 0;
let passed = 0;
let failed = 0;

function checkUrl(url, name, expectedStatus = 200) {
  return new Promise((resolve) => {
    checks++;
    https.get(url, (res) => {
      if (res.statusCode === expectedStatus) {
        console.log(`${GREEN}✓${RESET} ${name}`);
        console.log(`  └─ Status: ${res.statusCode} ✓`);
        passed++;
        resolve(true);
      } else {
        console.log(`${RED}✗${RESET} ${name}`);
        console.log(`  └─ Status: ${res.statusCode} (expected ${expectedStatus})`);
        failed++;
        resolve(false);
      }
    }).on('error', (err) => {
      console.log(`${RED}✗${RESET} ${name}`);
      console.log(`  └─ Error: ${err.message}`);
      failed++;
      resolve(false);
    });
  });
}

async function runChecks() {
  console.log(`${YELLOW}Checking site accessibility...${RESET}\n`);

  // Check main site
  await checkUrl(SITE_URL, 'Main site accessible');
  
  // Check sitemap
  await checkUrl(`${SITE_URL}/sitemap.xml`, 'Sitemap accessible');
  
  // Check robots.txt
  await checkUrl(`${SITE_URL}/robots.txt`, 'Robots.txt accessible');
  
  // Check manifest
  await checkUrl(`${SITE_URL}/manifest.json`, 'Manifest.json accessible');

  console.log(`\n${BLUE}═══════════════════════════════════════════════════════${RESET}`);
  console.log(`${BLUE}   Results Summary${RESET}`);
  console.log(`${BLUE}═══════════════════════════════════════════════════════${RESET}\n`);
  
  console.log(`Total Checks: ${checks}`);
  console.log(`${GREEN}Passed: ${passed}${RESET}`);
  console.log(`${RED}Failed: ${failed}${RESET}\n`);

  if (failed === 0) {
    console.log(`${GREEN}🎉 Your site is ready for Google Search Console!${RESET}\n`);
    console.log(`${YELLOW}Next Steps:${RESET}`);
    console.log(`1. Go to: https://search.google.com/search-console`);
    console.log(`2. Add property: ${SITE_URL}`);
    console.log(`3. Verify using HTML tag method`);
    console.log(`4. Submit sitemap: sitemap.xml\n`);
    console.log(`${BLUE}See GOOGLE_SEARCH_CONSOLE_SETUP.md for detailed instructions.${RESET}\n`);
  } else {
    console.log(`${RED}⚠️  Some checks failed. Please ensure your site is deployed.${RESET}\n`);
    console.log(`${YELLOW}If site is deployed but checks fail:${RESET}`);
    console.log(`- Wait a few minutes for DNS propagation`);
    console.log(`- Check deployment status on your hosting platform`);
    console.log(`- Verify SSL certificate is active\n`);
  }
}

runChecks();
