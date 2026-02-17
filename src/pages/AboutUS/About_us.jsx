import React from 'react'
import './index.css'
import Employ from '../../components/Employs/Employ'
import { assets } from '../../assets/assets'
import { feactures } from '../../assets/assets'
import {Employes} from '../../assets/assets'
const About_us = () => {
  return (
    <div className='About_Us bg-gray-100  '>
        <div className=''>
           {/* First Page */}
            <div className='page_1 overflow-hidden  text-[#7e3805] w-full   h-[70vh]  flex items-center justify-center flex-col '>
               {/* <img className='absolute w-full h-full object-cover ' src={assets.About_1} alt="#" /> */}
               {/* <h2 className='heading'>About Us</h2>
               <p>XIROV is built for confidence and self-expression. Our shirts combine premium fabrics, comfort, and modern design,so your style speaks before you do.</p> */}
            </div>
            {/* Feactures Sec */}
           <div className='Feactures w-full h-screen  flex items-end px-3'>
                 <div className='w-full h-[57vh] bg-gray-300  flex mx-3 shadow-md shadow-gray-300'>
                  <div className='relative h-full w-[47%] bg-red-300'>
                     <img className='absolute w-full h-full object-cover' src={assets.About_2} alt="#" />
                  </div>
                  <div className='Feactures_Content h-full w-[54%] bg-white  p-3  flex flex-col justify-center items-center '>
                    <h3 className='uppercase font-semibold text-[28px] '>Why choose us</h3>
                      <ul className='flex gap-x-10 items-center justify-center flex-wrap pt-12 w-full h-full'>
                        {
                        feactures.map((ele,index)=>(
                           <li key={index} className='w-[22vw]  h-[12vh]  flex items-center border-r-2 border-yellow-400 '>
                           <div>
                            <h2 className='text-[43px] text-yellow-400'>0{index+1}</h2>
                           </div>
                           <div className=' px-4 '>
                            <h5 className='text-[12px] font-bold uppercase py-1 '>{ele.heading}</h5>
                            <p className='text-[9.5px] font-semibold'>{ele.subheading}</p>
                           </div>
                        </li>
                        ))
                        } 
                      </ul>
                  </div>
                 </div>
           </div>
           {/* Team Section */}
           <div className='w-full h-[63vh]   relative'>
            <div className='text-center py-8'>
                  <h2 className='uppercase text-[22px] font-[600] border-x-2 border-yellow-500 px-4 inline'>Meet our team</h2>
                   <p className='text-[12px] capitalize font-semibold'>we are the best team</p>
            </div>
           <div className='flex items-start justify-between px-7'>
            {
               Employes.map((ele ,index)=>(
                     <Employ key={index} obj={ele}/>
               ))
            }
           </div>
           </div>
        </div>
        <div className='sec-1  rounded overflow-hidden absolute left-[20vw] flex top-[55vh]  w-[56%] h-[60vh] bg-white'>
              <div className='left w-[50%] h-full  px-8  py-8  flex flex-col items-center gap-3 '>
                <h2 className='uppercase  ' >WHO WE ARE </h2>
                <p className='text-[12px] '>We are a brand created from real customer feedback. After listening to people’s experiences with poor fabric quality, incorrect sizing, uncomfortable fitting, and color issues, we decided to build shirts that truly meet expectations.</p>
                <h3 className='uppercase text-[14px] font-bold  pt-12' >"Soran Fuhr,dough art amint"</h3>
                <p className='text-[12px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit excepturi, quae, libero accusantium nulla qui iste rerum, accusamus maxime veritatis perferendis assumenda aliquam ratione deserunt inventore sapiente.</p>
              </div>
              <div className='relative  w-[50%] h-full'>
                            <img className='absolute w-full h-full object-cover' src={assets.About_3} alt="" />
              </div>
        </div>
    </div>
     
  )
}

export default About_us