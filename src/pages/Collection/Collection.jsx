import React from 'react'
import Product from '../../components/product/Product'
import { useAppContext } from '../../Context/AppContext'

const Collection = () => {
  const {data}=useAppContext()
  
  
  return (
    <div className='mb-15 mt-4 px-12'>
       <section>
        <div className="w-full flex items-center justify-center flex-col h-[44vh]" >
          <h1 className="text-[54px] font-bold text-[#532e10]">Collections</h1>
          <p className='text-13'>Home/<span className='font-semibold text-[#7e3805]'>Collections</span></p>
        </div>
       </section>
       <section>
        <div className='flex  justify-evenly flex-wrap' >
           {
            data.map((ele,index)=>(
                  <Product key={index} data={ele}/>
            ))
           }
        </div>

       </section>
    </div>
  )
}

export default Collection