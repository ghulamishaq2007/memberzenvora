/* ==========================================================================
   ZENVORA SHOOP - Cart & WhatsApp Order Management (Vanilla JS)
   Brand: ZENVORA SHOOP | WhatsApp: 03232974451
   ========================================================================== */

// Unified single localStorage key for entire website
const CART_KEY = "zenvoraCart";
const WHATSAPP_NUMBER = "923232974451"; // International format for 03232974451

// Canonical product URLs. Also repairs older cart entries saved with the
// previous product filenames/IDs.
const PRODUCT_URLS = {
  "girl-leather-textured-hand-bag": "girl-leather-textured-hand-bag.html",
  "printed-lawn-3": "printed-lawn-3.html",
  "cotton-lawn": "cotton-lawn.html",
  "red-arabic-lawn": "red-arabic-lawn.html",
  "arabic-lawn": "arabic-lawn.html",
  "brown-embroidered-3-piece": "brown-embroidered-3-piece.html",
  "printed-lawn-suit-white": "printed-lawn-suit-white.html",
  "men-cotton-unstitched-suit-light-brown-summer": "men-cotton-unstitched-suit-light-brown-summer.html",
  "gents-peshawari-chappal": "gents-peshawari-chappal.html",
  "black-wash-wear-men-suit-fabric-for-all-season": "black-wash-&-wear-men-suit-fabric-for-all-season.htm",
  "black-wash-&-wear-men-suit-fabric-for-all-season": "black-wash-&-wear-men-suit-fabric-for-all-season.htm",
  "black-Gents Suits": "black-wash-&-wear-men-suit-fabric-for-all-season.htm",
  "men-blue-suit": "men-blue-suit.html",
  "men-wash-&-wear-plain-suit-brown": "men-wash-&-wear-plain-suit-brown.html",
  "men-charcoal-suit": "men-wash-&-wear-plain-suit-brown.html",
  "mens-grey": "mens-grey.html",
  "men-khaddar-plain-blue-suit-summer": "men-khaddar-plain-blue-suit-summer.html",
  "tan-leather-shoes": "tan-leather-shoes.html",
  "orange-cross-strap-rexine-slides-for-women": "orange-cross-strap-rexine-slides-for-women.html",
  "women-white-rexine-fancy-slippers": "women-white-rexine-fancy-slippers.html",
  "gents-peshawari-chappal": "gents-peshawari-chappal.html",
"royal-blue-chiffon-maxi-suit-with-gold-embroidery-for-women": "royal-blue-chiffon-maxi-suit-with-gold-embroidery-for-women.html"


};

function resolveProductUrl(item) {
  const id = String(item?.id || "").trim();
  return PRODUCT_URLS[id] || String(item?.url || "").trim() || "index.html";
}

// --- Core Cart Data Functions ---
function getCart() {
  try {
    const raw = localStorage.getItem(CART_KEY);
    const cart = raw ? JSON.parse(raw) : [];

    // Repair old URLs already stored in this browser's cart.
    let changed = false;
    cart.forEach(item => {
      const resolvedUrl = resolveProductUrl(item);
      if (item.url !== resolvedUrl) {
        item.url = resolvedUrl;
        changed = true;
      }
    });
    if (changed) localStorage.setItem(CART_KEY, JSON.stringify(cart));

    return cart;
  } catch (e) {
    console.error("Error loading cart from localStorage:", e);
    return [];
  }
}

function saveCart(cart) {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    updateCartBadges();
  } catch (e) {
    console.error("Error saving cart to localStorage:", e);
  }
}

function getCartCount() {
  const cart = getCart();
  return cart.reduce((total, item) => total + (Number(item.quantity) || 0), 0);
}

function getCartTotal() {
  const cart = getCart();
  return cart.reduce((sum, item) => sum + ((Number(item.price) || 0) * (Number(item.quantity) || 0)), 0);
}

// Update all cart count badges across all pages
function updateCartBadges() {
  const count = getCartCount();
  const badges = document.querySelectorAll('.cart-badge');
  badges.forEach(badge => {
    badge.textContent = count;
  });
}

