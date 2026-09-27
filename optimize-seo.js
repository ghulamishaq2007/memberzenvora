import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { INITIAL_PRODUCTS } from './firebase-config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://zenvorashoop.netlify.app';

const WA_BUTTON_HTML = `
  <!-- Floating WhatsApp Button -->
  <a href="https://wa.me/923232974451" class="floating-whatsapp-btn" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
    <svg class="whatsapp-icon" viewBox="0 0 24 24" width="30" height="30" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.04 3.67C14.24 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.04 20.16C10.66 20.16 9.3 19.8 8.1 19.09L7.81 18.92L4.69 19.74L5.52 16.7L5.33 16.4C4.55 15.16 4.14 13.56 4.14 11.92C4.14 7.38 7.84 3.67 12.04 3.67ZM8.83 7.35C8.64 7.35 8.34 7.42 8.09 7.69C7.84 7.96 7.13 8.62 7.13 9.97C7.13 11.32 8.11 12.62 8.25 12.81C8.39 13 10.18 15.77 12.92 16.95C13.57 17.23 14.08 17.4 14.48 17.53C15.13 17.74 15.72 17.71 16.19 17.64C16.71 17.56 17.79 16.99 18.02 16.34C18.25 15.69 18.25 15.14 18.18 15.02C18.11 14.9 17.92 14.83 17.64 14.69C17.36 14.55 15.99 13.88 15.73 13.79C15.48 13.7 15.3 13.65 15.11 13.93C14.93 14.21 14.4 14.83 14.24 15.02C14.08 15.21 13.92 15.23 13.64 15.09C13.36 14.95 12.46 14.66 11.39 13.71C10.56 12.97 10 12.05 9.84 11.77C9.68 11.49 9.82 11.34 9.96 11.2C10.09 11.07 10.25 10.86 10.39 10.7C10.53 10.54 10.58 10.42 10.67 10.23C10.76 10.04 10.72 9.88 10.65 9.74C10.58 9.6 10.02 8.23 9.79 7.67C9.56 7.13 9.33 7.21 9.16 7.2C9.01 7.2 8.83 7.2 8.83 7.35Z"/>
    </svg>
    <span class="whatsapp-tooltip">Chat on WhatsApp</span>
  </a>`;

console.log(`Auditing and optimizing ${INITIAL_PRODUCTS.length} products...`);

let updatedCount = 0;

