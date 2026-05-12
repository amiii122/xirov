
const UserModel=require("../models/User_modle")
const bcrypt=require("bcrypt")
const {Json_web_token}=require("../utils/JWT_genrator")


module.exports.register= async function(req,res){
     const {name,email,password}=req.body
  
    
   const isregister= await UserModel.findOne({email})
  
   try {
    
    if (isregister){  
        res.json({success:false,message:"User Already Exist"})
    }

    bcrypt.genSalt(10,(error,salt)=>{

       if (error) res.json("somthing wrong")

        bcrypt.hash(password,salt,async (error,hash)=>{
            const user=await UserModel.create({
            name,
            email,
            password:hash
            })
            const token=Json_web_token(user)
            res.cookie('token',token,{
             httpOnly:true,
             secure:process.env.NODE_ENV==="production" ,
             samesite:process.env.NODE_ENV==="production" ? 'none' :'strict',
             maxAge: 7*24*60*60*1000,
           })
           console.log("added secssfuly")
           return res.json({success:true,user:{email:user.email,Name:user.name}})
          })

          

})
     
   } catch (error) {
    res.send(error.message)
   }

}

module.exports.Login= async function (req,res) {
    const {email,password}=req.body;
   
      
    try {
        const user=await UserModel.findOne({email})
        if (!user) res.json({success:false,message:"Email or password incorrect"})
            if (password) {
                bcrypt.compare(password,user.password,(error,result)=>{
                    if (result) { 
                       let token=Json_web_token(user);
                         res.cookie('token',token,{
                         httpOnly:true,
                         secure:process.env.NODE_ENV==="production" ,
                         samesite:process.env.NODE_ENV==="production" ? 'none' :'strict',
                         maxAge: 7*24*60*60*1000,
                         });
                          console.log("doned")
                         res.json({success:true,user:{email:user.email,name:user.name}})
                        
                    }else{
                        res.json({success:false,message:"Email or password incorrect"})
                    }
                })
            }
        
    } catch (error) {
        res.send(error.message)
    }
}


// Logout ___?
module.exports.Logout=async function (req,res){

}