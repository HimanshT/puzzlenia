const mongoose = require('mongoose');

//creating a question schema

const QuestionSchema = mongoose.Schema({
    question: String,
    answer: String,
});

const Question = mongoose.model('Question', QuestionSchema);
module.exports = Question;