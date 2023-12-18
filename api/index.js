import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import UserRoute from "../api/route/user.route.js"

dotenv.config();

mongoose.connect(process.env.MONGO)
.then(() => {
  console.log('Connected to MongoDB ');
})
.catch((error) => {
  console.error('Error connecting to MongoDB ', error);
});
const app=express();

app.use("/api/user" ,UserRoute)



app.listen(3000,()=>{
    console.log("server is running on port 3000");
})
