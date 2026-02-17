import React, { createContext, useContext, useEffect, useState } from 'react'
import Card from '../pages/Card/Card';
import { useNavigate } from 'react-router-dom';
import { assets, ProdustsData } from '../assets/assets';

export const AppContext=createContext();
export const ContextProvider=({children})=>{
    const [data,setdata]=useState([])
    const [arr,setarr]=useState([])
    const [search,setsearch]=useState(false)
    const [cartitems,setcartitems]=useState({})
    const navigate=useNavigate()
function Fech_data() {
    setdata(ProdustsData)
}

function Additem(itemid) {
    let copyobj=structuredClone(cartitems)
    if (copyobj[itemid]) {
        copyobj[itemid].quality+=1
    }else{
        copyobj[itemid]={quality:1}
    }
    setcartitems(copyobj)
}
function Remoitem(itemid) {
    let copyobj=structuredClone(cartitems)
    if (copyobj[itemid]) {
        copyobj[itemid].quality-=1
    }if (copyobj[itemid].quality===0) {
        delete copyobj[itemid]
    } 
   setcartitems(copyobj)
}
function  GetTotalCost() {
    let totalcost=0
    let Entries=Object.entries(cartitems)
    console.log(Entries);
    
    Entries.forEach(ele=>{
        let Indivadual_product=data.find((element)=>{

              element._id===ele
        } )
        if (Indivadual_product) {
              totalcost=Indivadual_product.offer_Price*cartitems[ele]
        }
       
    })

    return totalcost; 
}
function viewitem() {
 arr.forEach(ele => {
     console.log('ele',ele);
 });
for (const key in cart) {
   console.log(cart[key]);
}
}
function GettotalCount() {
    let total=0;
    for (const item in cartitems) {
        total+=cartitems[item].quality
    }
    return total;
}

function removeitem(id) {
    delete cartitems[id]
}
// useEffect(()=>{
//     Fech_data();
// },[])

const values={removeitem,GettotalCount,Fech_data,navigate,data,search,setsearch,cartitems,Additem,Remoitem,GetTotalCost,viewitem}
return <AppContext.Provider value={values}>
          {children}
        </AppContext.Provider>
}
export const useAppContext=()=>{
    return useContext(AppContext)
}