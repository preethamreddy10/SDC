// CHONY Servlet Shopping Cart - Experiment 6 JavaScript

// Global variables
let cart = [];
let products = [];
let currentPage = window.location.pathname.includes('catalog.html') ? 'catalog' : 'home';

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeCanvas();
    loadCartFromStorage();
    updateCartDisplay();
    
    if (currentPage === 'catalog') {
        loadProducts();
    }
});

// Canvas initialization and animations
function initializeCanvas() {
    const heroCanvas = document.getElementById('heroCanvas');
    const productCanvas = document.getElementById('productCanvas');
    
    if (heroCanvas) {
        drawHeroCanvas(heroCanvas);
    }
    
    if (productCanvas) {
        drawProductCanvas(productCanvas);
    }
}

// Draw hero canvas with animated elements
function drawHeroCanvas(canvas) {
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    
    // Draw background gradient
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#ff0000');
    gradient.addColorStop(1, '#cc0000');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
    
    // Draw animated shopping cart
    drawShoppingCart(ctx, width/2, height/2, Date.now() * 0.001);
    
    // Draw floating products
    for (let i = 0; i < 5; i++) {
        const x = (width * 0.2) + (i * width * 0.15);
        const y = height * 0.3 + Math.sin(Date.now() * 0.001 + i) * 20;
        drawProduct(ctx, x, y, i);
    }
    
    // Animate
    requestAnimationFrame(() => drawHeroCanvas(canvas));
}

// Draw product canvas for catalog page
function drawProductCanvas(canvas) {
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    
    // Draw background
    ctx.fillStyle = '#f8f9fa';
    ctx.fillRect(0, 0, width, height);
    
    // Draw grid
    ctx.strokeStyle = '#dee2e6';
    ctx.lineWidth = 1;
    for (let x = 0; x < width; x += 50) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
    }
    for (let y = 0; y < height; y += 50) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
    }
    
    // Draw product visualization
    if (products.length > 0) {
        drawProductChart(ctx, width, height);
    }
    
    // Animate
    requestAnimationFrame(() => drawProductCanvas(canvas));
}

// Draw shopping cart icon
function drawShoppingCart(ctx, x, y, time) {
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(0.8, 0.8);
    
    // Cart body
    ctx.fillStyle = 'white';
    ctx.fillRect(-30, -20, 60, 40);
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 2;
    ctx.strokeRect(-30, -20, 60, 40);
    
    // Cart wheels
    ctx.fillStyle = '#333';
    ctx.beginPath();
    ctx.arc(-15, 15, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(15, 15, 8, 0, Math.PI * 2);
    ctx.fill();
    
    // Cart handle
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(-25, -20);
    ctx.lineTo(-35, -30);
    ctx.stroke();
    
    // Animated items in cart
    for (let i = 0; i < 3; i++) {
        const itemX = -15 + (i * 15);
        const itemY = -10 + Math.sin(time + i) * 5;
        ctx.fillStyle = `hsl(${120 + i * 60}, 70%, 60%)`;
        ctx.fillRect(itemX - 5, itemY - 5, 10, 10);
    }
    
    ctx.restore();
}

// Draw product icon
function drawProduct(ctx, x, y, index) {
    ctx.save();
    ctx.translate(x, y);
    
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57'];
    const icons = ['📱', '💻', '🎮', '📚', '🎧'];
    
    ctx.fillStyle = colors[index % colors.length];
    ctx.fillRect(-15, -15, 30, 30);
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 2;
    ctx.strokeRect(-15, -15, 30, 30);
    
    // Draw icon
    ctx.font = '20px Arial';
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(icons[index % icons.length], 0, 0);
    
    ctx.restore();
}

// Draw product chart
function drawProductChart(ctx, width, height) {
    const margin = 50;
    const chartWidth = width - 2 * margin;
    const chartHeight = height - 2 * margin;
    
    // Find max price for scaling
    const maxPrice = Math.max(...products.map(p => p.price));
    
    // Draw bars
    const barWidth = chartWidth / products.length;
    products.forEach((product, index) => {
        const barHeight = (product.price / maxPrice) * chartHeight * 0.6;
        const x = margin + (index * barWidth) + (barWidth * 0.1);
        const y = height - margin - barHeight;
        
        // Draw bar
        const gradient = ctx.createLinearGradient(x, y, x, height - margin);
        gradient.addColorStop(0, '#ff0000');
        gradient.addColorStop(1, '#cc0000');
        ctx.fillStyle = gradient;
        ctx.fillRect(x, y, barWidth * 0.8, barHeight);
        
        // Draw price label
        ctx.fillStyle = '#333';
        ctx.font = '12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(`Rs. ${product.price}`, x + barWidth * 0.4, y - 10);
        
        // Draw product name
        ctx.fillText(product.name.substring(0, 8), x + barWidth * 0.4, height - margin + 20);
    });
}

// Load products from Servlet (simulated for demo)
function loadProducts() {
    // Simulate loading from Servlet
    setTimeout(() => {
        // Sample products (in real app, this would come from Servlet)
        products = [
            { id: 1, name: 'Java Programming Book', price: 2300, category: 'Programming' },
            { id: 2, name: 'Web Development Guide', price: 1800, category: 'Web' },
            { id: 3, name: 'Python Basics', price: 1500, category: 'Programming' },
            { id: 4, name: 'Database Design', price: 2000, category: 'Database' },
            { id: 5, name: 'Mobile App Development', price: 2500, category: 'Mobile' },
            { id: 6, name: 'Cloud Computing', price: 2200, category: 'Cloud' }
        ];
        
        displayProducts();
        hideLoading();
    }, 2000);
}

// Display products in grid
function displayProducts() {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;
    
    productsGrid.innerHTML = '';
    
    products.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
    
    updateCartSummary();
}

// Create product card element
function createProductCard(product) {
    const col = document.createElement('div');
    col.className = 'col-md-4 col-lg-3 mb-4';
    
    col.innerHTML = `
        <div class="product-card">
            <div class="product-image">
                <i class="fas fa-book"></i>
            </div>
            <div class="product-info">
                <h5 class="product-name">${product.name}</h5>
                <div class="product-price">Rs. ${product.price}/-</div>
                <div class="product-actions">
                    <button class="btn-add-cart" onclick="addToCart(${product.id})">
                        <i class="fas fa-cart-plus"></i> Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `;
    
    return col;
}

// Hide loading section
function hideLoading() {
    const loadingSection = document.getElementById('loadingSection');
    const productsSection = document.getElementById('productsSection');
    
    if (loadingSection) loadingSection.style.display = 'none';
    if (productsSection) productsSection.style.display = 'block';
}

// Cart functions
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1
        });
    }
    
    saveCartToStorage();
    updateCartDisplay();
    updateCartSummary();
    
    // Show success message
    showNotification('Product added to cart!', 'success');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCartToStorage();
    updateCartDisplay();
    updateCartSummary();
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCartToStorage();
            updateCartDisplay();
            updateCartSummary();
        }
    }
}

