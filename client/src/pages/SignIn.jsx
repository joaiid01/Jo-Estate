
import React, { useState } from 'react';
import {Link ,useNavigate} from 'react-router-dom';
import {useDispatch ,useSelector} from 'react-redux';
import { signInStart,signInSuccess,signInFailure } from '../redux/user/userSlice';
import OAuth from '../components/OAuth';
export default function SignIn() {
  const [formData,setFormData]=useState({});
 const {Loading,error}=useSelector((state)=>state.user)
const navigate=useNavigate();
const dispatch=useDispatch();
  const handleChange=(e)=>{

    setFormData(
      {
        ...formData,
        [e.target.id]:e.target.value
      }
    );
   
  };

const handlSubmit= async(e)=>{
e.preventDefault();
try{
  dispatch(signInStart());
  const res= await fetch('/api/auth/signin', 
  {
    method:"POST",
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(formData)
  }
  
  );
  console.log(JSON.stringify(formData));

  const data=await res.json();
  if(data.success===false){
    dispatch(signInFailure(data.statusMessage));
    return;
    
  }
 
  dispatch(signInSuccess(data));
  navigate("/");
}

catch(error){
  dispatch(signInFailure(error));

}

};

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-center text-3xl font-semibold my-7'>Sign In</h1>
      <form  onSubmit={handlSubmit} className='flex flex-col gap-4'>
        <input className='border  p-3 rounded-lg' type='email' placeholder='email' id='email' onChange={handleChange}></input>
        <input className='border  p-3 rounded-lg' type='password' placeholder='password' id='password' onChange={handleChange}></input>
        <button  disabled={Loading} className=' bg-slate-700 text-white  p-3 rounded uppercase hover:opacity-95 disabled:opacity-80' >{Loading?"Loading...":"Sign In"}</button>
     <OAuth/>
      </form>
    
      <div className='flex gap-2 mt-5'>
        <p>Dont have an account?</p>
<Link to={"/signup"}>
        <span className='text-blue-700'>sign up</span>
        </Link>
      </div>
      {error&&<p className='text-red-500 mt-5'>{error}</p>}
    </div>
  )
}
