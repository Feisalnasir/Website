import React, { useContext, useState} from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'

const FoodItem = ({id,name,price,description,image}) => {

 const[itemCount,setItemCount]=useState(0)
  const{cartItems,addToCart,removeFromCart,url}=useContext(StoreContext);
  return (
    <div className='food-item'>
     <div className="food-item-img-container">
        <img className='food-item-image' src={url+"/uploads/"+image} alt="" width="250px" height="200px"/>
        {
         !cartItems[id] 
         ?<img className='add' onClick={()=>addToCart(id)} src={assets.icons2}alt=""/>
         :<div className='food-item-counter'>
         <img onClick={()=>removeFromCart(id)} src={assets.icon5} alt=""/>
         {/* <p>{itemCount}</p>  */}
         <p>{cartItems[id]}</p>
         <img  onClick={()=>addToCart(id)} src={assets.icon1} alt=""/>
         </div>
        }
     </div>
     <div className="food-item-info">
     <div className="food-item-name-rating">
        <p>{name}</p>
        <img src={assets.icon4} alt=""  />
        </div> 
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
     </div>
    </div>
  )
}

export default FoodItem