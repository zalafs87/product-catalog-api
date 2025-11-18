# Product Catalog API

A simple Node.js + Express project that provides product data through three API endpoints and serves a frontend HTML page for displaying products. This project demonstrates basic REST API development, routing, JSON handling, and frontend API fetching.

## Project Structure

product_catalog_api/
├─ server.js
├─ package.json
├─ .gitignore
├─ README.md
└─ public/
└─ index.html

markdown
Copy code

## API Endpoints

### GET /products
Returns all products.

### GET /products/categories
Returns all unique product categories.

### GET /products/instock
Returns only products that are in stock.

## Frontend (index.html)

The frontend displays:
- A "Load Products" button  
- Product cards fetched from `/products`  
- Basic layout & styling  

Access it at:  
**http://localhost:3000**

## Technologies Used
- Node.js  
- Express.js  
- HTML + CSS  
- JavaScript (Fetch API)

## How to Run Locally

### 1. Clone the Repository
git clone https://github.com/zalafs87/product-catalog-api

shell
Copy code

### 2. Install Dependencies
npm install

shell
Copy code

### 3. Start the Server
node server.js

bash
Copy code

### 4. Test in Browser
- http://localhost:3000/products  
- http://localhost:3000/products/categories  
- http://localhost:3000/products/instock  
- http://localhost:3000 (frontend)

## GitHub Repository
https://github.com/zalafs87/product-catalog-api

## Author
**Zalaf PK**