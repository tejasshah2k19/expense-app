const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const userRoutes = require("./api-user-routes")
const adminRoutes = require("./api-admin-routes")

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({
    allowedHeaders: "*"
}))

app.use("/api/admin",adminRoutes)
app.use("/api/users",userRoutes)

app.listen(3000,function(){
    console.log("Server Started On 3000");
})
 

mongoose.connect("mongodb://localhost:27017/mydb",{useNewUrlParser:true})
var db = mongoose.connection 
if(db){
    console.log("dbStarted");
}else{
    console.log("checkDbconfig---ErrorFound--");
}










