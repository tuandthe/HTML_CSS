-- ====================================
-- Order Management Database - PostgreSQL
-- ====================================
-- Sử dụng với Docker PostgreSQL
-- Drop tables if exists (for clean recreation)
DROP TABLE IF EXISTS order_items CASCADE;

DROP TABLE IF EXISTS orders CASCADE;

DROP TABLE IF EXISTS products CASCADE;

DROP TABLE IF EXISTS customers CASCADE;

-- ====================================
-- Table Definitions
-- ====================================
-- Customers Table
CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at DATE DEFAULT CURRENT_DATE
);

-- Products Table
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2) NOT NULL CHECK (price >= 0),
    stock INT NOT NULL DEFAULT 0 CHECK (stock >= 0)
);

-- Orders Table
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    customer_id INT NOT NULL,
    order_date DATE DEFAULT CURRENT_DATE,
    total_amount DECIMAL(10, 2) NOT NULL CHECK (total_amount >= 0),
    FOREIGN KEY (customer_id) REFERENCES customers (id) ON DELETE CASCADE
);

-- Order Items Table
CREATE TABLE order_items (
    id SERIAL PRIMARY KEY,
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL CHECK (quantity > 0),
    price DECIMAL(10, 2) NOT NULL CHECK (price >= 0),
    FOREIGN KEY (order_id) REFERENCES orders (id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products (id) ON DELETE CASCADE
);

-- Create indexes for better query performance
CREATE INDEX idx_orders_customer_id ON orders (customer_id);

CREATE INDEX idx_orders_order_date ON orders (order_date);

CREATE INDEX idx_order_items_order_id ON order_items (order_id);

CREATE INDEX idx_order_items_product_id ON order_items (product_id);

-- ====================================
-- Sample Data (Optional - for testing)
-- ====================================
-- Insert customers
INSERT INTO
    customers (name, email, created_at)
VALUES
    (
        'Nguyen Van A',
        'nguyenvana@email.com',
        '2024-01-15'
    ),
    ('Tran Thi B', 'tranthib@email.com', '2024-02-20'),
    ('Le Van C', 'levanc@email.com', '2024-03-10'),
    ('Pham Thi D', 'phamthid@email.com', '2024-04-05'),
    (
        'Hoang Van E',
        'hoangvane@email.com',
        '2024-05-12'
    );

-- Insert products
INSERT INTO
    products (name, price, stock)
VALUES
    ('Laptop Dell XPS 13', 25000000, 50),
    ('iPhone 15 Pro', 30000000, 100),
    ('Samsung Galaxy S24', 22000000, 80),
    ('iPad Pro 12.9', 28000000, 60),
    ('MacBook Pro M3', 45000000, 40),
    ('AirPods Pro', 6000000, 200),
    ('Samsung Watch 6', 8000000, 150),
    ('Logitech MX Master 3', 2500000, 300);

-- Insert orders (including current month)
INSERT INTO
    orders (customer_id, order_date, total_amount)
VALUES
    (1, '2024-11-15', 55000000),
    (1, '2024-12-01', 30000000),
    (2, '2024-12-05', 50000000),
    (3, '2024-11-20', 28000000),
    (3, '2024-12-03', 33500000),
    (4, '2024-12-07', 8000000);

-- Insert order items
INSERT INTO
    order_items (order_id, product_id, quantity, price)
VALUES
    -- Order 1 (Customer 1, Nov)
    (1, 1, 1, 25000000),
    (1, 5, 1, 30000000),
    -- Order 2 (Customer 1, Dec)
    (2, 2, 1, 30000000),
    -- Order 3 (Customer 2, Dec)
    (3, 3, 1, 22000000),
    (3, 4, 1, 28000000),
    -- Order 4 (Customer 3, Nov)
    (4, 4, 1, 28000000),
    -- Order 5 (Customer 3, Dec)
    (5, 2, 1, 30000000),
    (5, 7, 1, 3500000),
    -- Order 6 (Customer 4, Dec)
    (6, 7, 1, 8000000);

-- QUERY 1: Find customers who have never made a purchase
SELECT
    c.id,
    c.name,
    c.email,
    c.created_at
FROM
    customers c
    LEFT JOIN orders o ON c.id = o.customer_id
WHERE
    o.id IS NULL
ORDER BY
    c.created_at DESC;

-- QUERY 2: Display TOP 5 most purchased products for each customer in the current month
WITH
    customer_product_purchases AS (
        SELECT
            o.customer_id,
            c.name AS customer_name,
            oi.product_id,
            p.name AS product_name,
            SUM(oi.quantity) AS total_quantity,
            ROW_NUMBER() OVER (
                PARTITION BY
                    o.customer_id
                ORDER BY
                    SUM(oi.quantity) DESC
            ) AS rank
        FROM
            orders o
            JOIN order_items oi ON o.id = oi.order_id
            JOIN products p ON oi.product_id = p.id
            JOIN customers c ON o.customer_id = c.id
        WHERE
            DATE_TRUNC ('month', o.order_date) = DATE_TRUNC ('month', CURRENT_DATE)
        GROUP BY
            o.customer_id,
            c.name,
            oi.product_id,
            p.name
    )
SELECT
    customer_id,
    customer_name,
    product_id,
    product_name,
    total_quantity,
    rank
FROM
    customer_product_purchases
WHERE
    rank <= 5
ORDER BY
    customer_id,
    rank;

-- QUERY 3: Calculate total quantity sold for each product 
SELECT
    p.id,
    p.name,
    SUM(oi.quantity) AS TotalQuantity
FROM
    orders o
    JOIN order_items oi ON o.id = oi.order_id
    JOIN products p ON oi.product_id = p.id
GROUP BY
    p.id
ORDER BY
    TotalQuantity DESC
    -- QUERY 4: Find TOP 3 customers with highest revenue
SELECT
    c.id,
    c.name,
    c.name,
    SUM(o.total_amount) AS total_revenue
FROM
    customers c
    JOIN orders o ON c.id = o.customer_id
GROUP BY
    c.id,
    c.name
ORDER BY
    total_revenue DESC
LIMIT
    3
    -- Method 2: Using RANK() window function (handles ties properly)
WITH
    customer_revenue AS (
        SELECT
            c.id AS customer_id,
            c.name AS customer_name,
            c.email,
            COUNT(o.id) AS total_orders,
            SUM(o.total_amount) AS total_revenue,
            RANK() OVER (
                ORDER BY
                    SUM(o.total_amount) DESC
            ) AS revenue_rank
        FROM
            customers c
            INNER JOIN orders o ON c.id = o.customer_id
        GROUP BY
            c.id,
            c.name,
            c.email
    )
SELECT
    customer_id,
    customer_name,
    email,
    total_orders,
    total_revenue,
    revenue_rank
FROM
    customer_revenue
WHERE
    revenue_rank <= 3
ORDER BY
    revenue_rank,
    customer_name;