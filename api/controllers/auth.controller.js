import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken"


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

export const signin= async (req,res,next)=>{
    const {email,password}=req.body;
    try{
     const validUser= await User.findOne({email:email})
        if(!validUser)return next(errorHandler(404,"user not found"))
      const validPassword=bcryptjs.compareSync(password,validUser.password)
          if(!validPassword)return next(errorHandler(401,"invalid ceredintial"))
         
  const token=jwt.sign({id:validUser._id},process.env.JWT)
  const {password:pass, ...rest}=validUser._doc;
  res.cookie('access_token',token,{httpOnly:true}).status(200).json(rest)
      }
      catch(error){
  
        next(errorHandler(550,"error from handler"));
      }
  }