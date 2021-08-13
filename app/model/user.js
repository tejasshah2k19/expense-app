const mongoose = require("mongoose")
const userSchema =  mongoose.Schema({
    firstName:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    role:{
        type:Number,
        enum:[1,2] // 1 is user 2 is admin 
    } ,
    createdAt:
    {
        type:Date,
        default:Date.now 
    } 
});

// userSchema.set("timestamps",true)

module.exports = mongoose.model("user",userSchema)