// Format Pakistani Rupee Currency
function formatPKR(amount) {
  return 'Rs. ' + Number(amount || 0).toLocaleString('en-PK');
}

// Validate & normalize Pakistani Mobile Number (supports 03XXXXXXXXX, 3XXXXXXXXX, +923XXXXXXXXX, 923XXXXXXXXX, etc.)
function validatePakistaniPhone(phone) {
  if (!phone) return false;
  // Convert Eastern Arabic / Urdu numerals to standard digits
  const normalized = String(phone)
    .replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d))
    .replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d));
  const digitsOnly = normalized.replace(/\D/g, '');

  // 10 digits starting with 3 (e.g. 3232974451)
  if (digitsOnly.length === 10 && digitsOnly.startsWith('3')) return true;
  // 11 digits starting with 03 (e.g. 03232974451)
  if (digitsOnly.length === 11 && digitsOnly.startsWith('03')) return true;
  // 12 digits starting with 923 (e.g. 923232974451)
  if (digitsOnly.length === 12 && digitsOnly.startsWith('923')) return true;
  // 14 digits starting with 00923 (e.g. 00923232974451)
  if (digitsOnly.length === 14 && digitsOnly.startsWith('00923')) return true;
  // General fallback: any phone with 10 to 14 digits
  return digitsOnly.length >= 10 && digitsOnly.length <= 14;
}

// Format phone nicely for the WhatsApp order text
function normalizePhoneForOrder(phone) {
  const digits = String(phone).replace(/\D/g, '');
  if (digits.length === 10 && digits.startsWith('3')) return '0' + digits;
  if (digits.length === 12 && digits.startsWith('923')) return '0' + digits.slice(2);
  if (digits.length === 14 && digits.startsWith('00923')) return '0' + digits.slice(4);
  return phone.trim();
}

// Add to Cart with live stock validation
function addToCart(product, quantityToAdd = 1, maxStock = null) {
  let cart = getCart();
  const qty = Number(quantityToAdd) || 1;

  // If maxStock is passed or known, enforce immediate check
  if (typeof maxStock === 'number' && maxStock > 0 && qty > maxStock) {
    if (typeof showToast === 'function') {
      showToast(`Only ${maxStock} items are currently available.`, 'warning');
    }
    return false;
  }

  // Find existing item matching id and variants (if size/color specified)
  const existingProduct = cart.find(item =>
    item.id === product.id &&
    (!product.size || (item.size || 'Standard') === (product.size || 'Standard')) &&
    (!product.color || (item.color || 'Standard') === (product.color || 'Standard'))
  );

  if (existingProduct) {
    const currentQty = Number(existingProduct.quantity) || 0;
    const effectiveStock = typeof maxStock === 'number' ? maxStock : (existingProduct.maxStock || null);
    if (typeof effectiveStock === 'number' && effectiveStock > 0 && (currentQty + qty) > effectiveStock) {
      if (typeof showToast === 'function') {
        showToast(`Only ${effectiveStock} items are currently available.`, 'warning');
      }
      return false;
    }
    existingProduct.quantity = currentQty + qty;
    if (product.price) existingProduct.price = Number(product.price);
    if (product.image) existingProduct.image = product.image;
    if (typeof maxStock === 'number') existingProduct.maxStock = maxStock;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: Number(product.price),
      image: product.image,
      quantity: qty,
      category: product.category || 'Fashion',
      size: product.size || 'Standard',
      color: product.color || 'Standard',
      url: product.url || 'index.html',
      maxStock: (typeof maxStock === 'number' ? maxStock : null)
    });
  }

  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadges();

  if (typeof showToast === 'function') {
    showToast('Product added to cart!', 'success');
  }

  renderCart();
  return true;
}

