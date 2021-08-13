const mongoose = require('mongoose')


var currencyTypeSchema = mongoose.Schema({
    currency:{
        type:String,
        required:true 
    }
})

module.exports = mongoose.model("currencyType",currencyTypeSchema)