-- CHONY Servlet Shopping Cart - Database Setup
-- Experiment 6: Servlet-Based Controller for Shopping Cart
-- Author: Haswinchony Saladi
-- Roll No: 23AG1A0555

-- Create database
CREATE DATABASE IF NOT EXISTS shopping_cart;
USE shopping_cart;

-- Create products table
CREATE TABLE IF NOT EXISTS products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    category VARCHAR(50) DEFAULT 'General',
    description TEXT,
    image_url VARCHAR(255),
    stock_quantity INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create cart table for session management
CREATE TABLE IF NOT EXISTS cart_items (
    id INT PRIMARY KEY AUTO_INCREMENT,
    session_id VARCHAR(100) NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL DEFAULT 1,
    added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);

-- Create users table for future authentication
CREATE TABLE IF NOT EXISTS users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    full_name VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP NULL
);

-- Create orders table for order management
CREATE TABLE IF NOT EXISTS orders (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    total_amount DECIMAL(10,2) NOT NULL,
    status ENUM('pending', 'confirmed', 'shipped', 'delivered', 'cancelled') DEFAULT 'pending',
    shipping_address TEXT,
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
);

-- Create order_items table
CREATE TABLE IF NOT EXISTS order_items (
    id INT PRIMARY KEY AUTO_INCREMENT,
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);

-- Insert sample products
INSERT INTO products (name, price, category, description, stock_quantity) VALUES
('Java Programming Book', 2300.00, 'Programming', 'Complete guide to Java programming language with practical examples', 50),
('Web Development Guide', 1800.00, 'Web Development', 'Comprehensive web development guide covering HTML, CSS, and JavaScript', 30),
('Python Basics', 1500.00, 'Programming', 'Introduction to Python programming for beginners', 40),
('Database Design', 2000.00, 'Database', 'Database design principles and SQL implementation', 25),
('Mobile App Development', 2500.00, 'Mobile Development', 'Complete guide to mobile app development with React Native', 20),
('Cloud Computing', 2200.00, 'Cloud', 'Introduction to cloud computing and AWS services', 35),
('Data Structures & Algorithms', 2800.00, 'Computer Science', 'Advanced data structures and algorithm analysis', 15),
('Machine Learning Basics', 3000.00, 'AI/ML', 'Introduction to machine learning concepts and applications', 10),
('Cybersecurity Fundamentals', 1900.00, 'Security', 'Basic cybersecurity concepts and best practices', 30),
('DevOps Practices', 2400.00, 'DevOps', 'DevOps methodologies and tools for modern software development', 20);

-- Create indexes for better performance
CREATE INDEX idx_products_category ON products(category);
CREATE INDEX idx_products_price ON products(price);
CREATE INDEX idx_cart_session ON cart_items(session_id);
CREATE INDEX idx_orders_user ON orders(user_id);
CREATE INDEX idx_orders_status ON orders(status);

-- Create views for common queries
CREATE VIEW product_summary AS
SELECT 
    category,
    COUNT(*) as product_count,
    AVG(price) as avg_price,
    MIN(price) as min_price,
    MAX(price) as max_price
FROM products 
GROUP BY category;

CREATE VIEW low_stock_products AS
SELECT 
    id,
    name,
    stock_quantity,
    category
FROM products 
WHERE stock_quantity < 10
ORDER BY stock_quantity ASC;

-- Create stored procedure for adding products
DELIMITER //
CREATE PROCEDURE AddProduct(
    IN p_name VARCHAR(100),
    IN p_price DECIMAL(10,2),
    IN p_category VARCHAR(50),
    IN p_description TEXT,
    IN p_stock_quantity INT
)
BEGIN
    INSERT INTO products (name, price, category, description, stock_quantity)
    VALUES (p_name, p_price, p_category, p_description, p_stock_quantity);
    
    SELECT LAST_INSERT_ID() as new_product_id;
END //
DELIMITER ;

-- Create stored procedure for getting products by category
DELIMITER //
CREATE PROCEDURE GetProductsByCategory(IN p_category VARCHAR(50))
BEGIN
    SELECT id, name, price, category, description, stock_quantity
    FROM products 
    WHERE category = p_category
    ORDER BY name;
END //
DELIMITER ;

-- Create trigger to update product stock when order is placed
DELIMITER //
CREATE TRIGGER update_stock_after_order
AFTER INSERT ON order_items
FOR EACH ROW
BEGIN
    UPDATE products 
    SET stock_quantity = stock_quantity - NEW.quantity
    WHERE id = NEW.product_id;
END //
DELIMITER ;

-- Grant permissions (adjust as needed for your MySQL setup)
-- GRANT ALL PRIVILEGES ON shopping_cart.* TO 'root'@'localhost';
-- FLUSH PRIVILEGES;

-- Display database information
SELECT 'CHONY Servlet Shopping Cart Database Setup Complete' as message;
SELECT COUNT(*) as total_products FROM products;
SELECT category, COUNT(*) as product_count FROM products GROUP BY category; 