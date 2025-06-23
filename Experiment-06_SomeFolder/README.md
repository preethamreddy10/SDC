# Experiment 6: CHONY - Servlet-Based Controller for Shopping Cart

## Student Information
- **Name:** Haswinchony Saladi
- **Roll No:** 23AG1A0555
- **Email:** 23ag1a0555@gmail.com
- **Phone:** 7995921729

## Overview
This experiment creates a complete Servlet-Based Controller for a Shopping Cart application using the MVC (Model-View-Controller) architecture pattern. The application integrates a web-based shopping cart interface with a backend MySQL database using Java Servlets.

## Aim
To design a Java Servlet controller that connects the front-end shopping cart application with a MySQL database, using the MVC architecture pattern.

## Features
- **MVC Architecture**: Clear separation of Model (MySQL), View (HTML/CSS/JS), and Controller (Java Servlet)
- **Java Servlet Controller**: Handles HTTP requests and manages database connections
- **MySQL Database Integration**: Direct database connectivity for product management
- **Canvas UI**: Modern HTML5 Canvas interface for dynamic product visualization
- **Responsive Design**: Works on all device sizes
- **Cart Management**: Add, remove, and update cart items
- **Product Catalog**: Dynamic product loading from database
- **CHONY Branding**: Consistent branding throughout the application

## Project Structure
```
Experiment6/
├── index.html                    # Home page with canvas UI
├── catalog.html                  # Catalog page with product loading
├── style.css                     # Custom styling
├── script.js                     # Frontend JavaScript functionality
├── src/
│   └── servlets/
│       └── ProductServlet.java   # Servlet controller
├── WebContent/
│   └── WEB-INF/
│       └── web.xml              # Servlet configuration
├── database_setup.sql           # MySQL database setup script
└── README.md                    # This file
```

## Technologies Used
- **Java Servlet API**: Backend controller logic
- **MySQL Database**: Data persistence and management
- **HTML5 Canvas**: Dynamic product visualization
- **CSS3**: Modern styling and responsive design
- **JavaScript**: Frontend interactivity and AJAX calls
- **Bootstrap 5**: UI components and responsive grid
- **Apache Tomcat**: Servlet container

## MVC Architecture Implementation

### Model (MySQL Database)
- **Database**: `shopping_cart`
- **Tables**: `products`, `cart_items`, `users`, `orders`, `order_items`
- **Features**: 
  - Product data storage
  - Cart information management
  - User session handling
  - Order processing

### View (HTML/CSS/JavaScript)
- **HTML**: Semantic markup and structure
- **CSS**: Modern styling with CHONY branding
- **JavaScript**: Canvas animations and AJAX functionality
- **Bootstrap**: Responsive UI components

### Controller (Java Servlet)
- **ProductServlet**: Handles HTTP requests for product data
- **Features**:
  - GET requests for product retrieval
  - POST requests for product addition
  - Database connection management
  - JSON response formatting

## Installation & Setup

### Prerequisites
- Java JDK 8 or higher
- Apache Tomcat 9.0 or higher
- MySQL 8.0 or higher
- VS Code with Java Extension Pack (recommended)

### Database Setup
1. **Install MySQL** and start the service
2. **Run the database setup script**:
   ```sql
   mysql -u root -p < database_setup.sql
   ```
3. **Verify database creation**:
   ```sql
   USE shopping_cart;
   SELECT * FROM products;
   ```

### Servlet Setup
1. **Compile the Servlet**:
   ```bash
   javac -cp "lib/*" -d bin src/servlets/ProductServlet.java
   ```

2. **Deploy to Apache Tomcat**:
   - Copy `WebContent/` to `tomcat/webapps/shopping-cart/`
   - Copy compiled classes to `WEB-INF/classes/`
   - Copy required JAR files to `WEB-INF/lib/`

3. **Required JAR Files**:
   - `mysql-connector-j-9.3.0.jar`
   - `javax.servlet-api-4.0.1.jar`

### Running the Application
1. **Start Tomcat Server**
2. **Visit in Browser**: `http://localhost:8080/shopping-cart/index.html`

## Database Schema

