# PDF Tools Final Global SEO Version

## Included
- JPG to PDF
- PNG to PDF
- Merge PDF
- Browser-based processing
- No file storage
- Tier 1, Tier 2 and Tier 3 languages
- Hreflang generated automatically for every tool page
- Auto language detection on homepage
- Better homepage UI
- Drag and drop upload for image tools
- RTL support for Arabic, Urdu and Persian
- Sitemap and robots

## Languages
English, Chinese Simplified, Spanish, Hindi, Arabic, Portuguese, French, German, Japanese, Russian, Indonesian, Turkish, Korean, Italian, Dutch, Polish, Thai, Vietnamese, Bengali, Urdu, Persian, Malay.

## Run locally
```bash
npm install
npm run dev
```

## Deploy on Vercel
1. Upload this folder to GitHub
2. Import project in Vercel
3. Click Deploy

## Before final launch
Replace `https://your-domain.com` in:
- `app/sitemap.js`
- `app/robots.js`

Update contact email:
- `app/contact/page.js`

## Check hreflang
After deploy:
1. Open a tool page
2. Right click → View Page Source
3. Search: `hreflang`


## Contact form setup
The contact page uses Formspree:
1. Create a free form at Formspree
2. Copy your form ID
3. Open `app/contact/page.js`
4. Replace `YOUR_FORM_ID` with your real ID

Example:
`https://formspree.io/f/abcdwxyz`


## SEO blog posts added
Added 5 English SEO blog posts:
- /en/blog/jpg-to-pdf-without-software
- /en/blog/convert-jpg-to-pdf-mobile
- /en/blog/best-free-jpg-to-pdf-converter
- /en/blog/merge-pdf-online-free
- /en/blog/top-free-pdf-tools-online

Blog index:
- /en/blog

Contact form uses your Formspree link:
- https://formspree.io/f/xqenplzg


## Multilingual trust pages added
Privacy Policy, Terms, FAQ, and Contact now exist for every language route:
- /en/privacy-policy, /hi/privacy-policy, /es/privacy-policy, etc.
- /en/terms, /hi/terms, /es/terms, etc.
- /en/faq, /hi/faq, /es/faq, etc.
- /en/contact, /hi/contact, /es/contact, etc.

Footer links now follow the selected language.
