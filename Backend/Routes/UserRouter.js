const express=require("express")
const router=express.Router()
const {register,Login}=require('../controllers/AuthUser')

router.get("/",(req,res)=>{
    res.send("User working")
});

router.post("/register",register)
router.post("/login",Login)

module.exports=router