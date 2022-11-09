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

//a put request to update and add the new solved question to the database
//Put request to /api/user/addsolvedquestion
router.put('/addsolvedquestion', fetchuser, async (req, res) => {
    const { questionid } = req.body;
    userId = req.user.id;
    const user = await User.findById(userId);
    const question = await Question.findById(questionid);
    user.practiceset.push(question);
    user.save();
    res.send(user.practiceset);
})

//route to find the user and return it by username,a post request to /api/user/finduser
router.post('/finduser', fetchuser, async (req, res) => {
    const { username } = req.body;
    const user = await User.find({ username: username })
    if (user.length)
        res.send(user[0]);
    else
        res.send({});
})

//route to follow a user and return the updated user,a put request to /api/user/follow
router.put('/follow', fetchuser, async (req, res) => {
    //the person whom we have to follow
    const { username } = req.body;
    const value = await User.updateOne(
        {
            username: username
        }, { $inc: { followers: 1 } });

    const user1 = await User.find({ username: username })
    // res.send(user1);
    //the person who will be following
    userId = req.user.id;
    const user2 = await User.findById(userId)
    user2.following.push(user1[0]);
    await user2.save();
    res.send(user2);
})


module.exports = router;