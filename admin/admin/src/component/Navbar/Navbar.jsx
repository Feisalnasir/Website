import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img className='logo1' src={assets.logo1} alt="" />
        <img className='profile_image' src={assets.profile_image} alt=""  width="60" height="40"/> 
    </div>
  )
}

export default Navbar