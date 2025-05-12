import express from "express";
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/UserRoute.js";
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";


//App config

const app = express();
const port = 3000;

//middleware
app.use(express.json())
app.use(cors())

//db connection
connectDB();

//api endpoint
app.use("/api/food",foodRouter)
app.use('/uploads', express.static('uploads'));
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)


app.get("/", (req, res)=>{
     res.send("API Working")
     })
     app.listen(port,()=>{
        console.log(`server started on http://localhost:${port}`)
     })

     //mongodb+srv://feisal:16867632@cluster0.yhk8a9v.mongodb.net/?
     //'mongodb+srv://Breatstack:7303847532@cluster0.288wyeq.mongodb.net/
     //mongodb+srv://feisalbare82:FSU57Pmjz6IAcW9o@cluster0.mkkztoj.mongodb.net/?
     //mongodb+srv://feisalbare82:LmWMKOJSKsgmuatf@cluster0.9sfa4ep.mongodb.net/?