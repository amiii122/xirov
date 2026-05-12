const mongoose=require("mongoose")

// You have to import the  url in env file

mongoose.connect(process.env.Moongo_URL).then(()=>console.log("connected"));
module.exports=mongoose.connection;