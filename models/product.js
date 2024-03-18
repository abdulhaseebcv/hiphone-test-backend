const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: String,
    price: Number,
    imageURL:String
});

const productModel = mongoose.model("new-product", productSchema);

module.exports = productModel;