function updateCartDisplay() {
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
}

function updateCartSummary() {
    const totalItems = document.getElementById('totalItems');
    const totalAmount = document.getElementById('totalAmount');
    
    if (totalItems && totalAmount) {
        const items = cart.reduce((sum, item) => sum + item.quantity, 0);
        const amount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        
        totalItems.textContent = items;
        totalAmount.textContent = `Rs. ${amount}/-`;
    }
}

function viewCart() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!', 'info');
        return;
    }
    
    let cartContent = '<div class="table-responsive"><table class="table">';
    cartContent += '<thead><tr><th>Product</th><th>Price</th><th>Quantity</th><th>Total</th><th>Action</th></tr></thead><tbody>';
    
    cart.forEach(item => {
        cartContent += `
            <tr>
                <td>${item.name}</td>
                <td>Rs. ${item.price}/-</td>
                <td>
                    <button class="btn btn-sm btn-outline-secondary" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span class="mx-2">${item.quantity}</span>
                    <button class="btn btn-sm btn-outline-secondary" onclick="updateQuantity(${item.id}, 1)">+</button>
                </td>
                <td>Rs. ${item.price * item.quantity}/-</td>
                <td><button class="btn btn-sm btn-danger" onclick="removeFromCart(${item.id})">Remove</button></td>
            </tr>
        `;
    });
    
    cartContent += '</tbody></table></div>';
    
    showModal('Shopping Cart', cartContent);
}

function checkout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!', 'info');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    showNotification(`Proceeding to checkout with total: Rs. ${total}/-`, 'success');
    
    // In a real application, this would redirect to payment gateway
    setTimeout(() => {
        cart = [];
        saveCartToStorage();
        updateCartDisplay();
        updateCartSummary();
        showNotification('Order placed successfully!', 'success');
    }, 2000);
}

// Sort products
function sortProducts(criteria) {
    if (criteria === 'name') {
        products.sort((a, b) => a.name.localeCompare(b.name));
    } else if (criteria === 'price') {
        products.sort((a, b) => a.price - b.price);
    }
    
    displayProducts();
}

// Storage functions
function saveCartToStorage() {
    localStorage.setItem('chonyCart', JSON.stringify(cart));
}

function loadCartFromStorage() {
    const savedCart = localStorage.getItem('chonyCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

// Utility functions
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `alert alert-${type} alert-dismissible fade show position-fixed`;
    notification.style.cssText = 'top: 20px; right: 20px; z-index: 9999; min-width: 300px;';
    notification.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 3000);
}

function showModal(title, content) {
    // Create modal element
    const modal = document.createElement('div');
    modal.className = 'modal fade';
    modal.id = 'dynamicModal';
    modal.innerHTML = `
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">${title}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    ${content}
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Show modal
    const modalInstance = new bootstrap.Modal(modal);
    modalInstance.show();
    
    // Remove modal after hiding
    modal.addEventListener('hidden.bs.modal', () => {
        modal.remove();
    });
}

// Simulate Servlet endpoint (for demo purposes)
function simulateServletCall(endpoint, callback) {
    console.log(`Calling Servlet endpoint: ${endpoint}`);
    
    // Simulate network delay
    setTimeout(() => {
        if (endpoint === '/products') {
            callback(products);
        }
    }, 1000);
} 