import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";



export const signUp= async (req,res,next)=>{
  try{
   
      
       console.log(req.body);
        const hashPassword= bcryptjs.hashSync(req.body.password,10);
        const newUser=  new User({username:req.body.username,email:req.body.email,password:hashPassword});  
        const saveUser=await newUser.save();
        res.status(200).json(saveUser);

    }
    catch(error){

      next(error);
    }
}

