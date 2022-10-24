const express = require('express')
const app = express()
const connectToMongo = require('./db');
const port = 5000

app.use(express.json());

connectToMongo();

app.use('/api/auth', require('./routes/auth'));

app.listen(port, () => {
    console.log('server connected');
})