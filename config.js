const mongoose = require('mongoose');

const dbconnect = ()=>{
    mongoose.set('strictQuery', true);
    mongoose
    //COSMOS AZURE
    .connect('mongodb+srv://test:123Tamarindo@test-soriana.mongocluster.cosmos.azure.com/?tls=true&authMechanism=SCRAM-SHA-256&retrywrites=false&maxIdleTimeMS=120000')
    //MONGO ATLAS
    //.connect('mongodb+srv://test:test@cluster0.uaamn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .catch (error => console.log(error));
}

module.exports = dbconnect;