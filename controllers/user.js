const bcrypt = require('bcrypt');
const User = require('../models/user');


// Register
const register = async (req, res) => {
    console.log(req.body);
    const { email, password } = req.body

    const findUser = await User.findOne({ email: email })
    if (!findUser) {
        const hashPassword = await bcrypt.hash(password, 10);

        User.create({
            email,
            password: hashPassword,
            role: 'user'
        })
            .then(() => {
                console.log('User created successfully');
                res.status(201).json({ status: true, message: 'User Registration Success' })
            })
            .catch((error) => {
                console.log('Error in Registration', error);
                res.status(400).json({ status: false, message: 'Error in Registration' })
            })
    } else {
        res.status(400).json({ status: false, message: 'User already exist' })
    }
}

// Login
const login = async (req, res) => {
    console.log(req.body);
    const { email, password } = req.body;

    const findUser = await User.findOne({ email: email });

    if (!findUser) {
        return res.status(400).json({ status: false, message: 'Invalid Email or Password' });
    }

    const verifyPassword = await bcrypt.compare(password, findUser.password);

    if (!verifyPassword) {
        return res.status(400).json({ status: false, message: 'Invalid Email or Password' });
    } else {
        const { _id, email, role } = findUser;
        const userDetails = { _id, email, role }
        console.log('userrrr===>', userDetails);
        res.status(200).json({ status: true, message: 'Login Success', userDetails })
    }
}
module.exports = { register, login };