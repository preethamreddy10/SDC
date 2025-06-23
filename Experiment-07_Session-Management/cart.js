// CHONY Cart Management - JavaScript

// Initialize cart
document.addEventListener('DOMContentLoaded', function() {
    initializeCart();
    loadSessionData();
    updateSessionDisplay();
    updateSessionStatus();
    updateCartCount();
    displayCart();
});

// Initialize cart functionality
function initializeCart() {
    console.log('CHONY Cart Management initialized');
    checkSessionStatus();
    updateCartSummary();
}

// Display cart
function displayCart() {
    const emptyCart = document.getElementById('emptyCart');
    const cartItems = document.getElementById('cartItems');
    const sessionAlert = document.getElementById('sessionAlert');
    
    if (!sessionData.isActive) {
        if (emptyCart) emptyCart.style.display = 'none';
        if (cartItems) cartItems.style.display = 'none';
        if (sessionAlert) sessionAlert.style.display = 'block';
        return;
    }
    
    if (sessionAlert) sessionAlert.style.display = 'none';
    
    if (sessionData.cartItems.length === 0) {
        if (emptyCart) emptyCart.style.display = 'block';
        if (cartItems) cartItems.style.display = 'none';
    } else {
        if (emptyCart) emptyCart.style.display = 'none';
        if (cartItems) cartItems.style.display = 'block';
        displayCartItems();
        updateCartSummary();
        updateSessionInfo();
    }
}

// Display cart items
function displayCartItems() {
    const cartItemsList = document.getElementById('cartItemsList');
    if (!cartItemsList) return;
    
    const cartItemsHTML = sessionData.cartItems.map(item => createCartItemCard(item)).join('');
    cartItemsList.innerHTML = cartItemsHTML;
    
    // Add animation to cart items
    const cartItemCards = document.querySelectorAll('.cart-item-card');
    cartItemCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('fade-in');
    });
}

