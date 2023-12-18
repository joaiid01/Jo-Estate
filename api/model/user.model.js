import  Mongoose  from "mongoose";

const UserSchema=new  Mongoose.Schema({

    username:{
        type:String,
        require:true,
        unique:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
    
    },
   } ,{timestamps:true})

   const User=  Mongoose.model("User",UserSchema);

   export default User;