import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoutes.js"
import orderRouter from "./routes/orderRoute.js"


import path from "path";

// serve frontend static files
app.use(express.static(path.resolve('frontend/build')));

// fallback for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.resolve('frontend/build/index.html'));
});










// app config
const app=express()
const port= process.env.PORT || 4000;

// middleware 
app.use(express.json())
app.use(cors())

// DB connection 
connectDB();

// api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)



app.get("/",(req,res)=>{
    res.send("API WORKING")

})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})

