This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## SEO & static files added

During the Next.js port a few SEO assets were added to help search engines and social previews:

- `app/layout.js` now exports richer `metadata` (Open Graph, Twitter card, icons, keywords) and injects a JSON-LD Organization schema.
- `public/robots.txt` was added and points to `https://codeloom.studio/sitemap.xml`.
- `public/sitemap.xml` was added with basic URL entries for the main anchors.

Notes:
- The Open Graph image currently references `/assets/og-image.png` which you can generate from the existing `/assets/result.svg` using the included script.

Generate OG image (recommended):

```bash
cd codeloom-next
npm install
npm run generate-og
```

This will create `public/assets/og-image.png` (1200x630) from `public/assets/result.svg` using `sharp`.
- If you want automated sitemaps, I can add a build-time sitemap generator next.

How to run locally:

```bash
cd codeloom-next
npm install
npm run dev
```