// Create cart item card
function createCartItemCard(item) {
    const quantity = item.quantity || 1;
    const totalPrice = item.price * quantity;
    
    return `
        <div class="cart-item-card" data-item-id="${item.id}">
            <div class="card">
                <div class="card-body">
                    <div class="row align-items-center">
                        <div class="col-md-2">
                            <img src="${item.image}" alt="${item.name}" class="img-fluid rounded cart-item-image">
                        </div>
                        <div class="col-md-4">
                            <h5 class="cart-item-title">${item.name}</h5>
                            <p class="cart-item-category">${item.category}</p>
                            <div class="cart-item-price">$${item.price.toFixed(2)} each</div>
                        </div>
                        <div class="col-md-3">
                            <div class="quantity-controls">
                                <button class="btn btn-sm btn-outline-secondary" onclick="updateQuantity(${item.id}, -1)">
                                    <i class="fas fa-minus"></i>
                                </button>
                                <span class="quantity-display">${quantity}</span>
                                <button class="btn btn-sm btn-outline-secondary" onclick="updateQuantity(${item.id}, 1)">
                                    <i class="fas fa-plus"></i>
                                </button>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="cart-item-total">$${totalPrice.toFixed(2)}</div>
                        </div>
                        <div class="col-md-1">
                            <button class="btn btn-sm btn-outline-danger" onclick="removeFromCart(${item.id})">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Update quantity
function updateQuantity(itemId, change) {
    const item = sessionData.cartItems.find(item => item.id === itemId);
    if (!item) return;
    
    const newQuantity = (item.quantity || 1) + change;
    
    if (newQuantity <= 0) {
        removeFromCart(itemId);
        return;
    }
    
    item.quantity = newQuantity;
    sessionData.lastAccess = new Date();
    
    saveSessionData();
    updateSessionDisplay();
    updateCartCount();
    displayCart();
    
    showNotification(`Updated quantity for ${item.name}`, 'info');
}

// Remove from cart
function removeFromCart(itemId) {
    const itemIndex = sessionData.cartItems.findIndex(item => item.id === itemId);
    if (itemIndex === -1) return;
    
    const removedItem = sessionData.cartItems[itemIndex];
    sessionData.cartItems.splice(itemIndex, 1);
    sessionData.lastAccess = new Date();
    
    saveSessionData();
    updateSessionDisplay();
    updateCartCount();
    displayCart();
    
    showNotification(`Removed ${removedItem.name} from cart`, 'info');
}

// Update cart summary
function updateCartSummary() {
    const subtotal = sessionData.cartItems.reduce((total, item) => {
        return total + (item.price * (item.quantity || 1));
    }, 0);
    
    const tax = subtotal * 0.1; // 10% tax
    const shipping = subtotal > 100 ? 0 : 10; // Free shipping over $100
    const total = subtotal + tax + shipping;
    
    const itemCount = sessionData.cartItems.reduce((count, item) => {
        return count + (item.quantity || 1);
    }, 0);
    
    // Update display elements
    const subtotalElement = document.getElementById('subtotal');
    const taxElement = document.getElementById('tax');
    const shippingElement = document.getElementById('shipping');
    const orderTotalElement = document.getElementById('orderTotal');
    const cartTotalElement = document.getElementById('cartTotal');
    const cartItemsCountElement = document.getElementById('cartItemsCount');
    
    if (subtotalElement) subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
    if (taxElement) taxElement.textContent = `$${tax.toFixed(2)}`;
    if (shippingElement) shippingElement.textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
    if (orderTotalElement) orderTotalElement.textContent = `$${total.toFixed(2)}`;
    if (cartTotalElement) cartTotalElement.textContent = `$${total.toFixed(2)}`;
    if (cartItemsCountElement) cartItemsCountElement.textContent = `${itemCount} item${itemCount !== 1 ? 's' : ''}`;
}

// Update session info
function updateSessionInfo() {
    const sessionIdDisplay = document.getElementById('sessionIdDisplay');
    const sessionAgeDisplay = document.getElementById('sessionAgeDisplay');
    const lastUpdatedDisplay = document.getElementById('lastUpdatedDisplay');
    
    if (sessionData.isActive) {
        if (sessionIdDisplay) sessionIdDisplay.textContent = sessionData.id;
        
        if (sessionAgeDisplay) {
            const age = new Date() - sessionData.creationTime;
            const minutes = Math.floor(age / (1000 * 60));
            const seconds = Math.floor((age % (1000 * 60)) / 1000);
            sessionAgeDisplay.textContent = `${minutes}m ${seconds}s`;
        }
        
        if (lastUpdatedDisplay) {
            lastUpdatedDisplay.textContent = sessionData.lastAccess.toLocaleTimeString();
        }
    } else {
        if (sessionIdDisplay) sessionIdDisplay.textContent = 'Not Available';
        if (sessionAgeDisplay) sessionAgeDisplay.textContent = '-';
        if (lastUpdatedDisplay) lastUpdatedDisplay.textContent = '-';
    }
}

// Clear cart
function clearCart() {
    if (sessionData.cartItems.length === 0) {
        showNotification('Cart is already empty!', 'info');
        return;
    }
    
    if (confirm('Are you sure you want to clear your cart?')) {
        sessionData.cartItems = [];
        sessionData.lastAccess = new Date();
        
        saveSessionData();
        updateSessionDisplay();
        updateCartCount();
        displayCart();
        
        showNotification('Cart cleared successfully!', 'success');
    }
}

// Checkout
function checkout() {
    if (sessionData.cartItems.length === 0) {
        showNotification('Your cart is empty!', 'warning');
        return;
    }
    
    // Calculate total
    const subtotal = sessionData.cartItems.reduce((total, item) => {
        return total + (item.price * (item.quantity || 1));
    }, 0);
    const tax = subtotal * 0.1;
    const shipping = subtotal > 100 ? 0 : 10;
    const total = subtotal + tax + shipping;
    
    // Show checkout modal
    showCheckoutModal(total);
}

// Show checkout modal
function showCheckoutModal(total) {
    const modalHTML = `
        <div class="modal fade" id="checkoutModal" tabindex="-1">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">
                            <i class="fas fa-credit-card"></i> Checkout
                        </h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-6">
                                <h6>Order Summary</h6>
                                <div class="order-items">
                                    ${sessionData.cartItems.map(item => `
                                        <div class="order-item">
                                            <span>${item.name} x${item.quantity || 1}</span>
                                            <span>$${(item.price * (item.quantity || 1)).toFixed(2)}</span>
                                        </div>
                                    `).join('')}
                                </div>
                                <hr>
                                <div class="order-total">
                                    <strong>Total: $${total.toFixed(2)}</strong>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <h6>Payment Information</h6>
                                <form id="checkoutForm">
                                    <div class="mb-3">
                                        <label class="form-label">Card Number</label>
                                        <input type="text" class="form-control" placeholder="1234 5678 9012 3456" required>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label class="form-label">Expiry Date</label>
                                            <input type="text" class="form-control" placeholder="MM/YY" required>
                                        </div>
                                        <div class="col-md-6">
                                            <label class="form-label">CVV</label>
                                            <input type="text" class="form-control" placeholder="123" required>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Name on Card</label>
                                        <input type="text" class="form-control" placeholder="John Doe" required>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-primary" onclick="processOrder()">
                            <i class="fas fa-lock"></i> Complete Order
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Remove existing modal
    const existingModal = document.getElementById('checkoutModal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Add new modal
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Show modal
    const modal = new bootstrap.Modal(document.getElementById('checkoutModal'));
    modal.show();
}

// Process order
function processOrder() {
    // Simulate order processing
    const checkoutModal = document.getElementById('checkoutModal');
    const modalBody = checkoutModal.querySelector('.modal-body');
    
    modalBody.innerHTML = `
        <div class="text-center">
            <div class="loading-spinner mb-3">
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Processing...</span>
                </div>
            </div>
            <h5>Processing your order...</h5>
            <p class="text-muted">Please wait while we process your payment.</p>
        </div>
    `;
    
    // Simulate processing delay
    setTimeout(() => {
        modalBody.innerHTML = `
            <div class="text-center">
                <i class="fas fa-check-circle fa-3x text-success mb-3"></i>
                <h5>Order Successful!</h5>
                <p class="text-muted">Your order has been placed successfully.</p>
                <div class="order-details">
                    <p><strong>Order ID:</strong> ORD-${Date.now()}</p>
                    <p><strong>Total:</strong> $${sessionData.cartItems.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0).toFixed(2)}</p>
                </div>
            </div>
        `;
        
        // Clear cart after successful order
        sessionData.cartItems = [];
        sessionData.lastAccess = new Date();
        saveSessionData();
        updateSessionDisplay();
        updateCartCount();
        
        // Close modal after 3 seconds
        setTimeout(() => {
            const modal = bootstrap.Modal.getInstance(checkoutModal);
            modal.hide();
            displayCart();
            showNotification('Order placed successfully!', 'success');
        }, 3000);
    }, 2000);
}

// Check session status
function checkSessionStatus() {
    const sessionAlert = document.getElementById('sessionAlert');
    if (!sessionData.isActive && sessionAlert) {
        sessionAlert.style.display = 'block';
    } else if (sessionAlert) {
        sessionAlert.style.display = 'none';
    }
}

// Auto-update session info
setInterval(() => {
    if (sessionData.isActive) {
        updateSessionInfo();
    }
}, 1000);

// Export functions for global access
window.updateQuantity = updateQuantity;
window.removeFromCart = removeFromCart;
window.clearCart = clearCart;
window.checkout = checkout; 