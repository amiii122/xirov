const mongoose=require("mongoose")

const ProductSchema=mongoose.Schema({

   name:String,
   catagory:String,
   fabric:String,
   R_price:Number,
   offer_price:Number,
   Stock:Number,
   discriptIon:String,
   color:String,
   sizes:String,
   Images:{
           type:Array,
           default:[]
          }

})

module.exports=mongoose.model("Prodects",ProductSchema)
