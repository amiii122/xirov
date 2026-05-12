const express=require("express")
const upload=require("../config/Multer-configration")
const {AddProduct}=require("../controllers/ProductController")

const router=express.Router()

// router.get("/",(req,res)=>{
//     res.send("owner working")
// });


router.post('/setproduct',upload.array('array',3),AddProduct)



module.exports=router