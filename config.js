const mongoose = require('mongoose');

const dbconnect = ()=>{
    mongoose.set('strictQuery', true);
    mongoose
    .connect('mongodb+srv://test:test@cluster0.uaamn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .catch (error => console.log(error));
}

module.exports = dbconnect;