const jwt = require("jsonwebtoken");
const SecretKey = require("../Secret/Key");

const verifyToken = (req, res, next) => {

    const { token } = req.headers;
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).send("err --->", err);
        }
        res.user = decoded
        next();
    });
}


module.exports = verifyToken;