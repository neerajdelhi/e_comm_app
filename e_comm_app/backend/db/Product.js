const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    name:String,
    price:String,
    category:String,
    customerId: String,
    company: String
});

const Product = mongoose.model('products',ProductSchema);

module.exports = Product;