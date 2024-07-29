const mongoose = require('mongoose')

const mentorSchema = mongoose.Schema({
        name : {
            type : String,
            required : true,
        },
        fieldOfExperience : {
            type : String,
            required : true,
        },
        yearOfExperience : {
            type : Number,
            required : true,
        },
        email : {
            type : String,
            required : true,
        },
        availableStatus : {
            type : String,
            required : true,
        }

},{
    timestamps : true
})


module.exports = mentorSchema;