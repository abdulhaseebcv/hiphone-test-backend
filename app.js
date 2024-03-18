const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const userRouter = require('./routes/user');
const productRouter = require('./routes/product');
const path = require('path');

const app = express();


app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/user', userRouter);
app.use('/product', productRouter);

// MongoDB connection
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('MongoDB Connection Success'))
    .catch((error) => console.log('MongoDB Connection Error', error))



const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server running at ${PORT}`));