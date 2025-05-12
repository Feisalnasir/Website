import React, { useState } from 'react'
import Navbar from './component/Navbar'
import { Route, Routes } from 'react-router-dom'
//import { BrowserRouter as Routes, Route } from 'react-router-dom'
import Home from './assets/pages/Home/Home'
import Cart from './assets/pages/Cart/Cart'
import PlaceOrder from './assets/pages/PlaceOrder/PlaceOrder'
import Footer from './component/Footer/Footer'
import LoginPopUp from './component/LoginPopUp/LoginPopUp'
import Verify from './assets/pages/Verify/Verify'
import MyOrders from './assets/pages/myOrders/MyOrders'

const App = () => {
  const[showLogin,setShowLogin]=useState(false)
  return (
    <>
    {showLogin?<LoginPopUp setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
    <Route path='/' element={<Home/>} /> 
    <Route path='/cart' element={<Cart/>} /> 
    <Route path='/order' element={<PlaceOrder/>}/>
    <Route path='/verify' element={<Verify/>}/>
    <Route path='/myorders' element ={<MyOrders/>}/>
      
    </Routes>
    </div>
    <Footer/>
    </>
    
  )
}

export default App