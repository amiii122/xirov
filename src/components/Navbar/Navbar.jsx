import React from 'react'
import './index.css'
import { NavLink } from 'react-router-dom'
import { assets } from '../../assets/assets'
import { useAppContext } from '../../Context/AppContext'

const Navbar = () => {
   const {GettotalCount}=useAppContext()

  return (
  <nav className='top-0 z-99 w-full h-18 order-b  bg-gradient-to-r from-[#371901] to-[#81512b] bg-to-[rgb(126,79,41)] border-b text-white flex items-center justify-between  px-12 '>
            <NavLink  className='logo w-16 relative h-16 '  to={"/"}>
               <img className='w-full  h-full ' src={assets.logo} alt="logo" />
            </NavLink> 
         <div className='middle' >
             <ul className='flex items-center gap-9'>
                <li className='font-semibold'  > <NavLink  className={" font-[500]"} to={"/about"}>
                       About us
                   </NavLink></li>
                <li>
                     <NavLink  className={" font-[500]"} to={'/collections'}  >
                          Collections
                   </NavLink>
                   
                </li>
                <li>
                   <NavLink  className={" font-[500]"} to={'/contact'} >
                        Contact us
                   </NavLink>
                </li>
             </ul>
         </div>
         <div className='Right h-full  flex items-center justify-between gap-3  '>
          
              {/* <NavLink onClick={()=>setsearch(!search)}  className='w-7  h-7 '  to={"/"}>
                    <img className='w-full  h-full ' src={assets.search_fill} alt="search" />
               </NavLink> */}
                 <div className="hidden lg:flex items-center text-sm gap-1 border border-gray-300 px-1 xl:px-3 rounded-full ">
                    <input 
                  //   onChange={(e)=>setsearchqure(e.target.value)} 
                    className="py-1.5 w-full bg-transparent outline-none placeholder-gray-200" type="text" placeholder="Search products" />
                   
                    <img  className='w-3 h-3 cursor-pointer' src={assets.search_fill} alt="search icon" />
                 </div>
               <NavLink  className='w-8  h-8  '  to={"/cart"}>
               <div className='relative'>
                  <p className='absolute px-[5px] top-[11px]  right-[7px] text-[11px] rounded-full bg-[#371901]'>{GettotalCount()}</p>
                   <img className=' w-full  h-full ' src={assets.shop_card} alt="card" />
               </div>
                  
               </NavLink>
               <NavLink  className='w-7  h-7  '  to={"/"}>
                   <img className='w-full  h-full ' src={assets.profile} alt="user" />
               </NavLink>
         </div>  
  </nav>
  )
}

export default Navbar