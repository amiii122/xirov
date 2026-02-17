import React from 'react'
import { assets } from '../../assets/assets';
import './index.css'
const Template = (param) => {
  const {h,w,src,text,font,sub,dis="block"}=param
  
  
  
  return (
    <div style={{
      width:`${w}vw`,
      height:`${h}vh`
      
    }} className={`template   flex flex-col  px-3`}>
        <div className={`Image_sec rounded-lg relative w-full h-[90%] overflow-hidden  flex justify-start `}>
          <img className='absolute w-full h-full object-cover' src={src} alt="#" />
            <div className='absolute z-9 bottom-6 w-[60%] '>
          <p style={{
              fontSize:`${font}px`
            }} className={` text-white ml-6 font-normal capitalize  `}>{text}</p>
        </div>
        </div>
        <p style={{fontSize:`${sub}px`,display:`${dis}`}} className='sub_content text-black flex capitalize pt-3 m-0 '>
          {`suits(business and wails) `} 
            <span className='px-2 text-gray-400 '>|</span>
            {`Tuxedots `}
             <span className='px-2 text-gray-400'>|</span>
             {`waiscoats`}
        </p>
           
    </div>

  )
  
}

export default Template 