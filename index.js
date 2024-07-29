const express = require('express');
const httpServer = express();
const bodyParser = require('body-parser');
const { initialize_mongo_connectivity } = require('./database/connection');

require('dotenv').config();
httpServer.use(bodyParser.json());

httpServer.use("/mentors", require('./modules/mentors/mentors.controller'))

var HOSTNAME = process.env.NODE_ENV === "PRODUCTION" ? process.env.RENDER_HOST_NAME : 'localhost';
var PORT = 3000;

httpServer.listen(PORT, HOSTNAME , () => {
    console.log("Server is running on port 3000");
    initialize_mongo_connectivity();
})