const mongoose = require('mongoose');// <password> -> our password it stays inside env 
const connectDB = (url) =>{
    mongoose.connect(url,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology:true,
})//returns promise
}

module.exports = connectDB