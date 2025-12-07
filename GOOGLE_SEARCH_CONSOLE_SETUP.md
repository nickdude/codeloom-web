# Google Search Console Setup Guide

## 🔍 Step-by-Step Setup Instructions

### Step 1: Access Google Search Console
1. Go to: **https://search.google.com/search-console**
2. Sign in with your Google account (use your business email)

### Step 2: Add Your Property
1. Click **"Add Property"** or **"Start Now"**
2. Choose **"URL prefix"** method
3. Enter: `https://codeloom.studio`
4. Click **Continue**

### Step 3: Verify Ownership (Choose ONE method)

#### ✅ RECOMMENDED: HTML Tag Method (Easiest for Next.js)

1. **In Google Search Console**, select **"HTML tag"** verification method
2. Copy the meta tag code that looks like:
   ```html
   <meta name="google-site-verification" content="googledccb23aa51cf918f.html" />
   ```

3. **Copy ONLY the verification code** (the part inside content="...")
   Example: If you see `content="abc123xyz456"`, copy just `abc123xyz456`

4. **Update your code**:
   - Open `app/layout.js`
   - Find the `verification` section around line 180-190
   - Replace the commented line with your code:
   ```javascript
   verification: {
     google: "googledccb23aa51cf918f.html",  // Paste your code here
   },
   ```

5. **Deploy your changes**:
   ```bash
   git add app/layout.js
   git commit -m "Add Google Search Console verification"
   git push origin main
   ```

6. **Wait for deployment** (2-5 minutes on Vercel/Netlify)

7. **Back in Google Search Console**, click **"Verify"**

---

#### Alternative: HTML File Upload Method

1. Download the HTML file provided by Google
2. Place it in your `/public` folder
3. Deploy and verify

---

### Step 4: Submit Your Sitemap

Once verified:

1. In Search Console, go to **"Sitemaps"** in the left menu
2. Enter: `sitemap.xml`
3. Click **"Submit"**

Your sitemap URL will be: `https://codeloom.studio/sitemap.xml`

---

### Step 5: Request Indexing

1. In Search Console, go to **"URL Inspection"**
2. Enter: `https://codeloom.studio`
3. Click **"Request Indexing"**
4. Repeat for important pages

---

## 📊 What to Monitor After Setup

### Immediate Actions (First Week)
- [ ] Check **Coverage** report for indexing issues
- [ ] Monitor **Core Web Vitals** (should be green!)
- [ ] Review **Mobile Usability** issues
- [ ] Check **Rich Results** (Schema.org validation)

### Regular Monitoring (Weekly/Monthly)
- [ ] Review **Performance** (clicks, impressions, CTR)
- [ ] Check **Search queries** driving traffic
- [ ] Monitor **Page Experience** scores
- [ ] Review **Security Issues** (should be none)

---

## 🚨 Common Issues & Solutions

### Issue: Verification Failed
**Solution**: 
- Ensure changes are deployed
- Clear browser cache
- Wait 5-10 minutes after deployment
- Check that verification code is exact (no extra spaces)

### Issue: Sitemap Not Found
**Solution**:
- Verify sitemap is accessible: https://codeloom.studio/sitemap.xml
- Check robots.txt allows crawling
- Wait 24-48 hours and resubmit

### Issue: Pages Not Indexed
**Solution**:
- Request indexing manually
- Check Coverage report for errors
- Ensure robots.txt allows Google
- Wait 1-2 weeks for natural crawling

---

## 📈 Expected Timeline

- **Verification**: Immediate
- **Sitemap processed**: 1-2 days
- **First data appears**: 2-3 days
- **Full indexing**: 1-2 weeks
- **Ranking improvements**: 2-4 weeks

---

## 🎯 Next Steps After Verification

1. **Enable Email Alerts**
   - Settings → Users and Permissions → Add email alerts

2. **Link to Google Analytics**
   - Settings → Associations → Link GA4 property

3. **Set Up URL Parameters**
   - Settings → URL Parameters (if using tracking codes)

4. **Review Search Appearance**
   - Check how your site appears in search results
   - Optimize titles/descriptions based on CTR data

---

## 📞 Need Help?

If you encounter issues:
1. Check this guide: https://support.google.com/webmasters
2. Review verification troubleshooting
3. Ensure deployment is complete
4. Wait 24-48 hours for changes to propagate

---

## ✅ Quick Verification Checklist

- [ ] Added to Google Search Console
- [ ] Site verified (HTML tag method)
- [ ] Sitemap submitted
- [ ] Home page indexing requested
- [ ] Email alerts enabled
- [ ] Linked to Google Analytics
- [ ] Baseline data collected (wait 1 week)

---

**Last Updated**: December 7, 2025
**Status**: Ready for verification
**Estimated Setup Time**: 15-20 minutes
