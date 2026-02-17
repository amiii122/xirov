import React, { useEffect, useState } from 'react'
import {useAppContext } from '../../Context/AppContext'
import './index.css'
import { assets } from '../../assets/assets'
const Card = () => {
const  {data,cartitems,navigate,Additem,Remoitem,GettotalCount,removeitem,GetTotalCost}=useAppContext()
const [selectedItems,setSelectedItems]=useState([])

function handleclick(id) {
  setSelectedItems(prev=>prev.filter(ele=>ele._id!==id))
}

 function getdata() {
 console.log(cartitems);
 
  for (const key in cartitems) {
     let indivadual=data.find(item=>item._id==key)
     setSelectedItems(prev=>[...prev,indivadual])
  }
 }


useEffect(()=>{
  if(cartitems){
    getdata()
  }
},[])
   return (
    <div className='w-full h-[98vh]  text-[#5d3719] bg-gray-100 capitalize'>
        <div className='w-full text-white h-[20%] bg-gradient-to-r from-[#371901] to-[#81512b] bg-to-[rgb(126,79,41) flex flex-col items-center justify-center gap-2 '>
               <p className='text-[32px] font-bold  '>Shoping Cart</p>
               <p className='text-[13px]'>Home / Shoping Cart</p>
        </div>
         <div className='w-full h-[90%]   flex items-center justify-evenly rounded-sm'>
          <div className='w-[60vw] rounded h-[90%] border border-gray-200 bg-white '>
              <div className='w-full text-gray-800 font-semibold h-12 bg-gray-300  flex items-center justify-between px-2'>
              <p>Product</p>
              <div className=' h-full w-[30vw] flex items-center justify-between pr-5 '>
                <p>Price</p>
                <p>Quality</p>
                <p>Subtotal</p>
              </div>
               </div>
                 <div className='w-full h-[40%] p-2 flex flex-col gap-2 '>
                  {/* Product one  */}


                   {
                    selectedItems.map((item ,index)=>(
                      <div key={index} className='w-full h-20  flex border-b border-gray-200'>
                         <div className='w-[50%] h-full flex items-center  gap-3 '>
                            <div onClick={()=>{
                              handleclick(item._id)
                              removeitem(item._id)
                              console.log(cartitems);
                              
                            }} className='w-5 h-5  '>
                              <img className='w-full h-full object-cover cursor-pointer' src={assets.removeIcon} alt="#" />
                            </div>
                            <div className='w-16 h-full bg-red-500'>
                                   <img className='w-full h-full object-cover' src={item.Image} alt="Product img" />
                            </div>
                            <div className='flex flex-col items-start'>
                              <h2 className='capitalize font-semibold '>{item.name}</h2>
                              <p className='text-[11px] text-gray-700 '>color: black |size: XXL</p>
                            </div>

                         </div>
                   <div className='w-[50%]  h-full flex items-center justify-between pr-5 '>
                          <p>Rs : {item.price}</p>
                          <div className='flex items-center justify-center gap-2'>
                          <button  onClick={()=>Remoitem(item._id)} className='px-2 text-[13px] rounded bg-gray-200'>-</button>
                          <p className='' >{cartitems[item._id].quality}</p>
                          <button onClick={()=>Additem(item._id)} className='px-2 text-[13px] rounded bg-gray-200'>+</button>
                         </div>
                         <p>Rs: {item.price*cartitems[item._id].quality}</p>
                   </div>
                      </div>

                    ))
                   }


                 
                 </div> 
                 
          </div> 
         <div className='w-[27vw] h-[75%]  border rounded border-gray-100 bg-white px-4 flex flex-col  gap-3 '>
            <p className='font-bold py-4 border-b border-gray-200 text-gray-800'>Order Summary</p>
            <div className='flex items-center justify-between px-4 border-b border-gray-200 font-semibold'>
              <ul className='text-[13px] text-gray-500 py-4 flex flex-col gap-3 '>
                <li>items</li>
                <li>Sub total</li>
                <li>Shipping</li>
                <li>Taxes</li>
                <li>Coupon Discount</li>
              </ul>
              <ul className='text-[13px] text-gray-500 py-4 flex flex-col gap-3 '>
                <li>{GettotalCount()}</li>
                <li>{GetTotalCost()}</li>
                <li>0.00</li>
                <li>0.00</li>
                <li>0.00</li>
              </ul>
            </div>
             <div className='flex items-center text-gray-800 justify-between py-5 border-b border-gray-200 '>
                      <p className='font-semibold'>Total</p>
                       <p className='text-[15px] font-bold'>$200</p>
              </div>
             <button onClick={()=>navigate("/checkout")} className='process_btn w-full py-3  text-[14px] bg-[#5d3719] text-white '>Procesed to checkout</button>
             
        </div> 
         </div>

    </div>
  ) 
}

export default Card