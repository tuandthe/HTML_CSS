
use('product_management');

// Drop collection if exists (for clean testing)
db.products.drop();


// 1. INSERT - 10 Products


db.products.insertMany([
    {
        name: "Laptop Dell XPS 13",
        price: 1800,
        category: "electronics",
        tags: ["laptop", "tech", "portable"],
        stock: 50,
        rating: {
            avg: 4.5,
            count: 120
        }
    },
    {
        name: "iPhone 15 Pro",
        price: 1500,
        category: "electronics",
        tags: ["smartphone", "tech", "apple"],
        stock: 30,
        rating: {
            avg: 4.7,
            count: 250
        }
    },
    {
        name: "Samsung Galaxy S24",
        price: 1200,
        category: "electronics",
        tags: ["smartphone", "tech", "android"],
        stock: 40,
        rating: {
            avg: 4.6,
            count: 180
        }
    },
    {
        name: "MacBook Pro M3",
        price: 2500,
        category: "electronics",
        tags: ["laptop", "tech", "apple", "professional"],
        stock: 25,
        rating: {
            avg: 4.8,
            count: 300
        }
    },
    {
        name: "iPad Pro 12.9",
        price: 1400,
        category: "electronics",
        tags: ["tablet", "tech", "apple"],
        stock: 35,
        rating: {
            avg: 4.6,
            count: 150
        }
    },
    {
        name: "AirPods Pro",
        price: 250,
        category: "accessories",
        tags: ["audio", "tech", "wireless"],
        stock: 100,
        rating: {
            avg: 4.4,
            count: 500
        }
    },
    {
        name: "Sony WH-1000XM5",
        price: 400,
        category: "accessories",
        tags: ["headphones", "audio", "wireless"],
        stock: 60,
        rating: {
            avg: 4.7,
            count: 220
        }
    },
    {
        name: "Mechanical Keyboard",
        price: 150,
        category: "accessories",
        tags: ["keyboard", "gaming", "rgb"],
        stock: 0,
        rating: {
            avg: 4.3,
            count: 80
        }
    },
    {
        name: "Gaming Mouse",
        price: 80,
        category: "accessories",
        tags: ["mouse", "gaming", "wireless"],
        stock: 0,
        rating: {
            avg: 4.2,
            count: 95
        }
    },
    {
        name: "USB-C Hub",
        price: 50,
        category: "accessories",
        tags: ["hub", "connectivity", "portable"],
        stock: 150,
        rating: {
            avg: 4.1,
            count: 60
        }
    }
]);

db.products.find({ price: { $gte: 1000, $lte: 2000 } }).forEach(printjson);
db.products.find({ category: "electronics" }).forEach(printjson);
db.products.find({}, { _id: 0, name: 1, price: 1 }).forEach(printjson);
db.products.find({ "rating.avg": { $gt: 4.2 } }).forEach(printjson);

db.products.updateMany(
    { tags: "tech" },
    { $inc: { stock: 5 } }
);
db.products.deleteMany({ stock: 0 });
// 2. QUERY Operations

db.products.find({
    price: { $gte: 1000, $lte: 2000 }
}).forEach(printjson);

db.products.find({
    category: "electronics"
}).forEach(printjson);

db.products.find(
    {},
    {
        _id: 0,
        name: 1,
        price: 1
    }
).forEach(printjson);


db.products.find({
    "rating.avg": { $gt: 4.2 }
}).forEach(printjson);

// 3. UPDATE Operations

var updateResult = db.products.updateMany(
    { tags: "tech" },
    { $inc: { stock: 5 } }
);

// Show updated products
print("\nUpdated products:");
db.products.find(
    { tags: "tech" },
    { name: 1, stock: 1, tags: 1, _id: 0 }
).forEach(printjson);


// 4. DELETE Operations


var deleteResult = db.products.deleteMany({ stock: 0 });

// Aggregation: Group by category
print("\n1. Products count by category:");
db.products.aggregate([
    {
        $group: {
            _id: "$category",
            count: { $sum: 1 },
            avgPrice: { $avg: "$price" },
            totalStock: { $sum: "$stock" }
        }
    },
    {
        $sort: { count: -1 }
    }
]).forEach(printjson);

db.products.find(
    {},
    { name: 1, "rating.avg": 1, price: 1, _id: 0 }
).sort({ "rating.avg": -1 }).limit(3).forEach(printjson);

// Products with multiple tags

db.products.find({
    $expr: { $gte: [{ $size: "$tags" }, 3] }
}, { name: 1, tags: 1, _id: 0 }).forEach(printjson);

// Text search example (requires text index)
db.products.createIndex({ name: "text", tags: "text" });
print("Search for 'laptop':");
db.products.find(
    { $text: { $search: "laptop" } },
    { name: 1, category: 1, _id: 0 }
).forEach(printjson);


// Performance: Create Indexes


db.products.createIndex({ price: 1 });
db.products.createIndex({ category: 1 });
db.products.createIndex({ "rating.avg": -1 });
db.products.createIndex({ category: 1, price: 1 }); // Compound index

// Show all indexes
db.products.getIndexes().forEach(printjson);


// Summary Statistics



print("Total products: " + db.products.countDocuments());
print("Total inventory value: $" + db.products.aggregate([
    { $group: { _id: null, total: { $sum: { $multiply: ["$price", "$stock"] } } } }
]).toArray()[0].total);

