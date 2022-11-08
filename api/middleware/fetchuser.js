var jwt = require('jsonwebtoken');
const JWT_SECRET = "puzzlenia";

//middleware to fetch the user from the token stored in localStorage
const fetchuser = (req, res, next) => {
    //receive the token from the header
    const token = req.header('auth-token');
    if (!token) {
        res.status(401).send({ error: "Invalid Token" })
    }
    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;
        next();
    } catch (err) {
        res.status(401).send({ error: "Invalid Token" })
    }
}

module.exports = fetchuser;