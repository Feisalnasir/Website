import mongoose from "mongoose";


export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://feisalbare82:LmWMKOJSKsgmuatf@cluster0.9sfa4ep.mongodb.net/FOOD_DELIVERY3').then(()=>console.log("DB connected"));
}