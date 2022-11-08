const express = require('express');
const User = require('../models/User');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Question = require('../models/Question');

//creating a get route to recieve the value of solved questions to
// /api/user/solvedquestion
router.post('/solvedquestion', fetchuser, async (req, res) => {
    try {
        userId = req.user.id;
        const user = await User.findById(userId).select("-password");
        res.send(user.practiceset);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('internal server error');
    }
})

module.exports = router;