for (const p of INITIAL_PRODUCTS) {
  const filePath = path.join(__dirname, p.productUrl);
  if (!fs.existsSync(filePath)) {
    console.warn(`File not found: ${p.productUrl}`);
    continue;
  }

  let html = fs.readFileSync(filePath, 'utf8');

  const canonicalUrl = `${BASE_URL}/${p.productUrl}`;
  const pageTitle = `${p.productName} | ZENVORA SHOOP`;
  const metaDesc = `Shop ${p.productName} at ZENVORA SHOOP. Authentic Pakistani ${p.category.toLowerCase()} crafted for luxury and elegance with Cash on Delivery in Karachi and WhatsApp ordering.`;
  
  const mainImage = p.image.startsWith('http') ? p.image : `${BASE_URL}/${p.image}`;

  // 1. Ensure Title
  if (html.includes('<title>')) {
    html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${pageTitle}</title>`);
  }

  // 2. Ensure Meta Description
  if (html.includes('<meta name="description"')) {
    html = html.replace(/<meta name="description" content="[^"]*">/i, `<meta name="description" content="${metaDesc}">`);
  }

  // 3. Ensure Favicons
  if (!html.includes('href="/icon-192.png"')) {
    // Remove old favicon tags
    html = html.replace(/<link rel="icon"[^>]*>/gi, '');
    html = html.replace(/<link rel="apple-touch-icon"[^>]*>/gi, '');
    // Insert new favicon tags right after <meta name="viewport" ...>
    html = html.replace(/(<meta name="viewport"[^>]*>)/i, `$1\n  <link rel="icon" type="image/png" href="/icon-192.png">\n  <link rel="apple-touch-icon" href="/icon-192.png">`);
  }

  // 4. Ensure Self-referencing Canonical URL
  if (html.includes('rel="canonical"')) {
    html = html.replace(/<link rel="canonical" href="[^"]*">/i, `<link rel="canonical" href="${canonicalUrl}">`);
  } else {
    html = html.replace(/(<\/title>)/i, `$1\n  <link rel="canonical" href="${canonicalUrl}">`);
  }

  // 5. Ensure OpenGraph Tags
  if (html.includes('property="og:title"')) {
    html = html.replace(/<meta property="og:title" content="[^"]*">/i, `<meta property="og:title" content="${pageTitle}">`);
  }
  if (html.includes('property="og:description"')) {
    html = html.replace(/<meta property="og:description" content="[^"]*">/i, `<meta property="og:description" content="${metaDesc}">`);
  }
  if (html.includes('property="og:url"')) {
    html = html.replace(/<meta property="og:url" content="[^"]*">/i, `<meta property="og:url" content="${canonicalUrl}">`);
  }
  if (html.includes('property="og:image"')) {
    html = html.replace(/<meta property="og:image" content="[^"]*">/i, `<meta property="og:image" content="${mainImage}">`);
  }
  if (html.includes('property="og:type"')) {
    html = html.replace(/<meta property="og:type" content="[^"]*">/i, `<meta property="og:type" content="product">`);
  }

  // 6. Ensure Twitter Tags
  if (html.includes('name="twitter:title"')) {
    html = html.replace(/<meta name="twitter:title" content="[^"]*">/i, `<meta name="twitter:title" content="${pageTitle}">`);
  }
  if (html.includes('name="twitter:description"')) {
    html = html.replace(/<meta name="twitter:description" content="[^"]*">/i, `<meta name="twitter:description" content="${metaDesc}">`);
  }
  if (html.includes('name="twitter:image"')) {
    html = html.replace(/<meta name="twitter:image" content="[^"]*">/i, `<meta name="twitter:image" content="${mainImage}">`);
  }

  // Extract all productImages from client script if present
  let allImages = [mainImage];
  const imgArrayMatch = html.match(/const productImages = \[([\s\S]*?)\];/);
  if (imgArrayMatch) {
    const rawImgs = imgArrayMatch[1].match(/"([^"]+)"/g);
    if (rawImgs) {
      allImages = rawImgs.map(s => {
        const clean = s.replace(/"/g, '');
        return clean.startsWith('http') ? clean : `${BASE_URL}/${clean}`;
      });
    }
  }

  // 7. Generate Product JSON-LD + BreadcrumbList JSON-LD
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": p.productName,
    "image": allImages,
    "description": metaDesc,
    "sku": p.productId,
    "category": p.category,
    "brand": {
      "@type": "Brand",
      "name": "ZENVORA SHOOP"
    },
    "offers": {
      "@type": "Offer",
      "url": canonicalUrl,
      "priceCurrency": "PKR",
      "price": p.price,
      "availability": p.status === "out_of_stock" ? "https://schema.org/OutOfStock" : "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": `${BASE_URL}/`
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": p.category,
        "item": `${BASE_URL}/#products`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": p.productName,
        "item": canonicalUrl
      }
    ]
  };

  const schemaHtml = `\n<script type="application/ld+json">${JSON.stringify(productSchema)}</script>\n<script type="application/ld+json">${JSON.stringify(breadcrumbSchema)}</script>\n`;

  // Remove existing Product or BreadcrumbList scripts to avoid duplication
  html = html.replace(/<script type="application\/ld\+json">[\s\S]*?"@type"\s*:\s*"Product"[\s\S]*?<\/script>/gi, '');
  html = html.replace(/<script type="application\/ld\+json">[\s\S]*?"@type"\s*:\s*"BreadcrumbList"[\s\S]*?<\/script>/gi, '');

  // Insert updated Schema before </head>
  html = html.replace('</head>', `${schemaHtml}</head>`);

  // 8. Fix Alt Text on main images
  html = html.replace(/<img([^>]*?)alt="(?:image|preview)?"([^>]*?)>/gi, (match, before, after) => {
    return `<img${before}alt="${p.productName} - ZENVORA SHOOP"${after}>`;
  });

  // 9. Floating WhatsApp Button
  if (!html.includes('class="floating-whatsapp-btn"')) {
    html = html.replace('</body>', `${WA_BUTTON_HTML}\n</body>`);
  }

  fs.writeFileSync(filePath, html, 'utf8');
  updatedCount++;
  console.log(`✓ Optimized ${p.productUrl}`);
}

console.log(`Successfully optimized ${updatedCount} product pages.`);
