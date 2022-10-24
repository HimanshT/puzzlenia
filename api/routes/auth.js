const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
// const fetchuser = require('../middleware/fetchuser')
const JWT_SECRET = "puzzlenia";

//creating a new user using POST:"/api/auth/createUser"
router.post('/createUser', [
    body('name', 'Enter a username of atleast 5 characters').isLength({ min: 5 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be atleast 8 characters').isLength({ min: 8 }),
], async (req, res) => {
    //if there are errors return the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    //check if the user with same email exits
    let user = await User.findOne({ email: req.body.email })
    if (user) {
        return res.status(400).json({ error: "A user with same email already exits" });
    }
    //create a user
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);
    user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass
    })
    const data = {
        user: {
            id: user.id
        }
    }
    //creating a token for authorization
    const authToken = jwt.sign(data, JWT_SECRET);
    res.json(authToken);
})

// Login a user Post request:/api/auth/loginUser

router.post('/loginUser', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').exists(),
], async (req, res) => {
    //if there are any errors return bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    //compare email and password
    const { email, password } = req.body;
    let user = await User.findOne({ email });
    if (!user) {
        return res.status(400).json({ error: "Invalid Credentials" });
    }
    //if the user is found check the passsword
    const passswordCompare = await bcrypt.compare(password, user.password);
    if (!passswordCompare) {
        return res.status(400).json({ error: "Invalid Credentials" });
    }

    const data = {
        user: {
            id: user.id
        }
    }

    const authToken = jwt.sign(data, JWT_SECRET);
    res.json({ authToken });
})

module.exports = router;