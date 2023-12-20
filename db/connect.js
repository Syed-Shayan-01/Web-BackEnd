const mongoose = require('mongoose')
mongoose.connect(`mongodb+srv://${process.env.DATABASE_NAME}:${process.env.DATABASE_PASSWORD}@cluster0.olutjd9.mongodb.net/?retryWrites=true&w=majority`);
console.log('database connected');

module.exports = mongoose;
