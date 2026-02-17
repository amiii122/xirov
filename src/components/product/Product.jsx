import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import "./index.css"
import {useAppContext} from '../../Context/AppContext'

const Product = ({data}) => {
  const {navigate,cartitems,Additem,Remoitem}=useAppContext()
  const [count,setcount]=useState(1)

     const {_id,name,price,Image}=data;
  return (

    <div onClick={()=>navigate(`./detils/${_id}`)} className="Product_card flex items-center justify-center p-6">
      <div className="border border-gray-300  bg-white w-65 rounded-2xl shadow-lg p-4"
      >
        {/* Image */}
        <div className="rounded-xl overflow-hidden">
          <img
            src={Image}
            alt="Product"
            className="w-full h-70 object-cover"
          />
        </div>

        {/* Content */}
        <div className="mt-4">
          <h2 className="text-sm font-semibold uppercase tracking-wide">
           {name}
          </h2>

          <p className="text-gray-500 text-sm mt-1">Heather Rise</p>

          <p className="text-md font-bold mt-2"> <span className='text-lg'>Rs</span> {price}</p>

          {/* Button */}

          {
             !cartitems[_id] ? ( <button onClick={(e)=>{
             e.stopPropagation()
              Additem(_id)}} className="w-full mt-4 border border-black text-black  font-medium py-2 rounded-full hover:bg-[rgb(126,79,41)] hover:text-white hover:border-none transition">
            Add to cart
          </button>):(<div
             className="w-full mt-4 border border-black text-black  font-medium py-2 rounded-full
               hover:bg-[rgb(126,79,41)] hover:text-white hover:border-none transition
                 flex items-center justify-evenly
               " 
             >
               <button onClick={(e)=>{
                e.stopPropagation()
                Remoitem(_id)}}>-</button>
               <p>{cartitems[_id].quality}</p>
               <button onClick={(e)=>{
                e.stopPropagation()
                Additem(_id)}}>+</button>
             </div>)

          }
         
           
        </div>
      </div>
    </div>


  )
}

export default Product