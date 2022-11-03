const express = require('express');
const Question = require('../models/Question');
const router = express.Router();

//creating a new get request to display the questions at /api/question/getquestionset
router.get('/getquestionset', async (req, res) => {
    const questions = await Question.find({});
    res.send(questions);
})

module.exports = router;