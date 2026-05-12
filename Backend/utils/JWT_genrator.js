const jwt=require("jsonwebtoken")

module.exports.Json_web_token=function (user) {

    return jwt.sign({email:user.email,id:user._id},"Amiraasdad")
}