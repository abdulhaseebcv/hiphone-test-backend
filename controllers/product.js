const Product = require('../models/product');


// Create Product
const addProduct = (req, res) => {    
    console.log(req.file.filename);
    const { title, price } = req.body;
    Product.create({
        title,
        price,
        imageURL: req.file.filename
    })
        .then((result) => {
            console.log('Product Added');
            res.status(201).json({ status: true, message: 'Product Added' })
        })
        .catch((error) => {
            console.log('Error in Product Adding', error);
            res.status(400).json({ status: false, message: 'Error in Product Adding' })
        })
}

// Product List
const getProduct = (req, res) => {
    Product.find()
        .then((result) => {
            console.log('Fetch Product Success');
            res.status(201).json({ status: true, result })
        })
        .catch((error) => {
            console.log('Error in Fetching Product', error);
            res.status(400).json({ status: false, message: 'Error in Fetching Product' })
        })
}

module.exports = { addProduct, getProduct };