// Directly set quantity for cart item with stock check
async function setCartItemQuantity(index, newQty) {
  let cart = getCart();
  if (index < 0 || index >= cart.length) return;

  let parsedQty = parseInt(newQty, 10);
  if (isNaN(parsedQty) || parsedQty <= 0) {
    removeCartItem(index);
    return;
  }

  const item = cart[index];
  let liveStock = item.maxStock || null;

  if (window.zenvoraFirebase && typeof window.zenvoraFirebase.getProduct === 'function') {
    try {
      const prodDoc = await window.zenvoraFirebase.getProduct(item.id);
      if (prodDoc && prodDoc.exists && typeof prodDoc.stock === 'number') {
        liveStock = prodDoc.stock;
        item.maxStock = liveStock;
      }
    } catch (e) {}
  }

  if (typeof liveStock === 'number' && liveStock > 0 && parsedQty > liveStock) {
    parsedQty = liveStock;
    if (typeof showToast === 'function') {
      showToast(`Only ${liveStock} items are currently available for "${item.name}".`, 'warning');
    }
  }

  cart[index].quantity = parsedQty;
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadges();
  renderCart();
}

// Modify item quantity in cart with live stock protection
async function updateCartItemQuantity(index, delta) {
  let cart = getCart();
  if (index < 0 || index >= cart.length) return;

  const item = cart[index];
  const currentQty = Number(item.quantity) || 1;
  const newQty = currentQty + delta;

  if (newQty <= 0) {
    removeCartItem(index);
    return;
  }

  if (delta > 0) {
    let liveStock = item.maxStock || null;
    if (window.zenvoraFirebase && typeof window.zenvoraFirebase.getProduct === 'function') {
      try {
        const prodDoc = await window.zenvoraFirebase.getProduct(item.id);
        if (prodDoc && prodDoc.exists && typeof prodDoc.stock === 'number') {
          liveStock = prodDoc.stock;
          item.maxStock = liveStock;
        }
      } catch (e) {}
    }

    if (typeof liveStock === 'number' && liveStock > 0 && newQty > liveStock) {
      if (typeof showToast === 'function') {
        showToast(`Only ${liveStock} items are currently available for "${item.name}".`, 'warning');
      }
      item.quantity = liveStock;
      localStorage.setItem(CART_KEY, JSON.stringify(cart));
      updateCartBadges();
      renderCart();
      return;
    }
  }

  item.quantity = newQty;
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadges();
  renderCart();
}

// Remove item from cart
function removeCartItem(index) {
  let cart = getCart();
  if (index < 0 || index >= cart.length) return;

  const removedName = cart[index].name;
  cart.splice(index, 1);
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadges();
  renderCart();

  if (typeof showToast === 'function') {
    showToast(`Removed "${removedName}" from cart`, 'warning');
  }
}

// Expose functions globally for inline events
window.setCartItemQuantity = setCartItemQuantity;
window.updateCartItemQuantity = updateCartItemQuantity;
window.removeCartItem = removeCartItem;
window.addToCart = addToCart;
window.getCart = getCart;
window.formatPKR = formatPKR;

