import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../Context/StoreContext';



const Navbar = ({setShowLogin}) => {
    const [menu,setMenu]=useState("menu");
   // const{getTotalCartAmount}=useContext(StoreContext);
    const{getTotalCartAmount,token,setToken}=useContext(StoreContext);

    const navigate=useNavigate();

    const logout=()=>{
    
      localStorage.removeItem("token");
     setToken("");
      //navigate("/")
    }
  return (
    <div className='navbar'>
   <Link to='/'> <img src={assets.logo1} alt="" className="logo1" /></Link>
    <ul className="navbar-menu"> 
       <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</Link> 
       <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</a> 
       <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</a> 
       <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>contact us</a>  
    </ul>
    <div className="navbar-right">
        <img src={assets.iconics} alt="" width="40px" height="20px"/> 
    <div className="navbar-search_icon"> 
       <Link to='/cart'> <img src={assets.basket_icon} alt="" width="40px" height="20px"/> </Link>
    <div className={getTotalCartAmount()===0?"":"dot"}></div>
    
    </div>
    
   {!token?<button onClick={()=>setShowLogin(true)}>Sign in</button>
    :<div className='navbar-profile'>
      <img src={assets.ali_icon} alt="" />
      <ul className="nav-profile-dropdown">
        <li onClick={()=>navigate('/myorders')}><img src={assets.bali_icon} alt=""  /><p>Orders</p></li>
        <hr/>
        <li onClick={logout}><img src={assets.cali_icon} alt="" /><p>Logout</p></li>
      </ul>
      </div>}
    </div>

    </div>
  )

}
export default Navbar