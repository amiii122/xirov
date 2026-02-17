import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import './index.css'
import App from './App.jsx'
import Text from './Text.jsx'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import { ContextProvider } from './Context/AppContext.jsx'
createRoot(document.getElementById('root')).render(
 <BrowserRouter>
 <ContextProvider>
    <App/>
    {/* <Text/> */}
 </ContextProvider>
 </BrowserRouter>


)
