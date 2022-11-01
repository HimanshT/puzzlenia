const mongoose = require('mongoose');
const questions = require('./questions');
const Question = require('../models/Question');

mongoose.connect('mongodb://localhost:27017/puzzlenia',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

const db = mongoose.connection;
db.on("error", console.error.bind(console, ("connection error")));
db.once("open", () => {
    console.log("database connected");
});

//adding question from the questions file to our database

const seedDb = async () => {
    //delete previous saved question
    await Question.deleteMany({});
    for (let i = 0; i < 10; i++) {
        const q = new Question({
            question: `${questions[i].question}`,
            answer: `${questions[i].answer}`
        })
        await q.save();
    }
}

//function to close the connection afterwards
seedDb().then(() => {
    mongoose.connection.close();
});