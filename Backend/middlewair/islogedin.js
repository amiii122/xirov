const jwt=require("jsonwebtoken")
const UserModel=require("../models/User_modle")
module.exports=async function (req,res,next) {

    const token=req.headers.authorization?.split(" ")[1] 
    if (!token) res.json({sucess:false,message:"User not Authorize"})
        
        try{

        const decode=jwt.verify(token,"Amiraasdad")
         const Finded_user=UserModel.findOne({email:decode.email}).select("-password")
         req.user=Finded_user;
         next();

        }catch(error){
            return res.json({sucess:false,message:"somthing went wrong"})
        }
}