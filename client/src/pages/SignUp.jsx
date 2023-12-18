
import React from 'react'
import {Link } from 'react-router-dom'
export default function SignUp(){

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-center text-3xl font-semibold my-7'>sign up</h1>
      <form   className='flex flex-col gap-4'>
        <input className='border  p-3 rounded-lg' type='text' placeholder='username' id='username'  ></input>
        <input className='border  p-3 rounded-lg' type='email' placeholder='email' id='email' ></input>
        <input className='border  p-3 rounded-lg' type='password' placeholder='password' id='password' ></input>
        <button  className=' bg-slate-700 text-white  p-3 rounded uppercase hover:opacity-95 disabled:opacity-80' >Sign Up</button>
      </form>
      
      <div className='flex gap-2 mt-5'>
        <p>Have an account?</p>
<Link to={"/signin"}>
        <span className='text-blue-700'>sign in</span>
        </Link>
      </div>
     
    </div>
  )
}
