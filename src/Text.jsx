import React, { useReducer, useState } from 'react'

const Text = () => {
function reducer(state,action) {
//  console.log(state,action);
 if (action.type==="incre") {
  console.log("Increment",state+=1)
 }if (action.type==="dicre") {
  console.log("decrement",state-=1);
 }
 
}
// const [count ,setcount]=useState(0)
const [count,dispatch]=useReducer(reducer,0)
  return (
    <div className='w-full h-[100vh] bg-red-300 flex items-center justify-center'>
       <div>
            <h1>{count}</h1>
           <button
            onClick={()=>{dispatch({type:"incre"})}}
            className='mx-12'>incre</button>
          <button
          onClick={()=>{dispatch({type:"dicre"})}}
          >decre</button>
       </div>
    </div>
  )
}

export default Text