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
            default:"https://pixabay.com/vectors/blank-profile-picture-mystery-man-973460/"
        }
    
   
   } ,{timestamps:true})

   const User=  Mongoose.model("User",UserSchema);

   export default User;