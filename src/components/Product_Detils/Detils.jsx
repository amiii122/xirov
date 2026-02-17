import React from 'react'
import './index.css'
import { assets } from '../../assets/assets'
const Detils = () => {
  return (
    <div className='w-full h-[100vh] overflow-hidden p-15 flex gap-12'>
        {/* Left Section */}
         <section className='flex gap-8'>
             <div className='w-[10vw] h-[80vh] overflow-hidden flex flex-col items-center gap-10'>
                   <div className='w-full h-[30vh] '>
                           <img className='w-full h-full object-contain' src={assets.White_front} alt="" />
                   </div>
                   <div className='w-full h-[30vh]'>
                           <img className='w-full h-full object-contain' src={assets.White_front} alt="" />
                   </div>
                   <div className='w-full h-[30vh]'>
                           <img className='w-full h-full object-contain' src={assets.White_front} alt="" />
                   </div>
             </div>
             <div className='w-[40vw] h-[80vh] bg-red-400'>
                   <img className='w-full h-full object-cover' src={assets.Main_white} alt="main pic" />
             </div>
         </section>
         {/* Right Section */}
         <section className='flex flex-col gap-7'>
              <div className='Price_sec'>
                <h1 className='text-[30px] '>Black Manima Hoodie</h1>
                <img src="" alt="" />
                <p>Rs 1299<span className='seb'>Rs 1899</span></p>
              </div>
                <p className='text-[14px]'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit omnis eos praesentium, maiores alias itaque architecto modi aperiam eius, voluptatem enim dolores assumenda dolorem, aut officia dolore repellendus nihil commodi iusto! Odit, Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, est?</p>
             <div className='button_sec flex items-center gap-6 '>
               <button className='px-5 py-2 rounded-sm bg-red-700'>Add to cart</button>
               <button className='px-5 py-2 rounded-sm bg-green-800'>View card</button>
               <img src="" alt="" />
             </div>
             <div className='catagory_sec'>
                <ul className='flex flex-col gap-2'>
                    <li className='inline'>
                        <h4 className='inline font-semibold text-5 '>SKU :</h4>
                        <p className='inline text-3 text-gray-800 mx-2'>woo_belt</p>
                    </li>
                    <li className='inline'>
                        <h4 className='inline font-semibold text-4'>Category :</h4>
                        <p className='inline text-3 text-gray-800 mx-2'>Shirt</p>
                    </li>
                    <li className='inline'>
                        <h4 className='inline font-semibold text-4'>Tags :</h4>
                        <p className='inline text-3 text-gray-800 mx-2'>black,wooden,manimal chair</p>
                    </li>
                   
                </ul>
             </div>
         </section>
    </div>
  )
}


export default Detils