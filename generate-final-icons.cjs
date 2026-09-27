const fs = require('fs');
const path = require('path');
const opentype = require('opentype.js');
const { Resvg } = require('@resvg/resvg-js');

// 1. Load Liberation Serif Bold for vector path generation of brand name
const fontBuf = fs.readFileSync('/usr/share/fonts/truetype/liberation/LiberationSerif-Bold.ttf');
const font = opentype.parse(fontBuf.buffer.slice(fontBuf.byteOffset, fontBuf.byteOffset + fontBuf.byteLength));

// 2. Create 'ZEN VORA' vector path
const textString = "Z E N   V O R A";
const fontSize = 52;
const tempPath = font.getPath(textString, 0, 0, fontSize);
const tBBox = tempPath.getBoundingBox();
const textWidth = tBBox.x2 - tBBox.x1;
const textX = 512 - (tBBox.x1 + textWidth / 2);
const textY = 845;
const brandTextPathData = font.getPath(textString, textX, textY, fontSize).toPathData(2);

// 3. Build master scalable SVG with metallic champagne gold gradients
// Perfectly centered at (512, 512)
const masterSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="1024" height="1024">
  <defs>
    <!-- Multi-stop luxury champagne metallic gold linear gradient -->
    <linearGradient id="champagne-gold-main" x1="10%" y1="5%" x2="90%" y2="95%">
      <stop offset="0%" stop-color="#FFFDF0" />
      <stop offset="12%" stop-color="#FCEAB3" />
      <stop offset="28%" stop-color="#E5BC58" />
      <stop offset="48%" stop-color="#BA8620" />
      <stop offset="68%" stop-color="#DFB34D" />
      <stop offset="85%" stop-color="#FFF1C2" />
      <stop offset="100%" stop-color="#B38018" />
    </linearGradient>

    <!-- Highlight gradient for raised bevel and light reflections -->
    <linearGradient id="champagne-gold-bright" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" />
      <stop offset="25%" stop-color="#FFF5CE" />
      <stop offset="55%" stop-color="#E5BE60" />
      <stop offset="85%" stop-color="#C59325" />
      <stop offset="100%" stop-color="#8C600B" />
    </linearGradient>

    <!-- Deep warm bronze-gold gradient for shadow/loop transitions -->
    <linearGradient id="champagne-gold-deep" x1="100%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#9C6B0F" />
      <stop offset="35%" stop-color="#D6A435" />
      <stop offset="70%" stop-color="#FFF3C4" />
      <stop offset="100%" stop-color="#B8851B" />
    </linearGradient>

    <!-- Wing / feather plume radiance gradient -->
    <linearGradient id="wing-plume-grad-1" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#A87413" />
      <stop offset="35%" stop-color="#E2B750" />
      <stop offset="65%" stop-color="#FFF4CA" />
      <stop offset="100%" stop-color="#E8BE59" />
    </linearGradient>

    <linearGradient id="wing-plume-grad-2" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#946309" />
      <stop offset="30%" stop-color="#D5A232" />
      <stop offset="70%" stop-color="#FFF1BE" />
      <stop offset="100%" stop-color="#B8851C" />
    </linearGradient>

    <!-- Text gold luster gradient -->
    <linearGradient id="gold-text-grad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#DFB348" />
      <stop offset="20%" stop-color="#FFF8DC" />
      <stop offset="45%" stop-color="#C89626" />
      <stop offset="70%" stop-color="#FFF5CF" />
      <stop offset="100%" stop-color="#DCAE40" />
    </linearGradient>
  </defs>

  <!-- Centered Emblem Group: Mathematically aligned so Center X = 512, Center Y = 512 -->
  <g id="zen-vora-logo-centered" transform="translate(512, 512) scale(1.12) translate(-558.5, -497)">

    <!-- ==================== 1. TOP BAR OF 'Z' ==================== -->
    <path d="
      M 292,205
      C 278,190 258,182 236,180
      C 256,170 302,158 362,158
      L 672,158
      C 692,158 708,148 718,136
      C 722,154 728,174 702,198
      L 656,212
      L 316,212
      C 306,210 298,208 292,205 Z"
      fill="url(#champagne-gold-bright)"
    />

    <!-- ==================== 2. DIAGONAL OF 'Z' ==================== -->
    <path d="
      M 666,185
      C 678,198 672,216 652,238
      L 356,674
      C 336,702 312,718 286,725
      C 310,725 338,710 365,680
      L 696,200
      C 706,185 690,175 666,185 Z"
      fill="url(#champagne-gold-main)"
    />

    <!-- ==================== 3. Z BASE LOOP & V LEFT STEM ==================== -->
    <path d="
      M 316,670
      C 342,670 382,670 426,670
      C 406,620 392,560 384,490
      C 376,415 386,340 408,275
      C 424,236 442,208 466,188
      C 452,208 436,244 426,290
      C 410,358 404,430 412,500
      C 420,570 442,630 480,680
      L 512,735
      L 486,735
      C 440,695 380,695 306,695
      C 266,695 240,712 230,730
      C 238,705 260,678 300,672
      L 316,670 Z"
      fill="url(#champagne-gold-deep)"
    />

    <!-- ==================== 4. V RIGHT WING MAIN STEM ==================== -->
    <path d="
      M 486,735
      L 512,735
      C 536,705 580,615 628,510
      C 676,400 726,290 766,190
      C 782,150 798,122 816,110
      C 802,130 786,168 768,212
      C 728,318 680,432 632,538
      C 590,630 545,705 512,735 Z"
      fill="url(#champagne-gold-main)"
    />

    <!-- ==================== 5. FOUR FEATHER / WING PLUMES ==================== -->
    <!-- Plume 1 (Top Wing Flourish) -->
    <path d="
      M 750,218
      C 780,182 830,152 888,140
      C 860,162 820,192 790,232
      C 772,256 760,275 752,288
      C 755,262 755,240 750,218 Z"
      fill="url(#wing-plume-grad-1)"
    />

    <!-- Plume 2 (Upper-Mid Wing Flourish) -->
    <path d="
      M 710,312
      C 750,278 812,252 875,245
      C 840,268 795,302 755,342
      C 734,364 720,385 712,398
      C 716,368 715,340 710,312 Z"
      fill="url(#wing-plume-grad-2)"
    />

    <!-- Plume 3 (Lower-Mid Wing Flourish) -->
    <path d="
      M 668,418
      C 710,382 775,362 842,362
      C 805,385 755,420 715,460
      C 696,480 682,502 672,516
      C 677,485 676,452 668,418 Z"
      fill="url(#wing-plume-grad-1)"
    />

    <!-- Plume 4 (Base Wing Flourish) -->
    <path d="
      M 622,525
      C 665,490 732,478 800,482
      C 765,505 715,540 678,580
      C 660,600 648,618 638,632
      C 642,598 636,562 622,525 Z"
      fill="url(#wing-plume-grad-2)"
    />

    <!-- Intersecting Jewel Nexus -->
    <polygon points="512,390 528,412 512,434 496,412" fill="url(#champagne-gold-bright)" />
    <circle cx="512" cy="412" r="2.5" fill="#FFFDF2" />

    <!-- ==================== 6. BRAND TEXT 'Z E N   V O R A' ==================== -->
    <path d="${brandTextPathData}" fill="url(#gold-text-grad)" />

    <!-- ==================== 7. REFINED LUXURY RULE ==================== -->
    <line x1="335" y1="880" x2="690" y2="880" stroke="url(#gold-text-grad)" stroke-width="1.8" stroke-linecap="round" opacity="0.8" />
    <circle cx="512" cy="880" r="3" fill="url(#champagne-gold-bright)" />
    <polygon points="512,876 516,880 512,884 508,880" fill="#FFFCE6" />

  </g>
