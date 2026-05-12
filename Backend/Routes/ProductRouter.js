const express=require("express")
const router=express.Router()
const {AddProduct, ReciveAllProduct, IndevadualProduct}=require("../controllers/ProductController");
const upload = require("../config/Multer-configration");

router.get("/",(req,res)=>{
    res.send("Product working")
});

router.post("/Add",upload.array("images",4),AddProduct)
router.get("/allproduct",ReciveAllProduct)
router.get("/:id",IndevadualProduct)
module.exports=router