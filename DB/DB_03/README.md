# DB_03 - MongoDB Product Management System

## Tổng Quan

Hệ thống quản lý sản phẩm sử dụng MongoDB với đầy đủ CRUD operations, filtering, projection và indexing.

**Database:** `product_management`  
**Collection:** `products`  
**Documents:** 10 sản phẩm (electronics & accessories)

## Cấu Trúc Document

```javascript
{
  "_id": ObjectId("..."),
  "name": "Laptop Dell XPS 13",
  "price": 1800,
  "category": "electronics",
  "tags": ["laptop", "tech", "portable"],
  "stock": 50,
  "rating": {
    "avg": 4.5,
    "count": 120
  }
}
```

## Yêu Cầu Đã Thực Hiện ✅

### 1. INSERT - 10 Products

```javascript
db.products.insertMany([...10 products...]);
```

**Danh sách sản phẩm:**

| # | Tên Sản Phẩm | Giá ($) | Category | Stock | Rating |
|---|--------------|---------|----------|-------|--------|
| 1 | Laptop Dell XPS 13 | 1,800 | electronics | 50 | 4.5 |
| 2 | iPhone 15 Pro | 1,500 | electronics | 30 | 4.7 |
| 3 | Samsung Galaxy S24 | 1,200 | electronics | 40 | 4.6 |
| 4 | MacBook Pro M3 | 2,500 | electronics | 25 | 4.8 |
| 5 | iPad Pro 12.9 | 1,400 | electronics | 35 | 4.6 |
| 6 | AirPods Pro | 250 | accessories | 100 | 4.4 |
| 7 | Sony WH-1000XM5 | 400 | accessories | 60 | 4.7 |
| 8 | Mechanical Keyboard | 150 | accessories | 0 | 4.3 |
| 9 | Gaming Mouse | 80 | accessories | 0 | 4.2 |
| 10 | USB-C Hub | 50 | accessories | 150 | 4.1 |

### 2. QUERY Operations

#### 2a. Tìm sản phẩm giá từ 1000-2000 ✅

```javascript
db.products.find({
  price: { $gte: 1000, $lte: 2000 }
});
```

**Operators:**
- `$gte`: Greater than or equal (>=)
- `$lte`: Less than or equal (<=)

**Kết quả:** 5 sản phẩm
- Dell XPS 13 ($1,800)
- iPhone 15 Pro ($1,500)
- Samsung S24 ($1,200)
- iPad Pro ($1,400)

#### 2b. Tìm sản phẩm category = "electronics" ✅

```javascript
db.products.find({
  category: "electronics"
});
```

**Kết quả:** 5 sản phẩm electronics

#### 2c. Projection - Chỉ lấy name + price ✅

```javascript
db.products.find(
  {},
  { 
    _id: 0,      // Exclude _id
    name: 1,     // Include name
    price: 1     // Include price
  }
);
```

**Output mẫu:**
```javascript
{ "name": "Laptop Dell XPS 13", "price": 1800 }
{ "name": "iPhone 15 Pro", "price": 1500 }
...
```

**Projection rules:**
- `0`: Exclude field
- `1`: Include field
- Không thể mix include/exclude (trừ _id)

#### 2d. Filter rating.avg > 4.2 ✅

```javascript
db.products.find({
  "rating.avg": { $gt: 4.2 }
});
```

**Nested field:** Dùng dot notation `"rating.avg"`

**Kết quả:** 7 sản phẩm có rating > 4.2

### 3. UPDATE - Tăng stock lên 5 cho category "tech" ✅

```javascript
db.products.updateMany(
  { tags: "tech" },           // Filter: có tag "tech"
  { $inc: { stock: 5 } }      // Increment stock by 5
);
```

**Update operators:**
- `$inc`: Increment/decrement value
- `$set`: Set value
- `$unset`: Remove field
- `$push`: Add to array
- `$pull`: Remove from array

**Kết quả:** 6 sản phẩm được update (có tag "tech")

### 4. DELETE - Xóa sản phẩm stock = 0 ✅

```javascript
db.products.deleteMany({ stock: 0 });
```

**Kết quả:** Xóa 2 sản phẩm
- Mechanical Keyboard (stock: 0)
- Gaming Mouse (stock: 0)

**Final count:** 8 sản phẩm còn lại

## Cài Đặt & Chạy

### Option 1: Docker Compose (Khuyến nghị)

#### Bước 1: Cấu hình Environment Variables

Tạo file `.env`:

```env
# MongoDB Configuration
MONGO_PORT=27017
MONGO_USER=admin
MONGO_PASSWORD=password123

# Mongo Express Configuration
MONGO_EXPRESS_PORT=8082
MONGO_EXPRESS_USER=admin
MONGO_EXPRESS_PASSWORD=admin123
```

#### Bước 2: Khởi động Docker

```powershell
cd DB_03
docker-compose up -d
```

Kiểm tra containers:
```powershell
docker ps
```

Bạn sẽ thấy:
- `mongo-container`: MongoDB database (port 27017)
- `mongo-express-container`: Web UI (port 8082)

#### Bước 3: Chạy MongoDB Script

