import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import toursRoute from './routes/toursRoute.js'
import usersRoute from './routes/usersRoute.js'
import authRoute from './routes/authRoute.js'
import reviewRoute from './routes/reviewRoute.js'
import bookingRoute from './routes/bookingRoute.js'

dotenv.config()

const app=express();
const port = process.env.PORT || 8000;

const corsOptions={
    origin:"http://localhost:5173",
    credentials:true,
}

// Connection to db
mongoose.set("strictQuery",false);
const connect = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB database connected successfully ^_^")
    } catch (err) {
        console.log("MongoDB database connection failed")
    }
}

// Middlewares
app.use(express.json());
app.use(cors(corsOptions)); 
app.use(cookieParser());

// Routes
app.use('/api/v1/tours',toursRoute)
app.use('/api/v1/users',usersRoute)
app.use('/api/v1/auth',authRoute)
app.use("/api/v1/review",reviewRoute);
app.use("/api/v1/booking",bookingRoute);

app.get('/',(req,res)=>{
    res.send('Api is working')
})

app.listen(port,()=>{
    connect()
    console.log('Server is listening on port',port)
})