// Render Cart in cart.html
function renderCart() {
  const cartContainer = document.getElementById('cart-items-container');
  const emptyCartState = document.getElementById('empty-cart-state');
  const cartLayout = document.getElementById('cart-active-layout');
  const summarySubtotal = document.getElementById('summary-subtotal');
  const summaryTotal = document.getElementById('summary-total');

  if (!cartContainer) return; // Not on cart.html

  const cart = getCart();

  if (cart.length === 0) {
    if (cartLayout) cartLayout.style.display = 'none';
    if (emptyCartState) emptyCartState.style.display = 'block';
    if (summarySubtotal) summarySubtotal.textContent = formatPKR(0);
    if (summaryTotal) summaryTotal.textContent = formatPKR(0);
    return;
  }

  if (cartLayout) cartLayout.style.display = 'grid';
  if (emptyCartState) emptyCartState.style.display = 'none';

  let html = '';
  let subtotal = 0;

  cart.forEach((item, index) => {
    const itemPrice = Number(item.price) || 0;
    const itemQty = Number(item.quantity) || 1;
    const itemSubtotal = itemPrice * itemQty;
    subtotal += itemSubtotal;

    html += `
      <div class="cart-row" data-index="${index}">
        <div class="cart-item-product">
          <img src="${item.image}" alt="${item.name}" class="cart-item-img" onerror="this.src='https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=300&q=80'">
          <div class="cart-item-meta">
            <h4><a href="${resolveProductUrl(item)}" style="color: inherit;">${item.name}</a></h4>
            <p>
              ${item.size && item.size !== 'Standard' ? '<span>Size: ' + item.size + '</span>' : ''}
              ${item.color && item.color !== 'Standard' ? (item.size && item.size !== 'Standard' ? ' • ' : '') + '<span>Color: ' + item.color + '</span>' : ''}
            </p>
          </div>
        </div>

        <div class="cart-item-price">
          ${formatPKR(itemPrice)}
        </div>

        <div>
          <div class="quantity-picker" style="height: 36px;">
            <button type="button" class="qty-btn" style="width: 32px; height: 36px; font-size: 1rem;" onclick="updateCartItemQuantity(${index}, -1)" aria-label="Decrease quantity"${itemQty <= 1 ? ' disabled' : ''}>−</button>
            <input type="number" min="1" ${typeof item.maxStock === 'number' && item.maxStock > 0 ? `max="${item.maxStock}"` : ''} class="qty-input" style="width: 48px; height: 36px; font-size: 0.9rem; text-align: center;" value="${itemQty}" onchange="setCartItemQuantity(${index}, this.value)" aria-label="Quantity">
            <button type="button" class="qty-btn" style="width: 32px; height: 36px; font-size: 1rem;" onclick="updateCartItemQuantity(${index}, 1)" aria-label="Increase quantity"${(typeof item.maxStock === 'number' && item.maxStock > 0 && itemQty >= item.maxStock) ? ' disabled' : ''}>+</button>
          </div>
        </div>

        <div class="cart-item-subtotal">
          ${formatPKR(itemSubtotal)}
        </div>

        <button type="button" class="btn-remove-item" title="Remove item" onclick="removeCartItem(${index})" aria-label="Remove item">
          ✕
        </button>
      </div>
    `;
  });

  cartContainer.innerHTML = html;

  const total = cart.reduce((sum, item) => sum + ((Number(item.price) || 0) * (Number(item.quantity) || 0)), 0);

  if (summarySubtotal) summarySubtotal.textContent = formatPKR(total);
  if (summaryTotal) summaryTotal.textContent = formatPKR(total);
}

// Alias for renderCartPage for backwards-compatibility
const renderCartPage = renderCart;

// ==========================================
// PAKISTAN LOCATIONS DYNAMIC DROPDOWNS
// ==========================================

