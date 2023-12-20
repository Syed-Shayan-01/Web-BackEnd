const express = require('express');
const authRouter = require('./routes/auth');
const env = require('dotenv').config()
const app = express();
const jwt = require('jsonwebtoken');
const mongoose = require('./db/connect');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')
const verifyToken = require('./middleware/verify');
const cors = require('cors')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(bodyParser.json());
app.use(cors())

app.get("/", verifyToken, (req, res) => {
    res.send('Shayan')
})
app.use('/auth', authRouter);
app.listen(3001);