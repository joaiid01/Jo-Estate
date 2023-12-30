import React from 'react'
import  { GoogleAuthProvider,getAuth, signInWithPopup }  from'firebase/auth'
import { app } from '../firebase'
import {useNavigate} from 'react-router-dom';
import {useDispatch } from 'react-redux';
import { signInSuccess} from '../redux/user/userSlice';

export default function OAuth() {
    const dispatch=useDispatch();
    const navigate=useNavigate();

const handleGoogleClick=async ()=>{
try{
 const provider= new GoogleAuthProvider()
 const auth =getAuth(app)
 const result= await signInWithPopup(auth,provider)
 console.log(result);
 const res= await fetch('aip/auth/google',
 {
    method:'POST',
    headers:{
      'Content-Typ':'application/json'  
    },
    body:JSON.stringify({name:result.user.displayName, email:result.user.email, photo:result.user.photoURL})
 }
 )

 const data =res.json();
 dispatch(signInSuccess(data));
 navigate("/")
}
catch(error){
console.log("could not sign in to google",error)

}


}


  return (
    <button  type= "button"   onClick={handleGoogleClick} className='bg-red-700 p-3 text-white rounded-lg uppercase hover: opacity-95'>continue with google</button>
  )
}
