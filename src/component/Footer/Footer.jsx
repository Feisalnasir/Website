import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
    <div className="footer-content">
    <div className="footer-content-left">
    <img src={assets.logo1} alt="" />
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
    <div className="footer-social-icons">
        <img src={assets.facebook_icons} alt="" />
        <img src={assets.twitter_icon} alt="" />
        <img src={assets.linkedin_icon} alt="" />
        </div>
        </div> 
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privancy policy</li>
            </ul>
    </div> 
        <div className="footer-content-right">
         <h2>GET IN TOUCH</h2>
         <ul>
            <li>+91-730-384-7532</li>
            <li>contact@delivey.com</li>
         </ul>
</div>
</div>
<hr/>
<p className="footer-copyrigh">copyright 2025 @ Delivery.com - All Right Reserved.</p>
</div>
  )
}

export default Footer