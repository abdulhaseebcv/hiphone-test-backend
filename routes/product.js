const express = require("express");
const router = express.Router();
const multer = require("multer")
const { addProduct, getProduct } = require('../controllers/product');

// Handle File Upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); 
    }
});

const upload = multer({ storage: storage });


router.post('/add',upload.single('file') ,addProduct);
router.get('/', getProduct);


module.exports = router;