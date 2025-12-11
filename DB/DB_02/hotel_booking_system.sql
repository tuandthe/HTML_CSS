DROP TABLE IF EXISTS payments CASCADE;

DROP TABLE IF EXISTS reservations CASCADE;

DROP TABLE IF EXISTS rooms CASCADE;

DROP TABLE IF EXISTS hotels CASCADE;

DROP TABLE IF EXISTS customers CASCADE;

-- Hotels Table
CREATE TABLE hotels (
    id SERIAL PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    address TEXT NOT NULL,
    city VARCHAR(100) NOT NULL,
    phone VARCHAR(20),
    email VARCHAR(100),
    rating DECIMAL(2, 1) CHECK (
        rating >= 0
        AND rating <= 5
    ),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Rooms Table
CREATE TABLE rooms (
    id SERIAL PRIMARY KEY,
    hotel_id INT NOT NULL,
    room_number VARCHAR(20) NOT NULL,
    room_type VARCHAR(50) NOT NULL, -- Single, Double, Suite, Deluxe
    capacity INT NOT NULL CHECK (capacity > 0),
    price_per_night DECIMAL(10, 2) NOT NULL CHECK (price_per_night >= 0),
    status VARCHAR(20) DEFAULT 'available', -- available, maintenance, occupied
    description TEXT,
    FOREIGN KEY (hotel_id) REFERENCES hotels (id) ON DELETE CASCADE,
    UNIQUE (hotel_id, room_number)
);

-- Customers Table
CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone VARCHAR(20) NOT NULL,
    address TEXT,
    id_card VARCHAR(20) UNIQUE,
    date_of_birth DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Reservations Table
CREATE TABLE reservations (
    id SERIAL PRIMARY KEY,
    customer_id INT NOT NULL,
    room_id INT NOT NULL,
    check_in_date DATE NOT NULL,
    check_out_date DATE NOT NULL,
    number_of_guests INT NOT NULL CHECK (number_of_guests > 0),
    total_amount DECIMAL(10, 2) NOT NULL CHECK (total_amount >= 0),
    status VARCHAR(20) DEFAULT 'pending', -- pending, confirmed, checked_in, checked_out, cancelled
    special_requests TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (customer_id) REFERENCES customers (id) ON DELETE CASCADE,
    FOREIGN KEY (room_id) REFERENCES rooms (id) ON DELETE CASCADE,
    CHECK (check_out_date > check_in_date)
);

-- Payments Table
CREATE TABLE payments (
    id SERIAL PRIMARY KEY,
    reservation_id INT NOT NULL UNIQUE,
    payment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    amount DECIMAL(10, 2) NOT NULL CHECK (amount >= 0),
    payment_method VARCHAR(50) NOT NULL, -- cash, credit_card, debit_card, bank_transfer
    transaction_id VARCHAR(100),
    status VARCHAR(20) DEFAULT 'pending', -- pending, completed, failed, refunded
    FOREIGN KEY (reservation_id) REFERENCES reservations (id) ON DELETE CASCADE
);

-- Index for hotel lookups
CREATE INDEX idx_hotels_city ON hotels (city);

CREATE INDEX idx_hotels_rating ON hotels (rating);

-- Index for room searches
CREATE INDEX idx_rooms_hotel_id ON rooms (hotel_id);

CREATE INDEX idx_rooms_type_price ON rooms (room_type, price_per_night);

CREATE INDEX idx_rooms_status ON rooms (status);

-- Index for customer lookups
CREATE INDEX idx_customers_email ON customers (email);

CREATE INDEX idx_customers_phone ON customers (phone);

-- Index for reservation searches (CRITICAL for availability checks)
CREATE INDEX idx_reservations_dates ON reservations (check_in_date, check_out_date);

CREATE INDEX idx_reservations_room_id ON reservations (room_id);

CREATE INDEX idx_reservations_customer_id ON reservations (customer_id);

CREATE INDEX idx_reservations_status ON reservations (status);

-- Index for payment queries
CREATE INDEX idx_payments_reservation_id ON payments (reservation_id);

CREATE INDEX idx_payments_date ON payments (payment_date);

CREATE INDEX idx_payments_status ON payments (status);

-- Composite index for date range queries
CREATE INDEX idx_reservations_room_dates ON reservations (room_id, check_in_date, check_out_date);

-- Insert hotels
INSERT INTO
    hotels (name, address, city, phone, email, rating)
VALUES
    (
        'Grand Hotel Hanoi',
        '123 Tran Hung Dao, Hoan Kiem',
        'Hanoi',
        '024-3825-9999',
        'contact@grandhotelhanoi.com',
        4.5
    ),
    (
        'Saigon Palace Hotel',
        '456 Nguyen Hue, District 1',
        'Ho Chi Minh',
        '028-3829-8888',
        'info@saigonpalace.com',
        4.8
    ),
    (
        'Da Nang Beach Resort',
        '789 Vo Nguyen Giap, Son Tra',
        'Da Nang',
        '0236-3847-777',
        'booking@danangresort.com',
        4.3
    ),
    (
        'Hue Imperial Hotel',
        '321 Le Loi, Hue City',
        'Hue',
        '0234-3823-666',
        'reservation@hueimperial.com',
        4.6
    );

-- Insert rooms
INSERT INTO
    rooms (
        hotel_id,
        room_number,
        room_type,
        capacity,
        price_per_night,
        status,
        description
    )
VALUES
    -- Grand Hotel Hanoi
    (
        1,
        '101',
        'Single',
        1,
        800000,
        'available',
        'Cozy single room with city view'
    ),
    (
        1,
        '102',
        'Double',
        2,
        1200000,
        'available',
        'Comfortable double room'
    ),
    (
        1,
        '201',
        'Suite',
        4,
        3000000,
        'available',
        'Luxury suite with living room'
    ),
    (
        1,
        '202',
        'Deluxe',
        3,
        2000000,
        'available',
        'Deluxe room with balcony'
    ),
    -- Saigon Palace Hotel
    (
        2,
        '301',
        'Single',
        1,
        1000000,
        'available',
        'Modern single room'
    ),
    (
        2,
        '302',
        'Double',
        2,
        1500000,
        'available',
        'Elegant double room'
    ),
    (
        2,
        '401',
        'Suite',
        4,
        4000000,
        'available',
        'Presidential suite'
    ),
    (
        2,
        '402',
        'Deluxe',
        3,
        2500000,
        'available',
        'Premium deluxe room'
    ),
    -- Da Nang Beach Resort
    (
        3,
        'A101',
        'Double',
        2,
        1800000,
        'available',
        'Ocean view double room'
    ),
    (
        3,
        'A102',
        'Suite',
        4,
        3500000,
        'available',
        'Beachfront suite'
    ),
    -- Hue Imperial Hotel
    (
        4,
        'R101',
        'Single',
        1,
        900000,
        'available',
        'Traditional style room'
    ),
    (
        4,
        'R201',
        'Double',
        2,
        1400000,
        'available',
        'Royal double room'
    );

-- Insert customers
INSERT INTO
    customers (
        full_name,
        email,
        phone,
        address,
        id_card,
        date_of_birth
    )
VALUES
    (
        'Nguyen Van Anh',
        'nguyenvananh@email.com',
        '0912345678',
        '15 Hang Bai, Hanoi',
        '001234567890',
        '1990-05-15'
    ),
    (
        'Tran Thi Binh',
        'tranthib@email.com',
        '0923456789',
        '25 Le Lai, HCMC',
        '001234567891',
        '1985-08-20'
    ),
    (
        'Le Van Cuong',
        'levanc@email.com',
        '0934567890',
        '35 Tran Phu, Da Nang',
        '001234567892',
        '1992-03-10'
    ),
    (
        'Pham Thi Dung',
        'phamthid@email.com',
        '0945678901',
        '45 Nguyen Trai, Hue',
        '001234567893',
        '1988-11-25'
    ),
    (
        'Hoang Van Hai',
        'hoangvane@email.com',
        '0956789012',
        '55 Ba Trieu, Hanoi',
        '001234567894',
        '1995-07-30'
    );

-- Insert reservations (spanning multiple months in 2024-2025)
INSERT INTO
    reservations (
        customer_id,
        room_id,
        check_in_date,
        check_out_date,
        number_of_guests,
        total_amount,
        status
    )
VALUES
    -- December 2024
    (
        1,
        1,
        '2024-12-10',
        '2024-12-12',
        1,
        1600000,
        'checked_out'
    ),
    (
        2,
        6,
        '2024-12-15',
        '2024-12-18',
        2,
        4500000,
        'checked_out'
    ),
    (
        3,
        9,
        '2024-12-20',
        '2024-12-23',
        2,
        5400000,
        'checked_out'
    ),
    -- January 2025
    (
        1,
        3,
        '2025-01-05',
        '2025-01-08',
        3,
        9000000,
        'checked_out'
    ),
    (
        4,
        7,
        '2025-01-10',
        '2025-01-15',
        4,
        20000000,
        'checked_out'
    ),
    (
        2,
        2,
        '2025-01-20',
        '2025-01-22',
        2,
        2400000,
        'checked_out'
    ),
    (
        5,
        5,
        '2025-01-25',
        '2025-01-27',
        1,
        2000000,
        'checked_out'
    ),
    -- February 2025
    (
        3,
        8,
        '2025-02-01',
        '2025-02-05',
        3,
        10000000,
        'checked_out'
    ),
    (
        1,
        4,
        '2025-02-10',
        '2025-02-13',
        2,
        6000000,
        'checked_out'
    ),
    (
        2,
        10,
        '2025-02-15',
        '2025-02-18',
        4,
        10500000,
        'checked_out'
    ),
    -- March 2025 (some confirmed, some pending)
    (
        4,
        1,
        '2025-03-01',
        '2025-03-03',
        1,
        1600000,
        'confirmed'
    ),
    (
        5,
        6,
        '2025-03-10',
        '2025-03-15',
        2,
        7500000,
        'confirmed'
    ),
    -- Future reservations (December 2025)
    (
        1,
        3,
        '2025-12-20',
        '2025-12-25',
        3,
        15000000,
        'confirmed'
    ),
    (
        2,
        7,
        '2025-12-22',
        '2025-12-28',
        4,
        24000000,
        'pending'
    ),
    (
        3,
        9,
        '2025-12-25',
        '2025-12-30',
        2,
        9000000,
        'confirmed'
    );

-- Insert payments
INSERT INTO
    payments (
        reservation_id,
        payment_date,
        amount,
        payment_method,
        transaction_id,
        status
    )
VALUES
    (
        1,
        '2024-12-10 14:30:00',
        1600000,
        'credit_card',
        'TXN001234567',
        'completed'
    ),
    (
        2,
        '2024-12-15 10:15:00',
        4500000,
        'bank_transfer',
        'TXN001234568',
        'completed'
    ),
    (
        3,
        '2024-12-20 16:45:00',
        5400000,
        'cash',
        NULL,
        'completed'
    ),
    (
        4,
        '2025-01-05 11:20:00',
        9000000,
        'credit_card',
        'TXN001234569',
        'completed'
    ),
    (
        5,
        '2025-01-10 09:30:00',
        20000000,
        'bank_transfer',
        'TXN001234570',
        'completed'
    ),
    (
        6,
        '2025-01-20 15:00:00',
        2400000,
        'debit_card',
        'TXN001234571',
        'completed'
    ),
    (
        7,
        '2025-01-25 13:10:00',
        2000000,
        'cash',
        NULL,
        'completed'
    ),
    (
        8,
        '2025-02-01 10:45:00',
        10000000,
        'credit_card',
        'TXN001234572',
        'completed'
    ),
    (
        9,
        '2025-02-10 14:20:00',
        6000000,
        'bank_transfer',
        'TXN001234573',
        'completed'
    ),
    (
        10,
        '2025-02-15 11:30:00',
        10500000,
        'credit_card',
        'TXN001234574',
        'completed'
    ),
    (
        11,
        '2025-03-01 12:00:00',
        1600000,
        'credit_card',
        'TXN001234575',
        'completed'
    ),
    (
        12,
        '2025-03-10 10:00:00',
        7500000,
        'bank_transfer',
        'TXN001234576',
        'completed'
    );

-- ====================================
-- QUERY A: Find available rooms in a date range
-- ====================================
SELECT
    r.id AS room_id,
    h.name AS hotel_name,
    h.city,
    r.room_number,
    r.room_type,
    r.capacity,
    r.price_per_night,
    r.description
FROM
    rooms r
    JOIN hotels h ON r.hotel_id = h.id
WHERE
    r.status = 'available'
    AND NOT EXISTS (
        SELECT
            1
        FROM
            reservations res
        WHERE
            res.room_id = r.id
            AND res.status NOT IN ('cancelled')
            AND (
                (
                    res.check_in_date <= '2025-12-25'
                    AND res.check_out_date >= '2025-12-20'
                )
            )
    )
ORDER BY
    h.city,
    r.price_per_night;

-- ====================================
-- QUERY B: Monthly revenue statistics
-- ====================================
SELECT
    TO_CHAR (p.payment_date, 'YYYY-MM') AS month,
    SUM(p.amount) AS total_revenue
FROM
    payments p
GROUP BY
    month
ORDER BY
    month DESC;

-- ====================================
-- QUERY C: Top 3 customers with highest spending in a year
-- ====================================
SELECT
    c.full_name,
    SUM(p.amount) AS total_spent
FROM
    customers c
    INNER JOIN reservations re ON c.id = re.customer_id
    INNER JOIN payments p ON re.id = p.reservation_id
WHERE
    EXTRACT(
        YEAR
        FROM
            p.payment_date
    ) = 2025
GROUP BY
    c.full_name
ORDER BY
    total_spent DESC
LIMIT
    3
    -- ====================================
    -- QUERY D: Customer ranking by total spending (Window Function)
    -- ====================================
SELECT
    c.full_name,
    SUM(p.amount) AS total_spent,
    RANK() OVER (
        ORDER BY
            SUM(p.amount) DESC
    ) AS RANK
FROM
    customers c
    INNER JOIN reservations re ON c.id = re.customer_id
    INNER JOIN payments p ON re.id = p.reservation_id
GROUP BY
    c.full_name
ORDER BY
    RANK
    -- -- ====================================
    -- -- OPTIMIZATION: EXPLAIN ANALYZE Examples
    -- -- ====================================
    -- -- Chứng minh hiệu quả của indexes
    -- -- Example 1: Check query plan for availability check
    EXPLAIN ANALYZE
SELECT
    r.id AS room_id,
    h.name AS hotel_name,
    r.room_type,
    r.price_per_night,
    r.status
FROM
    rooms r
    JOIN hotels h ON r.hotel_id = h.id
WHERE
    r.status = 'available'
    AND NOT EXISTS (
        SELECT
            1
        FROM
            reservations res
        WHERE
            res.room_id = r.id
            AND res.status NOT IN ('cancelled')
            AND (
                (
                    res.check_in_date <= '2025-12-25'
                    AND res.check_out_date >= '2025-12-20'
                )
            )
    )
ORDER BY
    h.city,
    r.price_per_night