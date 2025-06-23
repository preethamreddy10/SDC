package servlets;

import java.io.*;
import java.sql.*;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.WebServlet;

/**
 * CHONY Servlet Shopping Cart - ProductServlet
 * 
 * This servlet handles HTTP requests for product data and implements
 * the MVC architecture pattern as the controller component.
 * 
 * @author Haswinchony Saladi
 * @version 1.0
 * @since 2024
 */
@WebServlet("/products")
public class ProductServlet extends HttpServlet {
    
    // Database connection parameters
    private static final String DB_URL = "jdbc:mysql://localhost:3306/shopping_cart";
    private static final String DB_USER = "root";
    private static final String DB_PASSWORD = "password";
    
    /**
     * Handles GET requests to retrieve product data from MySQL database
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        
        PrintWriter out = response.getWriter();
        
        try {
            // Get products from database
            String productsJson = getProductsFromDatabase();
            
            // Send JSON response
            out.println(productsJson);
            
        } catch (SQLException e) {
            // Handle database errors
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            out.println("{\"error\": \"Database connection failed: " + e.getMessage() + "\"}");
            e.printStackTrace();
        } catch (Exception e) {
            // Handle other errors
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            out.println("{\"error\": \"Server error: " + e.getMessage() + "\"}");
            e.printStackTrace();
        }
    }
    
    /**
     * Handles POST requests to add new products to the database
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        
        PrintWriter out = response.getWriter();
        
        try {
            // Read request body
            BufferedReader reader = request.getReader();
            StringBuilder sb = new StringBuilder();
            String line;
            while ((line = reader.readLine()) != null) {
                sb.append(line);
            }
            
            // Parse JSON data (simplified for demo)
            String requestData = sb.toString();
            
            // Add product to database
            boolean success = addProductToDatabase(requestData);
            
            if (success) {
                out.println("{\"message\": \"Product added successfully\"}");
            } else {
                response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
                out.println("{\"error\": \"Failed to add product\"}");
            }
            
        } catch (Exception e) {
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            out.println("{\"error\": \"Server error: " + e.getMessage() + "\"}");
            e.printStackTrace();
        }
    }
    
    /**
     * Retrieves all products from the MySQL database
     * 
     * @return JSON string containing product data
     * @throws SQLException if database operation fails
     */
    private String getProductsFromDatabase() throws SQLException {
        StringBuilder json = new StringBuilder();
        json.append("{\"products\": [");
        
        try (Connection conn = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD)) {
            String sql = "SELECT id, name, price, category FROM products ORDER BY name";
            
            try (PreparedStatement stmt = conn.prepareStatement(sql);
                 ResultSet rs = stmt.executeQuery()) {
                
                boolean first = true;
                while (rs.next()) {
                    if (!first) {
                        json.append(",");
                    }
                    
                    json.append("{");
                    json.append("\"id\": ").append(rs.getInt("id")).append(",");
                    json.append("\"name\": \"").append(escapeJson(rs.getString("name"))).append("\",");
                    json.append("\"price\": ").append(rs.getDouble("price")).append(",");
                    json.append("\"category\": \"").append(escapeJson(rs.getString("category"))).append("\"");
                    json.append("}");
                    
                    first = false;
                }
            }
        }
        
        json.append("]}");
        return json.toString();
    }
    
    /**
     * Adds a new product to the MySQL database
     * 
     * @param productData JSON string containing product information
     * @return true if product was added successfully, false otherwise
     * @throws SQLException if database operation fails
     */
    private boolean addProductToDatabase(String productData) throws SQLException {
        // Parse JSON data (simplified implementation)
        // In a real application, you would use a JSON library like Jackson or Gson
        
        try (Connection conn = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD)) {
            String sql = "INSERT INTO products (name, price, category) VALUES (?, ?, ?)";
            
            try (PreparedStatement stmt = conn.prepareStatement(sql)) {
                // For demo purposes, using sample data
                // In real app, parse the JSON productData
                stmt.setString(1, "New Product");
                stmt.setDouble(2, 1500.0);
                stmt.setString(3, "General");
                
                int rowsAffected = stmt.executeUpdate();
                return rowsAffected > 0;
            }
        }
    }
    
    /**
     * Escapes special characters in JSON strings
     * 
     * @param input the string to escape
     * @return escaped string safe for JSON
     */
    private String escapeJson(String input) {
        if (input == null) {
            return "";
        }
        
        return input.replace("\\", "\\\\")
                   .replace("\"", "\\\"")
                   .replace("\n", "\\n")
                   .replace("\r", "\\r")
                   .replace("\t", "\\t");
    }
    
    /**
     * Initializes the servlet and loads the MySQL JDBC driver
     */
    @Override
    public void init() throws ServletException {
        try {
            // Load MySQL JDBC driver
            Class.forName("com.mysql.cj.jdbc.Driver");
            System.out.println("CHONY Servlet: MySQL JDBC Driver loaded successfully");
        } catch (ClassNotFoundException e) {
            throw new ServletException("MySQL JDBC Driver not found", e);
        }
    }
    
    /**
     * Cleanup method called when servlet is destroyed
     */
    @Override
    public void destroy() {
        System.out.println("CHONY Servlet: ProductServlet destroyed");
    }
} 