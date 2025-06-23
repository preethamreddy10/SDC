// CHONY Session Management - JavaScript

// Global variables
let sessionData = {
    id: null,
    isActive: false,
    creationTime: null,
    lastAccess: null,
    cartItems: []
};

let canvasAnimation = null;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    startCanvasAnimation();
    loadSessionData();
    updateSessionDisplay();
});

// Initialize the application
function initializeApp() {
    console.log('CHONY Session Management initialized');
    
    // Add animation classes to elements
    const elements = document.querySelectorAll('.session-card, .tech-card, .hero-section');
    elements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.1}s`;
        element.classList.add('fade-in');
    });
    
    // Initialize session status
    updateSessionStatus();
    
    // Set up event listeners
    setupEventListeners();
}

// Set up event listeners
function setupEventListeners() {
    // Session management buttons
    const startSessionBtn = document.querySelector('[onclick="startSession()"]');
    const endSessionBtn = document.querySelector('[onclick="endSession()"]');
    
    if (startSessionBtn) {
        startSessionBtn.addEventListener('click', startSession);
    }
    if (endSessionBtn) {
        endSessionBtn.addEventListener('click', endSession);
    }
    
    // Window focus/blur events for session tracking
    window.addEventListener('focus', updateLastAccess);
    window.addEventListener('blur', updateLastAccess);
    
    // Page visibility change
    document.addEventListener('visibilitychange', handleVisibilityChange);
}

// Start session
function startSession() {
    if (sessionData.isActive) {
        showNotification('Session is already active!', 'warning');
        return;
    }
    
    sessionData.id = generateSessionId();
    sessionData.isActive = true;
    sessionData.creationTime = new Date();
    sessionData.lastAccess = new Date();
    sessionData.cartItems = [];
    
    saveSessionData();
    updateSessionDisplay();
    updateSessionStatus();
    
    showNotification('Session started successfully!', 'success');
    console.log('Session started:', sessionData.id);
}

// End session
function endSession() {
    if (!sessionData.isActive) {
        showNotification('No active session to end!', 'warning');
        return;
    }
    
    // Clear session data
    sessionData.id = null;
    sessionData.isActive = false;
    sessionData.creationTime = null;
    sessionData.lastAccess = null;
    sessionData.cartItems = [];
    
    saveSessionData();
    updateSessionDisplay();
    updateSessionStatus();
    
    showNotification('Session ended successfully!', 'info');
    console.log('Session ended');
}

// Create session (demo function)
function createSession() {
    if (!sessionData.isActive) {
        startSession();
    } else {
        showNotification('Session already exists!', 'info');
    }
}

// Add to session cart (demo function)
function addToSessionCart() {
    if (!sessionData.isActive) {
        showNotification('Please start a session first!', 'warning');
        return;
    }
    
    const demoItems = [
        { id: 1, name: 'CHONY Premium Headphones', price: 299.99 },
        { id: 2, name: 'CHONY Wireless Speaker', price: 199.99 },
        { id: 3, name: 'CHONY Smart Watch', price: 399.99 }
    ];
    
    const randomItem = demoItems[Math.floor(Math.random() * demoItems.length)];
    sessionData.cartItems.push(randomItem);
    sessionData.lastAccess = new Date();
    
    saveSessionData();
    updateSessionDisplay();
    updateCartCount();
    
    showNotification(`Added ${randomItem.name} to cart!`, 'success');
}

// Check session timeout (demo function)
function checkSessionTimeout() {
    if (!sessionData.isActive) {
        showNotification('No active session!', 'warning');
        return;
    }
    
    const now = new Date();
    const sessionAge = now - sessionData.creationTime;
    const timeoutThreshold = 30 * 60 * 1000; // 30 minutes
    
    if (sessionAge > timeoutThreshold) {
        showNotification('Session has timed out!', 'warning');
        endSession();
    } else {
        const remainingTime = timeoutThreshold - sessionAge;
        const minutes = Math.floor(remainingTime / (1000 * 60));
        showNotification(`Session active. Timeout in ${minutes} minutes.`, 'info');
    }
}

// Generate session ID
function generateSessionId() {
    return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

// Update session display
function updateSessionDisplay() {
    const sessionIdElement = document.getElementById('sessionId');
    const sessionStatusElement = document.getElementById('sessionStatusText');
    const creationTimeElement = document.getElementById('sessionCreationTime');
    const lastAccessElement = document.getElementById('lastAccessTime');
    const cartItemsElement = document.getElementById('sessionCartItems');
    const sessionAgeElement = document.getElementById('sessionAge');
    
    if (sessionData.isActive) {
        sessionIdElement.textContent = sessionData.id;
        sessionStatusElement.textContent = 'Active';
        sessionStatusElement.style.color = '#28a745';
        
        creationTimeElement.textContent = sessionData.creationTime.toLocaleString();
        lastAccessElement.textContent = sessionData.lastAccess.toLocaleString();
        cartItemsElement.textContent = sessionData.cartItems.length;
        
        const age = new Date() - sessionData.creationTime;
        const minutes = Math.floor(age / (1000 * 60));
        const seconds = Math.floor((age % (1000 * 60)) / 1000);
        sessionAgeElement.textContent = `${minutes}m ${seconds}s`;
    } else {
        sessionIdElement.textContent = 'Not Created';
        sessionStatusElement.textContent = 'Inactive';
        sessionStatusElement.style.color = '#6c757d';
        
        creationTimeElement.textContent = '-';
        lastAccessElement.textContent = '-';
        cartItemsElement.textContent = '0';
        sessionAgeElement.textContent = '-';
    }
}

// Update session status
function updateSessionStatus() {
    const statusElement = document.getElementById('sessionStatus');
    const statusIcon = statusElement.querySelector('i');
    const statusText = statusElement.querySelector('span');
    
    if (sessionData.isActive) {
        statusIcon.className = 'fas fa-circle text-success';
        statusText.textContent = 'Session: Active';
        statusElement.classList.add('session-active');
    } else {
        statusIcon.className = 'fas fa-circle text-warning';
        statusText.textContent = 'Session: Not Active';
        statusElement.classList.remove('session-active');
    }
}

// Update cart count
function updateCartCount() {
    const cartCountElement = document.getElementById('cartCount');
    cartCountElement.textContent = sessionData.cartItems.length;
    
    // Add animation
    cartCountElement.style.transform = 'scale(1.2)';
    setTimeout(() => {
        cartCountElement.style.transform = 'scale(1)';
    }, 200);
}

// Update last access time
function updateLastAccess() {
    if (sessionData.isActive) {
        sessionData.lastAccess = new Date();
        saveSessionData();
        updateSessionDisplay();
    }
}

// Handle visibility change
function handleVisibilityChange() {
    if (!document.hidden && sessionData.isActive) {
        updateLastAccess();
    }
}

// Save session data to localStorage
function saveSessionData() {
    localStorage.setItem('chonySessionData', JSON.stringify(sessionData));
}

// Load session data from localStorage
function loadSessionData() {
    const saved = localStorage.getItem('chonySessionData');
    if (saved) {
        const parsed = JSON.parse(saved);
        // Convert date strings back to Date objects
        if (parsed.creationTime) parsed.creationTime = new Date(parsed.creationTime);
        if (parsed.lastAccess) parsed.lastAccess = new Date(parsed.lastAccess);
        sessionData = parsed;
    }
}

// Show notification
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${getNotificationIcon(type)}"></i>
            <span>${message}</span>
            <button onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${getNotificationColor(type)};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        z-index: 1000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 400px;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 300);
    }, 5000);
}

// Get notification icon
function getNotificationIcon(type) {
    const icons = {
        success: 'check-circle',
        warning: 'exclamation-triangle',
        error: 'times-circle',
        info: 'info-circle'
    };
    return icons[type] || 'info-circle';
}

// Get notification color
function getNotificationColor(type) {
    const colors = {
        success: '#28a745',
        warning: '#ffc107',
        error: '#dc3545',
        info: '#17a2b8'
    };
    return colors[type] || '#17a2b8';
}

// Canvas animation
function startCanvasAnimation() {
    const canvas = document.getElementById('sessionCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const particles = [];
    
    // Create particles
    for (let i = 0; i < 50; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            size: Math.random() * 3 + 1,
            opacity: Math.random() * 0.5 + 0.2
        });
    }
    
    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Update and draw particles
        particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            // Wrap around edges
            if (particle.x < 0) particle.x = canvas.width;
            if (particle.x > canvas.width) particle.x = 0;
            if (particle.y < 0) particle.y = canvas.height;
            if (particle.y > canvas.height) particle.y = 0;
            
            // Draw particle
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(220, 53, 69, ${particle.opacity})`;
            ctx.fill();
        });
        
        // Draw session connections
        if (sessionData.isActive) {
            particles.forEach((particle, i) => {
                particles.slice(i + 1).forEach(otherParticle => {
                    const distance = Math.sqrt(
                        Math.pow(particle.x - otherParticle.x, 2) +
                        Math.pow(particle.y - otherParticle.y, 2)
                    );
                    
                    if (distance < 100) {
                        ctx.beginPath();
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(otherParticle.x, otherParticle.y);
                        ctx.strokeStyle = `rgba(220, 53, 69, ${0.1 * (1 - distance / 100)})`;
                        ctx.lineWidth = 1;
                        ctx.stroke();
                    }
                });
            });
        }
        
        canvasAnimation = requestAnimationFrame(animate);
    }
    
    animate();
}

// Clean up animation on page unload
window.addEventListener('beforeunload', () => {
    if (canvasAnimation) {
        cancelAnimationFrame(canvasAnimation);
    }
});

// Auto-update session age
setInterval(() => {
    if (sessionData.isActive) {
        updateSessionDisplay();
    }
}, 1000);

// Session timeout checker
setInterval(() => {
    if (sessionData.isActive) {
        const now = new Date();
        const sessionAge = now - sessionData.creationTime;
        const timeoutThreshold = 30 * 60 * 1000; // 30 minutes
        
        if (sessionAge > timeoutThreshold) {
            showNotification('Session timed out due to inactivity!', 'warning');
            endSession();
        }
    }
}, 60000); // Check every minute

// Export functions for global access
window.startSession = startSession;
window.endSession = endSession;
window.createSession = createSession;
window.addToSessionCart = addToSessionCart;
window.checkSessionTimeout = checkSessionTimeout; 