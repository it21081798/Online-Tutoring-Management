const mongoose = require('mongoose');

const classRegSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    language:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('ClassReg',classRegSchema);