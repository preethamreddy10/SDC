// CHONY Catalog Management - JavaScript

// Sample product data
const products = [
    {
        id: 1,
        name: "CHONY Premium Wireless Headphones",
        price: 299.99,
        category: "Audio",
        description: "High-quality wireless headphones with noise cancellation",
        image: "https://via.placeholder.com/300x200/dc3545/ffffff?text=CHONY+Headphones",
        rating: 4.8,
        stock: 15
    },
    {
        id: 2,
        name: "CHONY Smart Watch Pro",
        price: 399.99,
        category: "Wearables",
        description: "Advanced smartwatch with health monitoring features",
        image: "https://via.placeholder.com/300x200/ff6b6b/ffffff?text=CHONY+Smart+Watch",
        rating: 4.9,
        stock: 8
    },
    {
        id: 3,
        name: "CHONY Wireless Speaker",
        price: 199.99,
        category: "Audio",
        description: "Portable Bluetooth speaker with premium sound quality",
        image: "https://via.placeholder.com/300x200/28a745/ffffff?text=CHONY+Speaker",
        rating: 4.7,
        stock: 22
    },
    {
        id: 4,
        name: "CHONY Gaming Mouse",
        price: 89.99,
        category: "Gaming",
        description: "High-precision gaming mouse with customizable RGB",
        image: "https://via.placeholder.com/300x200/6f42c1/ffffff?text=CHONY+Gaming+Mouse",
        rating: 4.6,
        stock: 30
    },
    {
        id: 5,
        name: "CHONY Mechanical Keyboard",
        price: 149.99,
        category: "Gaming",
        description: "Premium mechanical keyboard with tactile switches",
        image: "https://via.placeholder.com/300x200/fd7e14/ffffff?text=CHONY+Keyboard",
        rating: 4.8,
        stock: 12
    },
    {
        id: 6,
        name: "CHONY Webcam HD",
        price: 79.99,
        category: "Accessories",
        description: "1080p HD webcam with built-in microphone",
        image: "https://via.placeholder.com/300x200/20c997/ffffff?text=CHONY+Webcam",
        rating: 4.5,
        stock: 18
    },
    {
        id: 7,
        name: "CHONY USB-C Hub",
        price: 59.99,
        category: "Accessories",
        description: "Multi-port USB-C hub for laptops and tablets",
        image: "https://via.placeholder.com/300x200/e83e8c/ffffff?text=CHONY+USB+Hub",
        rating: 4.4,
        stock: 25
    },
    {
        id: 8,
        name: "CHONY Wireless Charger",
        price: 49.99,
        category: "Accessories",
        description: "Fast wireless charging pad for smartphones",
        image: "https://via.placeholder.com/300x200/6c757d/ffffff?text=CHONY+Charger",
        rating: 4.3,
        stock: 35
    }
];

let filteredProducts = [...products];
let currentSort = 'name';

// Initialize catalog
document.addEventListener('DOMContentLoaded', function() {
    initializeCatalog();
    loadSessionData();
    updateSessionDisplay();
    updateSessionStatus();
    updateCartCount();
});

// Initialize catalog functionality
function initializeCatalog() {
    displayProducts(products);
    setupEventListeners();
    checkSessionStatus();
}

// Set up event listeners
function setupEventListeners() {
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }
    
    // Sort functionality
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', handleSort);
    }
}

// Handle search
function handleSearch(event) {
    const searchTerm = event.target.value.toLowerCase();
    filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
    );
    
    displayProducts(filteredProducts);
}

// Handle sort
function handleSort(event) {
    currentSort = event.target.value;
    sortProducts();
    displayProducts(filteredProducts);
}

// Sort products
function sortProducts() {
    switch (currentSort) {
        case 'name':
            filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'price-low':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'category':
            filteredProducts.sort((a, b) => a.category.localeCompare(b.category));
            break;
    }
}

// Display products
function displayProducts(productsToShow) {
    const productGrid = document.getElementById('productGrid');
    const loadingSpinner = document.getElementById('loadingSpinner');
    const noProducts = document.getElementById('noProducts');
    
    // Hide loading spinner
    if (loadingSpinner) {
        loadingSpinner.style.display = 'none';
    }
    
    if (productsToShow.length === 0) {
        if (productGrid) productGrid.innerHTML = '';
        if (noProducts) noProducts.style.display = 'block';
        return;
    }
    
    if (noProducts) noProducts.style.display = 'none';
    
    const productsHTML = productsToShow.map(product => createProductCard(product)).join('');
    
    if (productGrid) {
        productGrid.innerHTML = productsHTML;
    }
    
    // Add animation to product cards
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('fade-in');
    });
}

