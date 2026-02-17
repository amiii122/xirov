import React from 'react'
import './style.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <footer className=' relative footer overflow-hidden flex items-center text-white justify-between'>
      <div className='w-80 h-full px-6  flex flex-col  justify-center gap-4 '>
        <h1 className='text-[62px] font-semibold'>XIROV</h1>
        <p className=' text-[12px] tracking-[.4px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur vitae minus assumenda enim! Quasi sunt est dolor molestias quis reiciendis sit velit in? Aperiam, adipisci?</p>
        <div className='flex items-center gap-4'>
            <img className='w-8 h-8 object-cover' src={assets.insta} alt="" />
            <img className='w-8 h-8 object-cover' src={assets.Tiktok} alt="" />
            <img className='w-8 h-8 object-cover' src={assets.Facebook} alt="" />
        </div>
        <p className='absolute  text-[10px] top-85 '>All copyrights reserved@XIROV 2025</p>
      </div>
      <div className='w-85  h-full  flex items-center justify-evenly '>
        <div className=' capitalize'>
          <h2 className='uppercase font-semibold text-[16px] pb-3'>cataloge</h2>
          <div className='text-[12px] flex flex-col gap-1 '>
          <p >Wintum</p>
          <p>summer</p>
          <p>spring</p>
          <p>Autum</p>
            </div>
        </div>
        <div>
          <h2 className='uppercase font-semibold text-[16px] pb-2'>About</h2>
          <div className='text-[12px] flex flex-col gap-1  capitalize'>
           <p>shoping method</p>
          <p>user Agrement</p>
          <p>Refundable item</p>
          <p>security</p>
          </div>
         
        </div>
       
      </div>
      
    </footer>    
  )
}
 
export default Footer   