import bcryptjs from "bcryptjs";
import { errorHandler } from "../util/error.js";
import User from "../model/user.model.js";

export const test= (req,res)=>{
    res.send("hellow from test");
}

export const updateUser= async(req,res,next)=>{

if(req.user.id!==req.params.id) return next(errorHandler(401,"you can only update your account"))
try{
   
    if(req.body.password){
        req.body.password= bcryptjs.hashSync(req.body.password,10);
         }
        const updateduser= await User.findByIdAndUpdate(req.params.id,{$set:{
            username:req.body.username,
            email:req.body.email,
            password:req.body.password,
            avater:req.body.avater
        }},{new:true});
        

        const{password,...rest}=updateduser._doc;
        res.status(200).json(rest);
  
}
catch(error){
    next(error);
}

}