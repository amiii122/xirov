 require("dotenv").config();
const  express=require('express')
const mongoose=require('./config/mongoose-connection')
const  cors=require("cors")
const OwnerRouter=require("./Routes/OwnerRote")
const ProductRouter=require("./Routes/ProductRouter")
const UserRouter=require("./Routes/UserRouter")
const cookieParser = require('cookie-parser')
                 


const AllowOrign=["http://localhost:5173"]



const app=express()
const port=process.env.PORT||8080;


app.use(express.json())
app.use(cookieParser())
app.use(cors({origin:AllowOrign,credentials:true}));
app.get("/",(req,res)=>{
    res.send("Home page")

})

// ****   Routers   ******

app.use("/owner",OwnerRouter)
app.use("/product",ProductRouter)
app.use("/user",UserRouter)


app.listen(port,()=>{
    console.log("Server is runing at port number :",port);
   
})