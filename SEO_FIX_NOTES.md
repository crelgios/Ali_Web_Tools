# SEO and Multilingual Fix Notes

Fixed in this version:

1. Added `lib/seoConfig.js`
   - Manage page titles, descriptions, keywords, canonical URLs and hreflang in one place.
   - Edit `seoKeywords` inside this file to control which keyword belongs to which tool page.

2. Connected language folders
   - Added `layout.js` inside every language folder.
   - Each language route now has `lang` and `dir` wrapper support.
   - RTL languages Arabic, Urdu and Persian use `dir="rtl"`.

3. Improved metadata
   - Tool pages now use centralized metadata from `createMetadata()`.
   - Blog posts now use `createBlogMetadata()`.
   - Canonical URLs and alternate hreflang URLs are generated for every supported language.

4. Improved sitemap
   - `app/sitemap.js` now generates routes automatically from `lib/seoConfig.js`.
   - It includes all supported language versions, major tool pages, trust pages and blog posts.

5. Improved robots
   - `app/robots.js` points search engines to `/sitemap.xml`.

Important:
- Set your real website URL in Vercel Environment Variables:
  `NEXT_PUBLIC_SITE_URL=https://your-domain.com`
- If you do not set it, the fallback is `https://ali-web-tools.vercel.app`.
- After deploy, submit this sitemap in Google Search Console:
  `https://your-domain.com/sitemap.xml`

Google can choose Chinese pages for Chinese searches only after Google crawls/indexes the Chinese URLs and sees the hreflang/canonical signals.
