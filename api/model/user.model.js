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
        avater:{
            type:String,
            default:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
        }
    
   
   } ,{timestamps:true})

   const User=  Mongoose.model("User",UserSchema);

   export default User;