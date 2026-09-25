# ZENVORA SHOOP — Netlify deployment

This version is configured as a **static HTML/CSS/JavaScript site**.

## If Netlify is connected to GitHub
Use these settings:
- Build command: **leave empty**
- Publish directory: **`.`**
- Base directory: **leave empty**

The included `netlify.toml` already requests these settings.

## Important
After pushing this version to GitHub, trigger a **new deploy** in Netlify.
If an old deployment is still shown, use **Deploys → Trigger deploy → Clear cache and deploy site**.

The site uses:
- `cart.js` for localStorage cart data (`zenvoraCart`)
- `script.js` for category filtering and product-page buttons


## SEO FINAL STEP
Responsive hardening and technical SEO have been added: canonical URLs, robots directives, Open Graph/Twitter metadata, Organization/Product structured data, robots.txt and sitemap.xml. Replace `YOUR-DOMAIN` in `sitemap.xml` with the final live domain before submitting it to Google Search Console. No site can guarantee permanent rankings; ongoing useful content, internal linking, backlinks, performance and product updates still matter.
