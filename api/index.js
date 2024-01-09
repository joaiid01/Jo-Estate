import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser"
import UserRoute from "../api/route/user.route.js"
import authRoute from "../api/route/auth.route.js"
import cookieParser from "cookie-parser";
dotenv.config();

mongoose.connect(process.env.MONGO)
.then(() => {
  console.log('Connected to MongoDB ');
})
.catch((error) => {
  console.error('Error connecting to MongoDB ', error);
});
const app=express();
app.use(express.json());
app.use(cookieParser())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use("/api/user" ,UserRoute)
app.use("/api/auth" ,authRoute)
app.use((err,req,res,next)=>{
    const statusCode=err.statusCode ||500;
    const statusMessage=err.message ||"internal server error";
    return res.status(statusCode).json(
      {success:false,
        statusCode,
      statusMessage}
      );
    })


app.listen(3000,()=>{
    console.log("server is running on port 3000");
})