### Products Table
```sql
CREATE TABLE products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    category VARCHAR(50) DEFAULT 'General',
    description TEXT,
    stock_quantity INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Sample Data
The database includes 10 sample products across different categories:
- Programming Books (Java, Python)
- Web Development Guides
- Database Design
- Mobile App Development
- Cloud Computing
- Data Structures & Algorithms
- Machine Learning
- Cybersecurity
- DevOps Practices

## Key Features Demonstrated

### Frontend Features
- ✅ Responsive Bootstrap design
- ✅ HTML5 Canvas animations
- ✅ Dynamic product loading
- ✅ Shopping cart functionality
- ✅ Product sorting and filtering
- ✅ Modern UI with CHONY branding
- ✅ AJAX-based data communication

### Backend Features
- ✅ Java Servlet controller
- ✅ MySQL database integration
- ✅ JSON API endpoints
- ✅ Error handling and logging
- ✅ Session management
- ✅ Database connection pooling
- ✅ Prepared statements for security

### Architecture Features
- ✅ MVC pattern implementation
- ✅ Separation of concerns
- ✅ Scalable code structure
- ✅ Professional documentation
- ✅ Database optimization (indexes, views, stored procedures)

## API Endpoints

### GET /products
- **Purpose**: Retrieve all products from database
- **Response**: JSON array of products
- **Example**:
  ```json
  {
    "products": [
      {
        "id": 1,
        "name": "Java Programming Book",
        "price": 2300.00,
        "category": "Programming"
      }
    ]
  }
  ```

### POST /products
- **Purpose**: Add new product to database
- **Request**: JSON product data
- **Response**: Success/error message

## Canvas Visualization
The application includes two canvas implementations:

1. **Hero Canvas**: Animated shopping cart with floating products
2. **Product Canvas**: Bar chart visualization of product prices

## Error Handling
- Database connection errors
- SQL query failures
- Invalid request handling
- User-friendly error messages

## Security Features
- Prepared statements to prevent SQL injection
- Input validation and sanitization
- Secure database connections
- Protected web resources

## Performance Optimizations
- Database indexes on frequently queried columns
- Connection pooling
- Efficient SQL queries
- Caching strategies

## Browser Compatibility
- Chrome, Firefox, Safari, Edge
- Requires JavaScript enabled
- HTML5 Canvas support required

## Learning Objectives
- Java Servlet API and lifecycle
- MVC architecture implementation
- MySQL database integration
- HTML5 Canvas programming
- AJAX and JSON handling
- Web application deployment
- Database design and optimization
- Professional web development practices

## Future Enhancements
- User authentication and authorization
- Order processing and payment integration
- Product image upload and management
- Advanced search and filtering
- Admin panel for product management
- Email notifications
- Mobile app integration

## Troubleshooting

### Common Issues
1. **Database Connection Failed**
   - Verify MySQL service is running
   - Check database credentials in Servlet
   - Ensure MySQL connector JAR is in classpath

2. **Servlet Not Found**
   - Verify web.xml configuration
   - Check Tomcat deployment
   - Ensure compiled classes are in correct location

3. **Canvas Not Displaying**
   - Check browser console for JavaScript errors
   - Verify HTML5 Canvas support
   - Ensure script.js is loaded correctly

## Output Screenshots

### Home Page
![Home Page](screenshots/home-page.png)
*CHONY Servlet Shopping Cart home page with animated canvas*

### Product Catalog
![Product Catalog](screenshots/catalog-page.png)
*Product catalog with dynamic loading from MySQL database*

### Canvas Visualization
![Canvas Visualization](screenshots/canvas-visualization.png)
*HTML5 Canvas product price visualization*

### Shopping Cart
![Shopping Cart](screenshots/shopping-cart.png)
*Shopping cart with product management*

### Database Integration
![Database Integration](screenshots/database-integration.png)
*MySQL database with product data*

## Conclusion
This experiment successfully demonstrates the implementation of a Servlet-Based Controller for a Shopping Cart application using the MVC architecture pattern. The application showcases professional web development practices, database integration, and modern UI design with CHONY branding.

## License
This project is licensed under the MIT License. 