function initPakistanLocationsDropdowns() {
  const provinceSelect = document.getElementById('customer-province');
  const citySelect = document.getElementById('customer-city');
  const areaSelect = document.getElementById('delivery-area');

  if (!provinceSelect || !citySelect || !areaSelect) return;

  const locations = (typeof window !== 'undefined' && window.PAKISTAN_LOCATIONS) ? window.PAKISTAN_LOCATIONS : {};

  // Populate provinces if empty or not fully listed
  const provinces = Object.keys(locations);
  if (provinces.length > 0 && provinceSelect.options.length <= 1) {
    provinceSelect.innerHTML = '<option value="" disabled selected>-- Select Province / Region --</option>';
    provinces.forEach(prov => {
      const opt = document.createElement('option');
      opt.value = prov;
      opt.textContent = prov;
      provinceSelect.appendChild(opt);
    });
  }

  // Handle Province Change -> Updates City Dropdown
  provinceSelect.addEventListener('change', () => {
    const selectedProvince = provinceSelect.value;
    provinceSelect.classList.remove('input-error');
    const errProv = document.getElementById('error-province');
    if (errProv) errProv.classList.remove('show');

    // Reset City Dropdown
    citySelect.innerHTML = '';
    citySelect.classList.remove('input-error');
    const errCity = document.getElementById('error-city');
    if (errCity) errCity.classList.remove('show');

    // Reset Area Dropdown
    areaSelect.innerHTML = '<option value="" disabled selected>-- Select City First --</option>';
    areaSelect.disabled = true;
    areaSelect.classList.remove('input-error');
    const errArea = document.getElementById('error-area');
    if (errArea) errArea.classList.remove('show');

    if (selectedProvince && locations[selectedProvince]) {
      const cities = Object.keys(locations[selectedProvince]).sort((a, b) => a.localeCompare(b));
      
      const defaultCityOpt = document.createElement('option');
      defaultCityOpt.value = '';
      defaultCityOpt.disabled = true;
      defaultCityOpt.selected = true;
      defaultCityOpt.textContent = `-- Select City in ${selectedProvince} (${cities.length} available) --`;
      citySelect.appendChild(defaultCityOpt);

      cities.forEach(cityName => {
        const opt = document.createElement('option');
        opt.value = cityName;
        opt.textContent = cityName;
        citySelect.appendChild(opt);
      });

      citySelect.disabled = false;
    } else {
      citySelect.innerHTML = '<option value="" disabled selected>-- Select Province First --</option>';
      citySelect.disabled = true;
    }
  });

  // Handle City Change -> Updates Area Dropdown
  citySelect.addEventListener('change', () => {
    const selectedProvince = provinceSelect.value;
    const selectedCity = citySelect.value;
    citySelect.classList.remove('input-error');
    const errCity = document.getElementById('error-city');
    if (errCity) errCity.classList.remove('show');

    // Reset Area Dropdown
    areaSelect.innerHTML = '';
    areaSelect.classList.remove('input-error');
    const errArea = document.getElementById('error-area');
    if (errArea) errArea.classList.remove('show');

    if (selectedProvince && selectedCity && locations[selectedProvince] && locations[selectedProvince][selectedCity]) {
      const rawAreas = locations[selectedProvince][selectedCity];
      const areas = Array.isArray(rawAreas) ? rawAreas : [];

      const defaultAreaOpt = document.createElement('option');
      defaultAreaOpt.value = '';
      defaultAreaOpt.disabled = true;
      defaultAreaOpt.selected = true;
      defaultAreaOpt.textContent = `-- Select Area / Locality in ${selectedCity} --`;
      areaSelect.appendChild(defaultAreaOpt);

      areas.forEach(areaName => {
        const opt = document.createElement('option');
        opt.value = areaName;
        opt.textContent = areaName;
        areaSelect.appendChild(opt);
      });

      // Ensure fallback option is always present
      if (!areas.some(a => a.toLowerCase().includes('other area'))) {
        const otherOpt = document.createElement('option');
        otherOpt.value = 'Other Area / Main Town';
        otherOpt.textContent = 'Other Area / Main Town';
        areaSelect.appendChild(otherOpt);
      }

      areaSelect.disabled = false;
    } else {
      areaSelect.innerHTML = '<option value="" disabled selected>-- Select City First --</option>';
      areaSelect.disabled = true;
    }
  });

  // Handle Area Change
  areaSelect.addEventListener('change', () => {
    areaSelect.classList.remove('input-error');
    const errArea = document.getElementById('error-area');
    if (errArea) errArea.classList.remove('show');
  });
}

// ==========================================
// WHATSAPP ORDER SUBMISSION HANDLER
// ==========================================

