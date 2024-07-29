const mongoose = require('mongoose');
const URI = process.env.NODE_ENV === "DEVELOPMENT" ? "mongodb://localhost:27017/" : process.env.PROD_DB_URL ;

async function initialize_mongo_connectivity(){
    console.log("Mongo db connection initialized");
    try{
        await mongoose.connect(URI , {
            dbName : process.env.PROD_DB_NAME
        })
        console.log('MongoDB connect success!');
    }catch(err){
        console.log(err);
    }
}

module.exports={
    initialize_mongo_connectivity
}