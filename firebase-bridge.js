import { 
  createOrderWithStockDeduction, 
  getProduct, 
  subscribeToProduct, 
  subscribeToProducts,
  cancelOrder,
  getOrder,
  getMember,
  getMemberPurchases,
  normalizeMembershipCode,
  db
} from "./firebase-service.js";
import { canonicalizeProductId, INITIAL_PRODUCTS } from "./firebase-config.js";

// Attach core Firebase functions to window for global browser access
if (typeof window !== 'undefined') {
  window.zenvoraFirebase = {
    createOrderWithStockDeduction,
    getProduct,
    subscribeToProduct,
    subscribeToProducts,
    cancelOrder,
    getOrder,
    getMember,
    getMemberPurchases,
    normalizeMembershipCode,
    canonicalizeProductId,
    INITIAL_PRODUCTS,
    db
  };

  // Suppress benign network abort errors (triggered on normal page navigation, window unload, or stream close)
  window.addEventListener('unhandledrejection', (event) => {
    const reason = event && event.reason;
    const isAbort = 
      reason && 
      (reason.name === 'AbortError' || 
       String(reason.message || '').toLowerCase().includes('aborted a request') ||
       String(reason.message || '').toLowerCase().includes('user aborted') ||
       String(reason || '').toLowerCase().includes('aborted'));
    if (isAbort) {
      event.preventDefault();
    }
  });
}

console.log("[ZENVORA] Firebase bridge initialized.");
