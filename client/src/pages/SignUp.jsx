
import React, { useState } from 'react';
import {Link ,useNavigate} from 'react-router-dom';
import AOuth from "../components/OAuth";
export default function SignUp() {
  const [formData,setFormData]=useState({});
 const [Loading,setLoading]=useState(false);
 const [error,setError]=useState(null);
const navigate=useNavigate();
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
  setLoading(true);
  const res= await fetch('/api/auth/signUp', 
  {
    method:"POST",
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(formData)
  }
  
  );
  console.log(JSON.stringify(formData));

  const data=await res.json();
  if(data.success===false){
    setError(data.statusMessage)
    setLoading(false)
    return;
    
  }
 
  setLoading(false);
  setError(null);
  navigate("/SignIn");
}

catch(error){
  setLoading(false)
  setError(error)

}

};

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-center text-3xl font-semibold my-7'>sign up</h1>
      <form  onSubmit={handlSubmit} className='flex flex-col gap-4'>
        <input className='border  p-3 rounded-lg' type='text' placeholder='username' id='username'  onChange={handleChange}></input>
        <input className='border  p-3 rounded-lg' type='email' placeholder='email' id='email' onChange={handleChange}></input>
        <input className='border  p-3 rounded-lg' type='password' placeholder='password' id='password' onChange={handleChange}></input>
        <button  disabled={Loading} className=' bg-slate-700 text-white  p-3 rounded uppercase hover:opacity-95 disabled:opacity-80' >{Loading?"Loading...":"Sign Up"}</button>
     <AOuth/>
      </form>
      
      <div className='flex gap-2 mt-5'>
        <p>Have an account?</p>
<Link to={"/signin"}>
        <span className='text-blue-700'>sign in</span>
        </Link>
      </div>
      {error&&<p className='text-red-500 mt-5'>{error}</p>}
    </div>
  )
}
