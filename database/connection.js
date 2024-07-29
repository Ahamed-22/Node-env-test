const mongoose = require('mongoose');

async function initialize_mongo_connectivity(){
    const URI = process.env.NODE_ENV === "DEVELOPMENT" ? "mongodb://localhost:27017/" : process.env.PROD_ENV_URL ;
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