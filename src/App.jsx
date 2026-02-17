import { useState } from 'react'


import './App.css'
import Button_loader from './components/Loaders/Button/Button_loader'
import Menu from './components/Loaders/Menu/Menu'
import About_us from './pages/AboutUS/About_us'
import Navbar from './components/Navbar/Navbar'
import { Route, Router, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home/Home'
import Footer from './components/footer/footer'
import Card from './pages/Card/Card'
import Collection from './pages/Collection/Collection'
import ContactUS from './pages/contactus/ContactUS'
import Detils from './components/Product_Detils/Detils'
import AuthPages from './pages/AuthPages/AuthPages'
import CheckoutPage from './pages/Payment/Payment'
import UserProfile from './components/profile/Profile'



function App() {
  const [count, setCount] = useState(0)

  const isadminpath=useLocation().pathname.includes("admin")
  const isAbout=useLocation().pathname.includes('about')
 
  
  return (
    <div className='app absolute w-full min-h-screen'>
     

     {isadminpath ? " ":<Navbar/>}
     <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/about' element={<About_us/>}/>
           <Route path='/collections' element={<Collection/>}/>
           <Route  path='/contact' element={<ContactUS/>}/>
           <Route  path='/cart' element={<Card/>}/>
           <Route path='/detils/:id' element={<Detils/>}/> 
           <Route path='/checkout' element={<CheckoutPage/>}/> 
     </Routes>

    {isadminpath ? " ":<Footer/>}

    </div>

  )
}

export default App