async function handleWhatsAppOrder(e) {
  if (e && typeof e.preventDefault === 'function') {
    e.preventDefault();
  }

  const cart = getCart();
  if (!cart || cart.length === 0) {
    if (typeof showToast === 'function') {
      showToast('Your cart is empty! Please add products before checking out.', 'danger');
    } else {
      alert('Your cart is empty! Please add products before checking out.');
    }
    const cartItemsEl = document.getElementById('cart-items-container') || document.body;
    cartItemsEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    return;
  }

  const nameInput = document.getElementById('customer-name');
  const phoneInput = document.getElementById('customer-phone');
  const provinceSelect = document.getElementById('customer-province');
  const citySelect = document.getElementById('customer-city');
  const areaSelect = document.getElementById('delivery-area');
  const addressInput = document.getElementById('customer-address');

  let hasError = false;
  let firstInvalidEl = null;

  // Clear previous errors
  document.querySelectorAll('.form-error-msg').forEach(el => el.classList.remove('show'));
  [nameInput, phoneInput, provinceSelect, citySelect, areaSelect, addressInput].forEach(input => {
    if (input) input.classList.remove('input-error');
  });

  // Validate Name
  const name = nameInput ? nameInput.value.trim() : '';
  if (!name) {
    const err = document.getElementById('error-name');
    if (err) err.classList.add('show');
    if (nameInput) {
      nameInput.classList.add('input-error');
      if (!firstInvalidEl) firstInvalidEl = nameInput;
    }
    hasError = true;
  }

  // Validate Phone (lenient: accepts 10-14 digits, local or international)
  const phone = phoneInput ? phoneInput.value.trim() : '';
  if (!phone || !validatePakistaniPhone(phone)) {
    const err = document.getElementById('error-phone');
    if (err) {
      err.textContent = phone ? 'Please enter a valid mobile number (e.g. 03232974451)' : 'Phone number is required';
      err.classList.add('show');
    }
    if (phoneInput) {
      phoneInput.classList.add('input-error');
      if (!firstInvalidEl) firstInvalidEl = phoneInput;
    }
    hasError = true;
  }

  // Validate Province
  const province = provinceSelect ? provinceSelect.value.trim() : '';
  if (!province) {
    const err = document.getElementById('error-province');
    if (err) err.classList.add('show');
    if (provinceSelect) {
      provinceSelect.classList.add('input-error');
      if (!firstInvalidEl) firstInvalidEl = provinceSelect;
    }
    hasError = true;
  }

  // Validate City
  const city = citySelect ? citySelect.value.trim() : '';
  if (!city) {
    const err = document.getElementById('error-city');
    if (err) err.classList.add('show');
    if (citySelect) {
      citySelect.classList.add('input-error');
      if (!firstInvalidEl) firstInvalidEl = citySelect;
    }
    hasError = true;
  }

  // Validate Delivery Area / Locality
  const area = areaSelect ? areaSelect.value.trim() : '';
  if (!area) {
    const err = document.getElementById('error-area');
    if (err) err.classList.add('show');
    if (areaSelect) {
      areaSelect.classList.add('input-error');
      if (!firstInvalidEl) firstInvalidEl = areaSelect;
    }
    hasError = true;
  }

  // Validate Address
  const address = addressInput ? addressInput.value.trim() : '';
  if (!address) {
    const err = document.getElementById('error-address');
    if (err) err.classList.add('show');
    if (addressInput) {
      addressInput.classList.add('input-error');
      if (!firstInvalidEl) firstInvalidEl = addressInput;
    }
    hasError = true;
  }

  // If there are validation errors, scroll smoothly to the first invalid field on mobile
  if (hasError) {
    if (firstInvalidEl) {
      try {
        firstInvalidEl.focus();
        firstInvalidEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } catch (err) {}
    }
    if (typeof showToast === 'function') {
      showToast('Please fill in the highlighted delivery details to place your order.', 'danger');
    }
    return;
  }

  const formattedPhone = normalizePhoneForOrder(phone);

  const submitBtn = document.getElementById('btn-place-whatsapp-order');
  const originalBtnText = submitBtn ? submitBtn.innerHTML : 'Place Order on WhatsApp (COD)';
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span>⏳ Reserving Stock & Securing Order...</span>';
  }

  // 1. Process Order & Atomic Stock Deduction in Firebase Firestore
  let orderResult = null;
  if (window.zenvoraFirebase && typeof window.zenvoraFirebase.createOrderWithStockDeduction === 'function') {
    try {
      orderResult = await window.zenvoraFirebase.createOrderWithStockDeduction({
        customerName: name,
        phone: formattedPhone,
        province,
        city,
        area,
        address,
        items: cart
      });
    } catch (err) {
      console.error('Firebase order deduction failed:', err);
      orderResult = { success: false, error: err.message };
    }
  } else {
    // If Firebase bridge still loading, allow smooth retry or graceful placement
    console.warn('zenvoraFirebase not ready, retrying in 400ms...');
    await new Promise(r => setTimeout(r, 400));
    if (window.zenvoraFirebase && typeof window.zenvoraFirebase.createOrderWithStockDeduction === 'function') {
      orderResult = await window.zenvoraFirebase.createOrderWithStockDeduction({
        customerName: name,
        phone: formattedPhone,
        province,
        city,
        area,
        address,
        items: cart
      });
    }
  }

  // Check stock or transaction error
  if (orderResult && !orderResult.success) {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
    }
    if (typeof showToast === 'function') {
      showToast(orderResult.error || 'Could not place order due to stock limits.', 'danger');
    } else {
      alert(orderResult.error || 'Could not place order.');
    }
    return;
  }

  const orderId = (orderResult && orderResult.orderId) ? orderResult.orderId : `ZV-${Date.now()}`;
  const total = (orderResult && orderResult.total) ? orderResult.total : cart.reduce((sum, item) => sum + ((Number(item.price) || 0) * (Number(item.quantity) || 0)), 0);

  // Generate the formatted WhatsApp Order Message including official Order ID and 30-min cancellation notice
  let message = `*NEW VERIFIED ORDER — ZENVORA SHOOP*\n`;
  message += `*Order ID:* ${orderId}\n\n`;
  message += `*Customer Name:* ${name}\n`;
  message += `*WhatsApp / Mobile:* ${formattedPhone}\n`;
  message += `*Province / Region:* ${province}\n`;
  message += `*City:* ${city}\n`;
  message += `*Area / Locality:* ${area}\n`;
  message += `*Complete Address:* ${address}\n\n`;
  message += `*ORDER ITEMS:*\n`;

  const orderItemsList = (orderResult && orderResult.items) ? orderResult.items : cart;
  orderItemsList.forEach((item, i) => {
    const itemSubtotal = (Number(item.price) || 0) * (Number(item.quantity) || 0);
    let variants = [];
    if (item.size && item.size !== 'Standard') variants.push(`Size: ${item.size}`);
    if (item.color && item.color !== 'Standard') variants.push(`Color: ${item.color}`);
    const variantStr = variants.length > 0 ? ` (${variants.join(', ')})` : '';

    message += `${i + 1}. *${item.name || item.productName}*${variantStr}\n`;
    message += `   Qty: ${item.quantity} × ${formatPKR(item.price)} = ${formatPKR(item.subtotal || itemSubtotal)}\n`;
  });

  message += `\n*TOTAL:* ${formatPKR(total)}\n`;
  message += `*Payment:* Cash on Delivery (COD)\n`;
  message += `*Status:* Stock Reserved & Order Placed\n\n`;
  message += `_Note: You can cancel or track your order within 30 minutes online at ${window.location.origin}/my-order.html?orderId=${orderId}_\n\n`;
  message += `Please confirm my order dispatch. Thank you!`;

  // Encode message for WhatsApp URLs
  const encodedMessage = encodeURIComponent(message);
  const apiWhatsAppUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodedMessage}`;
  const waMeUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

  // Clear cart now that order is confirmed and stock deducted in Firestore
  localStorage.removeItem(CART_KEY);
  updateCartBadges();
  renderCart();

  if (typeof showToast === 'function') {
    showToast(`Order ${orderId} placed successfully! Connecting to WhatsApp...`, 'success');
  }

  // Display on-screen confirmation & WhatsApp action buttons with Order Tracking Link
  renderWhatsAppFallbackUI(apiWhatsAppUrl, waMeUrl, total, name, orderId);

  if (submitBtn) {
    submitBtn.disabled = false;
    submitBtn.innerHTML = '<span>✓ Order Placed! Open WhatsApp</span>';
  }

  // Direct redirect to WhatsApp
  try {
    window.location.href = apiWhatsAppUrl;
  } catch (err) {
    try {
      window.location.assign(waMeUrl);
    } catch (e2) {
      console.error('Direct WhatsApp redirect error:', e2);
    }
  }
}

// On-page action confirmation UI displayed when order is created in Firestore
function renderWhatsAppFallbackUI(apiWhatsAppUrl, waMeUrl, total, name, orderId) {
  const submitBtn = document.getElementById('btn-place-whatsapp-order');
  let fallbackBox = document.getElementById('whatsapp-order-fallback-card');

  if (!fallbackBox) {
    fallbackBox = document.createElement('div');
    fallbackBox.id = 'whatsapp-order-fallback-card';
    fallbackBox.className = 'whatsapp-order-card';
    if (submitBtn && submitBtn.parentNode) {
      submitBtn.parentNode.insertBefore(fallbackBox, submitBtn.nextSibling);
    }
  }

  fallbackBox.innerHTML = `
    <div style="background: #F0FDF4; border: 1.5px solid #22C55E; border-radius: 12px; padding: 1.5rem; margin-top: 1rem; text-align: center;">
      <div style="font-size: 2rem; margin-bottom: 0.35rem; color: #16A34A;">✓</div>
      <h4 style="font-size: 1.25rem; font-weight: 700; color: #15803D; margin-bottom: 0.35rem; font-family: sans-serif;">
        Order Placed & Stock Reserved!
      </h4>
      <p style="font-size: 0.95rem; color: #1F2937; margin-bottom: 0.5rem;">
        Order ID: <strong style="color: #065F46; font-family: monospace; font-size: 1.05rem;">${orderId || ''}</strong>
      </p>
      <p style="font-size: 0.88rem; color: #4B5563; margin-bottom: 1rem; line-height: 1.45;">
        Thank you, <strong>${name || 'Valued Customer'}</strong>. Tap below to send your order confirmation to our official WhatsApp (<strong>03232974451</strong>):
      </p>
      <a href="${apiWhatsAppUrl}" class="btn btn-whatsapp btn-block" style="text-decoration: none; display: flex; align-items: center; justify-content: center; gap: 0.5rem; padding: 1rem; font-size: 1.05rem; font-weight: 700;">
        <span>💬 Send Order on WhatsApp Now</span>
      </a>
      <div style="margin-top: 0.65rem;">
        <a href="${waMeUrl}" style="color: #166534; font-size: 0.82rem; text-decoration: underline;">
          Or tap here if WhatsApp does not open (wa.me)
        </a>
      </div>
      <div style="margin-top: 1.25rem; padding-top: 1rem; border-top: 1px dashed #86EFAC; display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
        <a href="my-order.html?orderId=${orderId || ''}" class="btn btn-outline" style="font-size: 0.85rem; padding: 0.6rem 1.2rem; border-color: #059669; color: #065F46;">
          📦 Track or Cancel Order (30-Min Window)
        </a>
        <a href="index.html" class="btn btn-dark" style="font-size: 0.85rem; padding: 0.6rem 1.2rem;">
          Continue Shopping
        </a>
      </div>
    </div>
  `;

  // Scroll to the card so user clearly sees the action button on mobile
  fallbackBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Expose handleWhatsAppOrder globally for inline onclick / external calls
window.handleWhatsAppOrder = handleWhatsAppOrder;
window.validatePakistaniPhone = validatePakistaniPhone;
window.initPakistanLocationsDropdowns = initPakistanLocationsDropdowns;

// Auto Initialize Badges & Cart UI on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  updateCartBadges();
  renderCart();
  initPakistanLocationsDropdowns();

  // Attach submit to checkout form
  const checkoutForm = document.getElementById('checkout-form');
  if (checkoutForm && !checkoutForm.dataset.orderBound) {
    checkoutForm.dataset.orderBound = 'true';
    checkoutForm.addEventListener('submit', handleWhatsAppOrder);
  }

  // Also attach direct click to the place order button for touch reliability
  const placeOrderBtn = document.getElementById('btn-place-whatsapp-order');
  if (placeOrderBtn && !placeOrderBtn.dataset.orderBound) {
    placeOrderBtn.dataset.orderBound = 'true';
    placeOrderBtn.addEventListener('click', (e) => {
      e.preventDefault();
      handleWhatsAppOrder(e);
    });
  }

  // Real-time error dismissal when customer types or selects options
  ['customer-name', 'customer-phone', 'customer-province', 'customer-city', 'delivery-area', 'customer-address'].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      const clearError = () => {
        el.classList.remove('input-error');
        const errKey = id.replace('customer-', '').replace('delivery-', '');
        const errDiv = document.getElementById(`error-${errKey}`);
        if (errDiv) errDiv.classList.remove('show');
      };
      el.addEventListener('input', clearError);
      el.addEventListener('change', clearError);
    }
  });
});

