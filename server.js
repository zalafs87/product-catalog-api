// server.js - Product Catalog API using Express
const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

// Serve static frontend files from /public
app.use(express.static(path.join(__dirname, "public")));

// In-memory product array
const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 45000, inStock: true },
  { id: 2, name: "Smartphone", category: "Electronics", price: 25000, inStock: true },
  { id: 3, name: "Headphones", category: "Accessories", price: 2000, inStock: false },
  { id: 4, name: "Office Chair", category: "Furniture", price: 7000, inStock: true },
  { id: 5, name: "Keyboard", category: "Accessories", price: 1500, inStock: false }
];

// GET /products -> all products
app.get("/products", (req, res) => {
  res.json(products);
});

// GET /products/categories -> unique categories
app.get("/products/categories", (req, res) => {
  const categories = [...new Set(products.map(p => p.category))];
  res.json({ categories });
});

// GET /products/instock -> products with inStock: true
app.get("/products/instock", (req, res) => {
  const inStock = products.filter(p => p.inStock);
  res.json(inStock);
});

// Root route serves index.html (static middleware already covers this)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
