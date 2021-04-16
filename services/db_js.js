const mongoose = require('mongoose');

const connectDB = async () => {
const conn = await mongoose.connect("keys.mongoURI", 
{
useNewUrlParser: true,
useCreateIndex: true,
useFindAndModify: false,
useUnifiedTopology: true
});

};
module.exports = connectDB;