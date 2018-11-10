const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PluginSchema = new Schema({
    seller: {
        name: {
            type: String,
            required:true
        },
        siteSellerUrl: {
            type: String,
            required: true
        }        
    },
    creator: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    description : {
        type: String
    },
    tag: {
        type: [String]
    },
    parametres : [{
        control : {
            type : String
        },
        default : {
            type : Number
        },  
        min : {
            type : Number
        },
        max : {
            type : Number
        }
    }]    
})

module.exports = Pligin = mongoose.model('Plugin',PluginSchema);