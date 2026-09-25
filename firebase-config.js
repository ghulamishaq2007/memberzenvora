// Firebase configuration and initialization for ZENVORA SHOOP
// Configured for browser environments (supports pure ES modules or script tag imports)

export const firebaseConfig = {
  apiKey: "AIzaSyDi-NRm9L-FBlGW2B0XfQ7UJFKgHkBG2ms",
  authDomain: "gen-lang-client-0896359096.firebaseapp.com",
  projectId: "gen-lang-client-0896359096",
  firestoreDatabaseId: "ai-studio-zenvorashoop-7710eb55-b73d-4051-85ec-9994c50ef104",
  storageBucket: "gen-lang-client-0896359096.firebasestorage.app",
  messagingSenderId: "599206346518",
  appId: "1:599206346518:web:9946f09f5fe6f226b25a37"
};

// Initial catalogue seed definition
export const INITIAL_PRODUCTS = [
  {
    productId: "arabic-lawn",
    productName: "Turquoise Block Printed 3Pcs Maxi Set for Women",
    productUrl: "arabic-lawn.html",
    price: 2529,
    image: "arabic-lawn.png.jpeg",
    category: "Ladies Suits",
    stock: 4,
    status: "available"
  },
  {
    productId: "black-wash-wear-men-suit-fabric-for-all-season",
    productName: "Black Wash & Wear Men Suit Fabric for All Season",
    productUrl: "black-wash-&-wear-men-suit-fabric-for-all-season.htm",
    price: 2939,
    image: "black-wash-&-wear-men-suit-fabric-for-all-season.png.jpeg",
    category: "Gents Suits",
    stock: 4,
    status: "available"
  },
  {
    productId: "brown-embroidered-3-piece",
    productName: "Brown Embroidered 3-Piece Cotton Lawn Suit for Women",
    productUrl: "brown-embroidered-3-piece.html",
    price: 3330,
    image: "brown-embroidered-3-piece.png4.jpeg",
    category: "Ladies Suits",
    stock: 4,
    status: "available"
  },
  {
    productId: "cotton-lawn",
    productName: "Blue Embroidered Cotton Lawn 3Pcs Set",
    productUrl: "cotton-lawn.html",
    price: 3330,
    image: "cotton-lawn.png.jpeg",
    category: "Ladies Suits",
    stock: 4,
    status: "available"
  },
  {
    productId: "gents-peshawari-chappal",
    productName: "Kaptaan Cut Pure Leather Peshawari Chappal",
    productUrl: "gents-peshawari-chappal.html",
    price: 3450,
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=800&q=80",
    category: "Sandals",
    stock: 4,
    status: "available"
  },
  {
    productId: "girl-leather-textured-hand-bag",
    productName: "Girl's Leather Textured Hand Bag",
    productUrl: "girl-leather-textured-hand-bag.html",
    price: 2639,
    image: "girl-leather-textured-hand-bag.png4.jpeg",
    category: "Hand Bags",
    stock: 4,
    status: "available"
  },
  {
    productId: "girl-leather-textured-shoulder-bag",
    productName: "Girl's Leather Textured Shoulder Bag",
    productUrl: "girl-leather-textured-shoulder-bag.html",
    price: 2639,
    image: "girl-leather-textured-shoulder-bag-girl-waring.jpeg",
    category: "Hand Bags",
    stock: 4,
    status: "available"
  },
  {
    productId: "men-blue-suit",
    productName: "Royal Blue Boski Wash & Wear Gents Suit",
    productUrl: "men-blue-suit.html",
    price: 3950,
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    category: "Gents Suits",
    stock: 4,
    status: "available"
  },
  {
    productId: "men-cotton-unstitched-suit-light-brown-summer",
    productName: "Men's Light Brown Cotton Unstitched Suit - Summer",
    productUrl: "men-cotton-unstitched-suit-light-brown-summer.html",
    price: 3120,
    image: "men-cotton-unstitched-suit-light-brown-summer.png.jpeg",
    category: "Gents Suits",
    stock: 4,
    status: "available"
  },
  {
    productId: "men-khaddar-plain-blue-suit-summer",
    productName: "Men Khaddar Plain Blue Suit Summer",
    productUrl: "men-khaddar-plain-blue-suit-summer.html",
    price: 2559,
    image: "men-khaddar-plain-blue-suit-summer.png.jpeg",
    category: "Gents Suits",
    stock: 4,
    status: "available"
  },
  {
    productId: "men-wash-&-wear-plain-suit-brown",
    productName: "Men Wash & Wear Plain Suit Brown All Season",
    productUrl: "men-wash-&-wear-plain-suit-brown.html",
    price: 2939,
    image: "men-wash-&-wear-plain-suit-brown.png.jpeg",
    category: "Gents Suits",
    stock: 4,
    status: "available"
  },
  {
    productId: "mens-grey",
    productName: "Men's Grey Wash & Wear Kurta Suit SW-2",
    productUrl: "mens-grey.html",
    price: 2929,
    image: "mens-grey.png.jpeg",
    category: "Gents Suits",
    stock: 4,
    status: "available"
  },
  {
    productId: "orange-cross-strap-rexine-slides-for-women",
    productName: "Orange Cross Strap Rexine Slides for Women",
    productUrl: "orange-cross-strap-rexine-slides-for-women.html",
    price: 1790,
    image: "orange-cross-strap-rexine-slides-for-women1.jpeg",
    category: "Sandals",
    stock: 4,
    status: "available"
  },
  {
    productId: "printed-lawn-3",
    productName: "Printed Lawn 3-Piece Women's Suit Multicolor",
    productUrl: "printed-lawn-3.html",
    price: 3930,
    image: "printed-lawn-3.png.jpeg",
    category: "Ladies Suits",
    stock: 4,
    status: "available"
  },
  {
    productId: "white-printed-2-piece",
    productName: "Pakistani Printed Lawn Suit White Green Long Sleeve",
    productUrl: "printed-lawn-suit-white.html",
    price: 2190,
    image: "printed-lawn-suit-white.png.jpeg",
    category: "Ladies Suits",
    stock: 4,
    status: "available"
  },
  {
    productId: "red-arabic-lawn",
    productName: "Red Arabic Lawn Suit",
    productUrl: "red-arabic-lawn.html",
    price: 2529,
    image: "red-arabic-lawn.png.jpeg",
    category: "Ladies Suits",
    stock: 4,
    status: "available"
  },
  {
    productId: "tan-leather-shoes",
    productName: "Classic Tan Wingtip Handcrafted Brogues",
    productUrl: "tan-leather-shoes.html",
    price: 5200,
    image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=800&q=80",
    category: "Shoes",
    stock: 4,
    status: "available"
  },
  {
    productId: "women-white-rexine-fancy-slippers",
    productName: "Women's White Rexine Fancy Slippers",
    productUrl: "women-white-rexine-fancy-slippers.html",
    price: 1740,
    image: "women-white-rexine-fancy-slippers.jpeg",
    category: "Sandals",
    stock: 4,
    status: "available"
  },
  {
    productId: "royal-blue-chiffon-maxi-suit-with-gold-embroidery-for-women",
    productName: "Royal Blue Chiffon Maxi Suit with Gold Embroidery for Women",
    productUrl: "royal-blue-chiffon-maxi-suit-with-gold-embroidery-for-women.html",
    price: 3300,
    image: "royal-blue-chiffon-maxi-suit-with-gold-embroidery-for-women.jpeg",
    category: "Ladies Suits",
    stock: 4,
    status: "available"
  }

];

// Alias mapping for any legacy quick-add IDs in index.html
export const PRODUCT_ID_ALIASES = {
  "Turquoise Block Printed 3Pcs Maxi Set for Women": "arabic-lawn",
  "Pakistani Printed Lawn Suit White Green Long Sleeve": "white-printed-2-piece",
  "printed-lawn-suit-white": "white-printed-2-piece",
  "men-charcoal-suit": "men-wash-&-wear-plain-suit-brown",
  "men-ivory-suit": "men-cotton-unstitched-suit-light-brown-summer",
  "black-Gents Suits": "black-wash-wear-men-suit-fabric-for-all-season",
  "black-wash-&-wear-men-suit-fabric-for-all-season": "black-wash-wear-men-suit-fabric-for-all-season",
  "tan-leather-Gents Suits": "men-khaddar-plain-blue-suit-summer",
  "urban-sneakers": "girl-leather-textured-hand-bag",
  "royal-blue-chiffon-maxi-suit-with-gold-embroidery-for-women": "royal-blue-chiffon-maxi-suit-with-gold-embroidery-for-women"

};

export function canonicalizeProductId(id) {
  if (!id) return "";
  const trimmed = String(id).trim();
  return PRODUCT_ID_ALIASES[trimmed] || trimmed;
}
