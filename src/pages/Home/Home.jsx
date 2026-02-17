import React, { useEffect, useState } from 'react'
import Template from '../../components/Brand_template/template'
import { assets } from '../../assets/assets'
import './index.css'
import { AppContext, useAppContext } from '../../Context/AppContext'

const Home = () => {
const {search,setsearch,Fech_data}=useAppContext()
useEffect(()=>{
  Fech_data();
},[])
  return (
    <div className=''>
       <div className='relative w-full h-[90vh] bg-gradient-to-r from-[#371901] to-[#81512b]'>
           <div className='Hero_img w-full h-[90vh] '>
            <img className='w-full h-full object-contain' src={assets.Model2} alt="#" />
            <p className='absolute text-[20px] top-[293px] text-white font-normal left-[125px] uppercase'>Autumn / Winter</p>
            <p className='absolute text-[25px] top-[290px] text-white font-normal right-[102px] uppercase'>2026</p>
          </div>  
      </div>
      {/* First colllection */}
      <div className='w-full flex px-8 pt-14 py-3 gap-10'>
          <div className='w-[45%] h-[90vh]  flex items-center justify-start '>
                 <Template h={90} w={100} src={assets.Main_white} font={44} text="Suits & formal wear" sub={13} />
          </div>
          <div className=' w-[50%] h-[80vh] flex flex-col justify-between '>
              <div className='flex  justify-between gap-5'>
                {/* Back */}
                     <Template h={55} w={25} src={assets.Whiteback} text="Back" font={28} sub={12}/>
                {/* Front */}
                      <Template h={55} w={25} src={assets.White_front} text="Front" font={28} sub={12}/>
              </div>
              <div className=''>
                <p className='text-[14px] text-black font-seminormal '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore excepturi quos autem totam earum obcaecati saepe quidem ab atque accusamus illo eius, rem animi dignissimos error repudiandae numquam similique at tempore fuga rerum! Provident, veniam expedita possimus libero maiores officiis rem eligendi officia soluta itaque!</p>
              </div>
          </div>
      </div>
      {/* Second section */}
      <div className='w-full   h-[70vh] flex items-center  justify-evenly  px-12'>
            <div className='w-[45%] h-full flex flex-col  justify-between'>
                <h1 className='text-[48px] text-[rgb(83,46,16)] font-[500] m-2   uppercase leading-none'>Autumn / Winter collection 2026</h1>
                <div className='flex items-center gap-3 relative '>
                 <Template h={52} w={22} src={assets.modelwhite} text="front" font={25} sub={10}/>
                 <Template h={52} w={22} src={assets.modelwhiteback} text="side" font={25} sub={10}/>
                </div>
            </div>
            <div className='w-[45%] h-full  relative flex items-center justify-start mt-6'>
                 <Template h={80} w={44} src={assets.modelwhitefront} font={44} text="Suits & formal wear"  SUB={9}  dis={"none"}/>
          </div>
      </div> 
      {/* Third Section */}
      <div className='w-full flex px-8 pt-14 py-3 gap-10'>
          <div className='w-[45%] h-[90vh]  flex items-center justify-start '>
                 <Template h={90} w={100} src={assets.model3} font={44} text="Suits & formal wear" sub={13} />
          </div>
          <div className=' w-[50%] h-[80vh] flex flex-col justify-between '>
              <div className='flex  justify-between gap-5'>
                     <Template h={62} w={30} src={assets.model3front} text="Tops" font={40} sub={12}/>
                     <Template h={62} w={30} src={assets.model3back} text="Tops" font={25} sub={12}/>
              </div>
              <div className=''>
                <p className='text-[14px] text-black font-seminormal '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore excepturi quos autem totam earum obcaecati saepe quidem ab atque accusamus illo eius, rem animi dignissimos error repudiandae numquam similique at tempore fuga rerum! Provident, veniam expedita possimus libero maiores officiis rem eligendi officia soluta itaque!</p>
              </div>
          </div>
      </div>
      {search && <div className='search  absolute w-full min-h-full bg-[rgba(112,113,113,.8)] top-0 left-0'
      >
        <input className='bg-white w-[55vw] h-[5vh]  top-6 left-[20%] relative p-6 py-6 rounded-full' 
        type="text" name="" placeholder='whats in your mind' id="" />
        <div onClick={()=>setsearch(false)} className='icon absolute top-12 right-8 flex flex-col  '>
         <div></div>
         <div></div>
        </div>
      </div>}
      
     
    </div>
  )
}
  
export default Home