const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const msgSchema = new Schema({
    destname: {
            type:String,
            required:true
    },
    destloc: {
        type: String,
        required:true
    },
    destdesc: {
        type:String,
        
    },
    url:{
        type:String,
        required:true
    }
},{timestamps:true});

const Message = mongoose.model('Message',msgSchema);
module.exports = Message;