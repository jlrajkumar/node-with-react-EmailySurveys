const mongoose = require('mongoose');
// const config = require('config');
// const db = config.get('mongoURI');
const connectDB = async () => {
const conn = await mongoose.connect("mongodb+srv://jlrsurveys:Logmein1@jlrsurveys.6zsht.mongodb.net/Emaily?retryWrites=true&w=majority", {
useNewUrlParser: true,
useCreateIndex: true,
useFindAndModify: false,
useUnifiedTopology: true
});
//console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
};
module.exports = connectDB;