**Cách 1: Qua MongoDB Shell trong container**

```powershell
# Copy file vào container
docker cp products_crud.js mongo-container:/tmp/

# Chạy script với mongosh
docker exec -it mongo-container mongosh -u admin -p password123 --authenticationDatabase admin /tmp/products_crud.js
```

**Cách 2: Qua Mongo Express Web UI**

1. Truy cập: http://localhost:8082
2. Login: `admin` / `admin123`
3. Tạo database: `product_management`
4. Paste code từ `products_crud.js` vào Mongosh tab
5. Click Execute

**Cách 3: Qua MongoDB Compass (Desktop App)**

1. Download: https://www.mongodb.com/try/download/compass
2. Connection string: `mongodb://admin:password123@localhost:27017`
3. Tạo database `product_management`
4. Chạy script trong Mongosh tab

#### Bước 4: Verify Results

```powershell
# Connect to MongoDB shell
docker exec -it mongo-container mongosh -u admin -p password123 --authenticationDatabase admin

# Inside mongosh:
use product_management
db.products.countDocuments()  # Should return 8 (after delete)
db.products.find().pretty()   # View all products
```

### Option 2: MongoDB Atlas (Cloud - Free Tier)

1. Đăng ký: https://www.mongodb.com/cloud/atlas/register
2. Tạo free M0 cluster
3. Tạo database user
4. Whitelist IP (0.0.0.0/0 cho test)
5. Get connection string
6. Connect với mongosh hoặc Compass

## MongoDB Operations Reference

### Comparison Operators

| Operator | Ý Nghĩa | Ví Dụ |
|----------|---------|-------|
| `$eq` | Equal (=) | `{ price: { $eq: 100 } }` |
| `$ne` | Not equal (!=) | `{ category: { $ne: "electronics" } }` |
| `$gt` | Greater than (>) | `{ price: { $gt: 1000 } }` |
| `$gte` | Greater than or equal (>=) | `{ price: { $gte: 1000 } }` |
| `$lt` | Less than (<) | `{ stock: { $lt: 50 } }` |
| `$lte` | Less than or equal (<=) | `{ stock: { $lte: 50 } }` |
| `$in` | In array | `{ category: { $in: ["electronics", "accessories"] } }` |
| `$nin` | Not in array | `{ category: { $nin: ["furniture"] } }` |

### Logical Operators

```javascript
// $and
db.products.find({
  $and: [
    { price: { $gte: 1000 } },
    { category: "electronics" }
  ]
});

// $or
db.products.find({
  $or: [
    { price: { $lt: 100 } },
    { stock: { $lt: 10 } }
  ]
});

// $not
db.products.find({
  price: { $not: { $gt: 2000 } }
});
```

### Array Operators

```javascript
// $all - Array chứa tất cả elements
db.products.find({
  tags: { $all: ["laptop", "tech"] }
});

// $elemMatch - Element trong array match điều kiện
db.products.find({
  tags: { $elemMatch: { $eq: "tech" } }
});

// $size - Array có size cụ thể
db.products.find({
  tags: { $size: 3 }
});
```

### Update Operators

```javascript
// $set - Set field value
db.products.updateOne(
  { name: "iPhone 15 Pro" },
  { $set: { price: 1400 } }
);

// $inc - Increment value
db.products.updateMany(
  { category: "electronics" },
  { $inc: { stock: 10 } }
);

// $mul - Multiply value
db.products.updateMany(
  {},
  { $mul: { price: 1.1 } }  // Tăng giá 10%
);

// $unset - Remove field
db.products.updateMany(
  {},
  { $unset: { discount: "" } }
);

// $push - Add to array
db.products.updateOne(
  { name: "iPhone 15 Pro" },
  { $push: { tags: "5G" } }
);

// $pull - Remove from array
db.products.updateOne(
  { name: "iPhone 15 Pro" },
  { $pull: { tags: "old" } }
);

// $addToSet - Add unique to array
db.products.updateOne(
  { name: "iPhone 15 Pro" },
  { $addToSet: { tags: "premium" } }
);
```

## Aggregation Framework

### Basic Aggregation

```javascript
// Group by category
db.products.aggregate([
  {
    $group: {
      _id: "$category",
      count: { $sum: 1 },
      avgPrice: { $avg: "$price" },
      totalStock: { $sum: "$stock" }
    }
  }
]);

// Match -> Sort -> Limit
db.products.aggregate([
  { $match: { category: "electronics" } },
  { $sort: { price: -1 } },
  { $limit: 3 }
]);

// Project with computed fields
db.products.aggregate([
  {
    $project: {
      name: 1,
      price: 1,
      inventory_value: { $multiply: ["$price", "$stock"] }
    }
  }
]);
```

## Indexing

### Create Indexes

```javascript
// Single field index
db.products.createIndex({ price: 1 });  // 1: ascending, -1: descending

// Compound index
db.products.createIndex({ category: 1, price: 1 });

// Text index for search
db.products.createIndex({ name: "text", tags: "text" });

// Unique index
db.products.createIndex({ email: 1 }, { unique: true });
```

### View Indexes

```javascript
db.products.getIndexes();
```

