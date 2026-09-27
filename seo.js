/* ZENVORA SHOOP - Technical SEO runtime helpers */
(function () {
  'use strict';
  var BASE_URL = 'https://zenvorashoop.netlify.app';

  function hasSchemaType(type) {
    var scripts = document.querySelectorAll('script[type="application/ld+json"]');
    for (var i = 0; i < scripts.length; i++) {
      try {
        var content = scripts[i].textContent || '';
        if (content.indexOf('"@type":"' + type + '"') !== -1 || content.indexOf('"@type": "' + type + '"') !== -1) {
          return true;
        }
      } catch (e) {}
    }
    return false;
  }

  function setMeta(selector, attr, value) {
    var el = document.querySelector(selector);
    if (el && value) el.setAttribute(attr, value);
  }

  // Ensure deterministic canonical URL using the official domain
  var canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    var path = window.location.pathname.replace(/\/+$/, '') || '/';
    var canonicalUrl = BASE_URL + (path === '/' ? '/' : path);
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    canonical.href = canonicalUrl;
    document.head.appendChild(canonical);
  }

  // Avoid injecting duplicate Organization schema
  if (!hasSchemaType('Organization')) {
    var org = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': BASE_URL + '/#organization',
      'name': 'ZENVORA SHOOP',
      'url': BASE_URL + '/',
      'logo': BASE_URL + '/icon-512.png',
      'sameAs': [
        'https://www.facebook.com/zenvorashoop/',
        'https://www.instagram.com/zenvorashoop/',
        'https://www.tiktok.com/@zenvorashoop'
      ],
      'contactPoint': {
        '@type': 'ContactPoint',
        'telephone': '+92-323-2974451',
        'contactType': 'customer service',
        'areaServed': 'PK',
        'availableLanguage': ['English', 'Urdu']
      }
    };
    var os = document.createElement('script');
    os.type = 'application/ld+json';
    os.textContent = JSON.stringify(org);
    document.head.appendChild(os);
  }

  // Avoid injecting duplicate WebSite schema on homepage
  var isHome = window.location.pathname === '/' || window.location.pathname.endsWith('/index.html') || window.location.pathname.endsWith('/');
  if (isHome && !hasSchemaType('WebSite')) {
    var ws = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': BASE_URL + '/#website',
      'name': 'ZENVORA SHOOP',
      'url': BASE_URL + '/',
      'publisher': {
        '@id': BASE_URL + '/#organization'
      }
    };
    var wss = document.createElement('script');
    wss.type = 'application/ld+json';
    wss.textContent = JSON.stringify(ws);
    document.head.appendChild(wss);
  }

  // Avoid injecting duplicate Product schema
  if (typeof productName !== 'undefined' && typeof productPrice !== 'undefined' && !hasSchemaType('Product')) {
    var canonicalHref = canonical ? canonical.href : (BASE_URL + window.location.pathname);
    var description = document.querySelector('meta[name="description"]');
    var descriptionText = description ? description.getAttribute('content') : '';
    var imageList = (typeof productImages !== 'undefined' && Array.isArray(productImages))
      ? productImages.map(function(src){ return new URL(src, BASE_URL + '/').href; }) : [];
    
    var product = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      'name': productName,
      'description': (typeof productDescription !== 'undefined' ? productDescription : descriptionText),
      'sku': String(typeof productId !== 'undefined' ? productId : ''),
      'category': (typeof productCategory !== 'undefined' ? productCategory : 'Fashion'),
      'image': imageList,
      'brand': { '@type': 'Brand', 'name': 'ZENVORA SHOOP' },
      'offers': {
        '@type': 'Offer',
        'url': canonicalHref,
        'priceCurrency': 'PKR',
        'price': Number(productPrice),
        'availability': 'https://schema.org/InStock',
        'itemCondition': 'https://schema.org/NewCondition'
      }
    };
    var ps = document.createElement('script');
    ps.type = 'application/ld+json';
    ps.textContent = JSON.stringify(product);
    document.head.appendChild(ps);
  }
})();