// Create product card
function createProductCard(product) {
    const isInStock = product.stock > 0;
    const stockStatus = isInStock ? 
        `<span class="badge bg-success">In Stock (${product.stock})</span>` : 
        `<span class="badge bg-danger">Out of Stock</span>`;
    
    return `
        <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div class="product-card">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" class="img-fluid">
                    <div class="product-overlay">
                        <button class="btn btn-primary btn-sm" onclick="viewProduct(${product.id})">
                            <i class="fas fa-eye"></i> View
                        </button>
                    </div>
                </div>
                <div class="product-info">
                    <div class="product-category">${product.category}</div>
                    <h5 class="product-title">${product.name}</h5>
                    <div class="product-rating">
                        ${generateStarRating(product.rating)}
                        <span class="rating-text">(${product.rating})</span>
                    </div>
                    <p class="product-description">${product.description}</p>
                    <div class="product-price">$${product.price.toFixed(2)}</div>
                    <div class="product-stock">${stockStatus}</div>
                    <div class="product-actions">
                        <button class="btn btn-outline-primary btn-sm" onclick="addToCart(${product.id})" ${!isInStock ? 'disabled' : ''}>
                            <i class="fas fa-cart-plus"></i> Add to Cart
                        </button>
                        <button class="btn btn-outline-secondary btn-sm" onclick="addToWishlist(${product.id})">
                            <i class="fas fa-heart"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Generate star rating
function generateStarRating(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    let stars = '';
    
    // Full stars
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star text-warning"></i>';
    }
    
    // Half star
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt text-warning"></i>';
    }
    
    // Empty stars
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star text-warning"></i>';
    }
    
    return stars;
}

// Add to cart
function addToCart(productId) {
    if (!sessionData.isActive) {
        showSessionAlert();
        showNotification('Please start a session to add items to cart!', 'warning');
        return;
    }
    
    const product = products.find(p => p.id === productId);
    if (!product) {
        showNotification('Product not found!', 'error');
        return;
    }
    
    if (product.stock <= 0) {
        showNotification('Product is out of stock!', 'warning');
        return;
    }
    
    // Check if product already in cart
    const existingItem = sessionData.cartItems.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 1) + 1;
    } else {
        sessionData.cartItems.push({
            ...product,
            quantity: 1
        });
    }
    
    // Update session
    sessionData.lastAccess = new Date();
    saveSessionData();
    updateSessionDisplay();
    updateCartCount();
    
    showNotification(`Added ${product.name} to cart!`, 'success');
    
    // Update product stock (demo)
    product.stock--;
    updateProductDisplay(productId);
}

// Add to wishlist
function addToWishlist(productId) {
    showNotification('Added to wishlist!', 'info');
}

// View product details
function viewProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        showProductModal(product);
    }
}

// Show product modal
function showProductModal(product) {
    const modalHTML = `
        <div class="modal fade" id="productModal" tabindex="-1">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">${product.name}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-6">
                                <img src="${product.image}" alt="${product.name}" class="img-fluid rounded">
                            </div>
                            <div class="col-md-6">
                                <h4>${product.name}</h4>
                                <div class="product-rating mb-2">
                                    ${generateStarRating(product.rating)}
                                    <span class="rating-text">(${product.rating})</span>
                                </div>
                                <p class="text-muted">${product.description}</p>
                                <div class="product-details">
                                    <p><strong>Category:</strong> ${product.category}</p>
                                    <p><strong>Price:</strong> $${product.price.toFixed(2)}</p>
                                    <p><strong>Stock:</strong> ${product.stock} units</p>
                                </div>
                                <div class="product-actions mt-3">
                                    <button class="btn btn-primary" onclick="addToCart(${product.id}); $('#productModal').modal('hide');">
                                        <i class="fas fa-cart-plus"></i> Add to Cart
                                    </button>
                                    <button class="btn btn-outline-secondary">
                                        <i class="fas fa-heart"></i> Add to Wishlist
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Remove existing modal
    const existingModal = document.getElementById('productModal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Add new modal
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Show modal
    const modal = new bootstrap.Modal(document.getElementById('productModal'));
    modal.show();
}

// Update product display
function updateProductDisplay(productId) {
    const productCard = document.querySelector(`[onclick="addToCart(${productId})"]`).closest('.product-card');
    if (productCard) {
        const product = products.find(p => p.id === productId);
        const stockElement = productCard.querySelector('.product-stock');
        const addToCartBtn = productCard.querySelector('[onclick^="addToCart"]');
        
        if (stockElement) {
            stockElement.innerHTML = product.stock > 0 ? 
                `<span class="badge bg-success">In Stock (${product.stock})</span>` : 
                `<span class="badge bg-danger">Out of Stock</span>`;
        }
        
        if (addToCartBtn) {
            addToCartBtn.disabled = product.stock <= 0;
        }
    }
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

// Show session alert
function showSessionAlert() {
    const sessionAlert = document.getElementById('sessionAlert');
    if (sessionAlert) {
        sessionAlert.style.display = 'block';
        sessionAlert.scrollIntoView({ behavior: 'smooth' });
    }
}

// Export functions for global access
window.addToCart = addToCart;
window.addToWishlist = addToWishlist;
window.viewProduct = viewProduct; 