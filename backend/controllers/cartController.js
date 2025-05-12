import userModel from "../models/UserModel.js"


//add items to user cart
const addToCart=async(req,res)=>{
    try {
       // let userData=await userModel.findOne({_id:req.body.userId});
    //   let userData=await userModel.findById(req.body.userId);
        // let userData=await userModel.findById(req.userId);
         const userData=await userModel.findById(req.userId);

        //let cartData = await userData.cartData;
        let cartData =  userData.cartData || {}; 
        const itemId=req.body.itemId; 
        if(!cartData[itemId]) 
        {
             cartData[itemId] = 1; 
        }
             else{
                cartData[itemId] += 1;
            }
            await userModel.findByIdAndUpdate(req.userId, {cartData});
            res.json({success: true, message: "Added To Cart"}); 
        
    } catch (error) {
     console.log(error);  
     res.json({success: false, message: "Error"}) 
    }

}
//remove items from user cart
const removeFromCart=async(req,res)=>{
    try {
        //let userData=await userModel.findById(req.userId)
        const userData=await userModel.findById(req.userId)
        //let cartData = await userData.cartData;
        const cartData = userData.cartData || {};

        const itemId=req.body.itemId;
        if (cartData[itemId]>0) {
            cartData[itemId] -= 1;
        }
         await userModel.findByIdAndUpdate(req.userId, {cartData});
          res.json({success:true,message:"Removed From Cart"})
    } catch (error) {
       console.log(error);
       res.json({success:false,message:"Error"})
         
    }


}
// fetch user cart data
const getCart=async(req,res)=>{
   try {
    const userData = await userModel.findById(req.userId);
    const cartData = userData.cartData || {};
    res.json({success: true, cartData})
   } catch (error) {
    console.log(error);
    res.json({success:false,message:"Error"})
   } 

}

export{addToCart,removeFromCart,getCart}