</svg>`;

// Save master SVG
fs.writeFileSync('zenvora-logo.svg', masterSvg);
console.log('Saved zenvora-logo.svg');

// Multi-size ICO file generator (16x16, 32x32, 48x48)
function createIco(pngBuffers) {
  const count = pngBuffers.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(count, 4);

  const dirSize = count * 16;
  let offset = 6 + dirSize;

  const entries = [];
  const datas = [];

  for (const item of pngBuffers) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(item.width >= 256 ? 0 : item.width, 0);
    entry.writeUInt8(item.height >= 256 ? 0 : item.height, 1);
    entry.writeUInt8(0, 2);
    entry.writeUInt8(0, 3);
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(item.buffer.length, 8);
    entry.writeUInt32LE(offset, 12);

    entries.push(entry);
    datas.push(item.buffer);
    offset += item.buffer.length;
  }

  return Buffer.concat([header, ...entries, ...datas]);
}

// Render sizes
const sizes = [
  { name: 'icon-1024.png', size: 1024 },
  { name: 'zenvora-logo-1024.png', size: 1024 },
  { name: 'icon-512.png', size: 512 },
  { name: 'icon-192.png', size: 192 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'favicon-48x48.png', size: 48 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'favicon-16x16.png', size: 16 }
];

const rendered = {};

for (const s of sizes) {
  const r = new Resvg(masterSvg, { fitTo: { mode: 'width', value: s.size } });
  const buf = r.render().asPng();
  rendered[s.size] = buf;
  fs.writeFileSync(s.name, buf);
  console.log(`Generated ${s.name} (${s.size}x${s.size}, ${buf.length} bytes)`);
}

// Generate favicon.png and favicon.ico
fs.writeFileSync('favicon.png', rendered[32]);

const icoBuf = createIco([
  { width: 16, height: 16, buffer: rendered[16] },
  { width: 32, height: 32, buffer: rendered[32] },
  { width: 48, height: 48, buffer: rendered[48] }
]);
fs.writeFileSync('favicon.ico', icoBuf);
console.log(`Generated favicon.ico (${icoBuf.length} bytes)`);

// Also copy to dist/ if dist exists
const distDir = path.join(__dirname, 'dist');
if (fs.existsSync(distDir)) {
  const copyList = [
    'zenvora-logo.svg',
    'icon-1024.png',
    'zenvora-logo-1024.png',
    'icon-512.png',
    'icon-192.png',
    'apple-touch-icon.png',
    'favicon-48x48.png',
    'favicon-32x32.png',
    'favicon-16x16.png',
    'favicon.png',
    'favicon.ico'
  ];
  for (const f of copyList) {
    fs.copyFileSync(f, path.join(distDir, f));
  }
  console.log('Copied all icon assets to /dist');
}
