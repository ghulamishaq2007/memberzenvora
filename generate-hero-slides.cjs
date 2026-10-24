const fs = require('fs');
const path = require('path');
const { Resvg } = require('@resvg/resvg-js');

const slidesConfig = [
  {
    output: 'hero-slide-1.jpg',
    source: 'arabic-lawn.png2.jpeg',
    category: "Pakistani Pastel Lawn Suits",
    badge: "Pastel Lawn Collection",
    bgStart: "#1a1613",
    bgMid: "#261f18",
    bgEnd: "#332a21",
    glowColor: "rgba(94, 187, 180, 0.18)" // subtle turquoise ambient glow
  },
  {
    output: 'hero-slide-2.jpg',
    source: 'royal-blue-chiffon-maxi-suit-with-gold-embroidery-for-women2.jpeg',
    category: "Navy Blue Embroidered Suits",
    badge: "Luxury Embroidered Pret",
    bgStart: "#12141a",
    bgMid: "#1a1d26",
    bgEnd: "#232836",
    glowColor: "rgba(59, 130, 246, 0.18)" // deep royal blue ambient glow
  },
  {
    output: 'hero-slide-3.jpg',
    source: 'red-arabic-lawn.png2.jpeg',
    category: "Festive Red & Maroon Dresses",
    badge: "Festive Wedding Wear",
    bgStart: "#1a1214",
    bgMid: "#26181b",
    bgEnd: "#381f25",
    glowColor: "rgba(239, 68, 68, 0.16)" // crimson festive glow
  },
  {
    output: 'hero-slide-4.jpg',
    source: 'printed-lawn-suit-white.png.jpeg',
    category: "Beige, Cream & Sage-Green Suits",
    badge: "Pure Cotton Lawn Collection",
    bgStart: "#181816",
    bgMid: "#242520",
    bgEnd: "#32332c",
    glowColor: "rgba(216, 181, 109, 0.18)" // warm champagne glow
  },
  {
    output: 'hero-slide-5.jpg',
    source: 'brown-embroidered-3-piece.png4.jpeg',
    category: "Festive & Formal Luxury Couture",
    badge: "Embroidered 3-Piece Formal",
    bgStart: "#1c1613",
    bgMid: "#29201a",
    bgEnd: "#382c24",
    glowColor: "rgba(216, 181, 109, 0.2)" // rich gold zari glow
  },
  {
    output: 'hero-slide-6.jpg',
    source: 'mens-grey.png.jpeg',
    category: "Stylish Men's Kurta Suits",
    badge: "Executive Gents Wear",
    bgStart: "#151718",
    bgMid: "#1e2225",
    bgEnd: "#2c3135",
    glowColor: "rgba(156, 163, 175, 0.16)" // crisp silver ambient glow
  },
  {
    output: 'hero-slide-7.jpg',
    source: 'girl-leather-textured-shoulder-bag-girl-waring.jpeg',
    category: "Signature Fashion and Bags Campaign",
    badge: "Curated Fashion and Accessories",
    bgStart: "#191512",
    bgMid: "#261e19",
    bgEnd: "#362a22",
    glowColor: "rgba(216, 181, 109, 0.18)" // champagne luxury glow
  }
];

