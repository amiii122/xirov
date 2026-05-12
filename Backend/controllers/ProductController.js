const streamifier = require("streamifier");
const   cloudinary= require("../config/Cloudnary");
const ProductModel=require("../models/Product_model")

const uploadFromBuffer = (buffer) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: "products" },
      (error, result) => {
        if (error) return reject(error);
        resolve(result);
      }
    );

    streamifier.createReadStream(buffer).pipe(stream);
  });
};

module.exports.AddProduct = async function (req, res) {
    
  const {name,catagory,fabric,R_price,Offer_price,Stock,discription,color,sizes}=req.body

  try {
    const imageUrls = [];

    for (const file of req.files) {
      const result = await uploadFromBuffer(file.buffer);

      imageUrls.push(result.secure_url);
    }
    
    const product=await ProductModel.create({
     name,
     catagory,
     fabric,
     R_price,
     Offer_price,
     Stock,
     discription,
     color,
     sizes,
     Images:imageUrls
    })
    return res.json({success:true,Message:"Product Added successfuly!"})
  } catch (error) {
    return res.json({success:false,Message:"somthing is goaging wrong"})
  }
};

module.exports.ReciveAllProduct=async function (req,res) {
  try{
    const products=await ProductModel.find()
    return res.json({success:true,products})
  }catch(error){
    return res.json({success:false,Message:"Somthing is wrong !"})
  }
}

module.exports.IndevadualProduct=async function (req,res) {
  try{
  const productid=req.params.id;
  const product=ProductModel.findByid(productid)
  
  if(!product){
    return res.json({success:false,Message:"Product Not found"})
  }else{
    return res.json({success:true,product})
  }}catch(error){
    return res.json({success:false,Message:"server error"})
  }
}