### Query Performance

```javascript
// Explain query execution
db.products.find({ price: { $gt: 1000 } }).explain("executionStats");
```

## Validation Schema

```javascript
db.createCollection("products", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "price", "category"],
      properties: {
        name: { 
          bsonType: "string",
          description: "Product name is required"
        },
        price: { 
          bsonType: ["double", "int"],
          minimum: 0,
          description: "Price must be a positive number"
        },
        category: { 
          bsonType: "string",
          enum: ["electronics", "accessories", "furniture"],
          description: "Category must be valid"
        },
        stock: { 
          bsonType: "int",
          minimum: 0,
          description: "Stock cannot be negative"
        }
      }
    }
  }
});
```

## So Sánh MongoDB vs SQL

| MongoDB | SQL | Mô Tả |
|---------|-----|-------|
| Database | Database | Database |
| Collection | Table | Nhóm documents/rows |
| Document | Row | Đơn vị dữ liệu |
| Field | Column | Thuộc tính |
| `insertOne()` | `INSERT` | Thêm dữ liệu |
| `find()` | `SELECT` | Truy vấn |
| `updateOne()` | `UPDATE` | Cập nhật |
| `deleteOne()` | `DELETE` | Xóa |
| Embedded Document | JOIN | Quan hệ dữ liệu |
| `$lookup` | JOIN | Nối bảng |

### Query Comparison

**SQL:**
```sql
SELECT name, price 
FROM products 
WHERE price >= 1000 AND price <= 2000;
```

**MongoDB:**
```javascript
db.products.find(
  { price: { $gte: 1000, $lte: 2000 } },
  { name: 1, price: 1, _id: 0 }
);
```

## Troubleshooting

### Lỗi thường gặp

**1. Connection refused**
```
Error: connect ECONNREFUSED 127.0.0.1:27017
```
**Fix:** Kiểm tra MongoDB đã chạy chưa
```powershell
docker ps
docker-compose up -d mongodb
```

**2. Authentication failed**
```
MongoServerError: Authentication failed
```
**Fix:** Kiểm tra username/password trong `.env`

**3. Database không tồn tại**
```
> use product_management
> db.products.countDocuments()
0
```
**Fix:** Chạy lại script `products_crud.js`

## Output Mong Đợi

Sau khi chạy script `products_crud.js`, bạn sẽ thấy:

```
✅ Inserted 10 products successfully!

📊 QUERY 2a: Products with price between 1000-2000
================================================
[5 products displayed]

📊 QUERY 2b: Products in category 'electronics'
================================================
[5 products displayed]

📊 QUERY 2c: Show only name + price (Projection)
================================================
[10 products with name + price only]

📊 QUERY 2d: Products with rating.avg > 4.2
================================================
[7 products displayed]

🔄 UPDATE: Increase stock by 5 for products with 'tech' tag
================================================================
Matched: 6
Modified: 6

🗑️  DELETE: Remove products with stock = 0
================================================
Deleted count: 2

Remaining products count: 8

📊 SUMMARY
================================================
Total products: 8
Total inventory value: $xxx,xxx

✅ All operations completed successfully!
```

## Bài Tập Mở Rộng

### Level 1: Basic
1. Thêm field `discount` cho sản phẩm
2. Tìm sản phẩm có `stock > 50`
3. Update giá tất cả sản phẩm +10%
4. Đếm số sản phẩm mỗi category

### Level 2: Intermediate
5. Tìm sản phẩm có tag "tech" VÀ giá < 2000
6. Tính tổng giá trị inventory (price * stock)
7. Tìm TOP 3 sản phẩm rating cao nhất
8. Group by category, tính avg price và total stock

### Level 3: Advanced
9. Thêm collection `orders` với reference đến products
10. Implement text search trong name và tags
11. Tạo compound index cho (category, price)
12. Aggregation pipeline: Match -> Group -> Sort -> Project

## Kiến Thức Đã Vận Dụng ✅

- ✅ **CRUD Operations**: insertMany, find, updateMany, deleteMany
- ✅ **Query Operators**: $gte, $lte, $gt, $eq
- ✅ **Projection**: Include/Exclude fields
- ✅ **Nested Fields**: Dot notation (rating.avg)
- ✅ **Array Queries**: tags field với array values
- ✅ **Update Operators**: $inc để tăng stock
- ✅ **Aggregation**: Group, Sort, Match
- ✅ **Indexing**: Single, Compound, Text indexes
- ✅ **Validation**: Schema validation với $jsonSchema

## Tài Liệu Tham Khảo

- 📚 MongoDB Manual: https://docs.mongodb.com/manual/
- 📚 CRUD Operations: https://docs.mongodb.com/manual/crud/
- 📚 Query Operators: https://docs.mongodb.com/manual/reference/operator/query/
- 📚 Aggregation: https://docs.mongodb.com/manual/aggregation/
- 📚 Indexes: https://docs.mongodb.com/manual/indexes/
- 📚 MongoDB University: https://university.mongodb.com/

---

**Tác giả:** Bài tập DB_03 - MongoDB CRUD Operations  
**Ngày:** December 2025  
**Version:** 1.0
