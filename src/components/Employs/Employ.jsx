import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './index.css'
const Employ = ({obj}) => {
  console.log(obj);
  
  return (
    <div className='border border-gray-300 Employ shadow-md shadow-gray-400 w-[15vw] h-[34vh] overflow-hidden bg-white  rounded'>
        <div className='image w-full h-[34vh] bg-gray-300'>

        </div>
        <div className='Detils w-full h-[12vh] text-center pt-2 '>
             <h1 className='capitelize text-[12px] font-semibold'>{obj.name}</h1>
             <p className='text-[11px]  border-b border-gray-300 mx-12'>{obj.designation}</p>
             <ul className='Social_media flex   items-center justify-center pt-2 gap-3'>
              <li className='Accounts'><Link to={"www.google.com"}></Link></li>
              <li className='Accounts'><Link to={"www.google.com"}></Link></li>
              <li className='Accounts'><Link to={"www.google.com"}></Link></li>
             </ul>
             <div>
              
         </div>
        </div>
        
    </div>
  )
}

export default Employ 