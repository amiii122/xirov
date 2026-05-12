const mongoose=require("mongoose")

const OwnerSchema=mongoose.Schema({

   fullname:String,
   email:String,
   password:String,
   contact:Number,
   picture:String,
  Products:{
    type:Array,
    default:[]
  },
})

module.exports=mongoose.model("Owner",OwnerSchema);