/* ZENVORA SHOOP - Technical SEO runtime helpers */
(function () {
  'use strict';
  var origin = window.location.origin;
  var path = window.location.pathname.replace(/\/+$/, '') || '/';
  var canonicalUrl = origin + (path === '/' ? '/' : path);

  function setMeta(selector, attr, value) {
    var el = document.querySelector(selector);
    if (el) el.setAttribute(attr, value);
  }
  var canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) canonical.href = canonicalUrl;
  setMeta('meta[property="og:url"]', 'content', canonicalUrl);

  var pageTitle = document.title;
  var description = document.querySelector('meta[name="description"]');
  var descriptionText = description ? description.getAttribute('content') : '';
  setMeta('meta[property="og:title"]','content',pageTitle);
  setMeta('meta[property="og:description"]','content',descriptionText);
  setMeta('meta[name="twitter:title"]','content',pageTitle);
  setMeta('meta[name="twitter:description"]','content',descriptionText);
  document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(function(link){link.href=canonicalUrl;});

  var org = {
    '@context':'https://schema.org','@type':'Organization','@id':origin+'/#organization',
    name:'ZENVORA SHOOP',url:origin+'/',
    description:'Pakistani fashion store for ladies suits, gents suits and footwear.',
    sameAs:['https://www.facebook.com/zenvorashoop/','https://www.instagram.com/zenvorashoop/'],
    contactPoint:[{'@type':'ContactPoint',telephone:'+92-323-2974451',contactType:'customer service',areaServed:'PK',availableLanguage:['English','Urdu']}]
  };
  var os=document.createElement('script');os.type='application/ld+json';os.textContent=JSON.stringify(org);document.head.appendChild(os);

  if(location.pathname.endsWith('/index.html') || location.pathname==='/' || location.pathname.endsWith('/')){
    var ws={'@context':'https://schema.org','@type':'WebSite','@id':origin+'/#website',name:'ZENVORA SHOOP',url:origin+'/'};
    var wss=document.createElement('script');wss.type='application/ld+json';wss.textContent=JSON.stringify(ws);document.head.appendChild(wss);
  }

  if(typeof productName!=='undefined' && typeof productPrice!=='undefined'){
    var imageList=(typeof productImages!=='undefined' && Array.isArray(productImages))
      ? productImages.map(function(src){return new URL(src,document.baseURI).href;}) : [];
    var product={
      '@context':'https://schema.org','@type':'Product',
      name:productName,description:(typeof productDescription!=='undefined'?productDescription:descriptionText),
      sku:String(typeof productId!=='undefined'?productId:''),category:(typeof productCategory!=='undefined'?productCategory:'Fashion'),
      image:imageList,brand:{'@type':'Brand',name:'ZENVORA SHOOP'},
      offers:{'@type':'Offer',url:canonicalUrl,priceCurrency:'PKR',price:Number(productPrice),
        itemCondition:'https://schema.org/NewCondition'}
    };
    var ps=document.createElement('script');ps.type='application/ld+json';ps.textContent=JSON.stringify(product);document.head.appendChild(ps);
  }
})();