function buildSlideSVG(slide) {
  const imgPath = path.join(__dirname, slide.source);
  if (!fs.existsSync(imgPath)) {
    throw new Error('Image not found: ' + imgPath);
  }
  const imgBuffer = fs.readFileSync(imgPath);
  const b64 = 'data:image/jpeg;base64,' + imgBuffer.toString('base64');

  return `
<svg width="1920" height="1080" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <!-- Background Gradient -->
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="0.6">
      <stop offset="0%" stop-color="${slide.bgStart}" />
      <stop offset="45%" stop-color="${slide.bgMid}" />
      <stop offset="100%" stop-color="${slide.bgEnd}" />
    </linearGradient>

    <!-- Warm Radial Luxury Glow behind Model -->
    <radialGradient id="modelGlow" cx="72%" cy="48%" r="45%" fx="72%" fy="48%">
      <stop offset="0%" stop-color="${slide.glowColor}" />
      <stop offset="60%" stop-color="${slide.glowColor}" stop-opacity="0.3" />
      <stop offset="100%" stop-color="${slide.glowColor}" stop-opacity="0" />
    </radialGradient>

    <!-- Soft Left Edge Fade for Seamless Blend -->
    <linearGradient id="edgeMaskGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#000000" stop-opacity="0" />
      <stop offset="22%" stop-color="#ffffff" stop-opacity="0.95" />
      <stop offset="100%" stop-color="#ffffff" stop-opacity="1" />
    </linearGradient>
    <mask id="edgeMask">
      <rect x="740" y="0" width="1180" height="1080" fill="url(#edgeMaskGrad)" />
    </mask>

    <!-- Subtle vignette on left side -->
    <linearGradient id="leftVignette" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#0f0d0b" stop-opacity="0.92" />
      <stop offset="38%" stop-color="#14110e" stop-opacity="0.75" />
      <stop offset="70%" stop-color="#191512" stop-opacity="0.25" />
      <stop offset="100%" stop-color="#191512" stop-opacity="0" />
    </linearGradient>

    <!-- Subtle Warm Gold Accent Border -->
    <linearGradient id="goldBorder" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#D8B56D" stop-opacity="0.6" />
      <stop offset="50%" stop-color="#F5E4BD" stop-opacity="0.85" />
      <stop offset="100%" stop-color="#D8B56D" stop-opacity="0.3" />
    </linearGradient>
  </defs>

  <!-- 1. Rich Base Studio Background -->
  <rect width="1920" height="1080" fill="url(#bgGrad)" />
  
  <!-- 2. Warm Ambient Glow -->
  <rect width="1920" height="1080" fill="url(#modelGlow)" />

  <!-- 3. Authentic Pakistani Fashion Photography (Right Placed with Smooth Mask) -->
  <g mask="url(#edgeMask)">
    <image href="${b64}" x="780" y="30" width="1100" height="1020" preserveAspectRatio="xMidYMid slice" />
  </g>

  <!-- 4. Soft Left Studio Shadow (Guarantees 100% Crisp White Text Readability) -->
  <rect width="1920" height="1080" fill="url(#leftVignette)" />

  <!-- 5. Refined Gold Fashion Tag (Top Right) -->
  <g transform="translate(1480, 55)">
    <rect x="0" y="0" width="380" height="42" rx="21" fill="rgba(20, 16, 13, 0.72)" stroke="url(#goldBorder)" stroke-width="1.2" />
    <text x="190" y="26" fill="#F5E4BD" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="700" letter-spacing="2" text-anchor="middle">
      ZENVORA • ${slide.badge.toUpperCase()}
    </text>
  </g>

  <!-- 6. Bottom Subtle Gold Accent Line -->
  <rect x="0" y="1076" width="1920" height="4" fill="url(#goldBorder)" />
</svg>
`;
}

console.log('Rendering 7 authentic Pakistani fashion hero slides at 1920x1080...');

slidesConfig.forEach((cfg, idx) => {
  try {
    const svg = buildSlideSVG(cfg);
    const resvg = new Resvg(svg, {
      fitTo: { mode: 'width', value: 1920 },
      font: { loadSystemFonts: true }
    });
    const pngData = resvg.render();
    const pngBuffer = pngData.asPng();
    fs.writeFileSync(cfg.output, pngBuffer);
    console.log(`[Slide ${idx + 1}/7] Successfully generated: ${cfg.output} (${(pngBuffer.length / 1024).toFixed(1)} KB) - ${cfg.category}`);
  } catch (err) {
    console.error(`Failed to generate slide ${idx + 1}:`, err);
  }
});

console.log('All 7 Pakistani fashion hero slides generated successfully!');
