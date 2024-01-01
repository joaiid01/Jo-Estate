import React from 'react'
import {useSelector} from 'react-redux'
export default function Profile() {
  const {currentUser}=useSelector(state=>state.user)

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='font-semibold text-3xl text-center my-7'>profile</h1>
   <form className='flex flex-col gap-4'>  
   <img className='self-center  rounded-full heigth-24 width-24 object-cover cursor-pointer mt-2' src={currentUser.avatar} alt='profile'/>
   <input type='text' placeholder='username' id='username' className='border p-3 rounded-lg'  />
   <input type='text' placeholder='email' id='email' className='border p-3 rounded-lg'  />
   <input type='text' placeholder='password' id='password' className='border p-3 rounded-lg'  />

   <button className='bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disable-opacity-80'>update</button>
      </form>
   <div className='flex mt-5 justify-between'>
    <span className='text-red-700 cursor-pointer'>Delete account</span>
    <span className='text-red-700 cursor-pointer'>Sign out</span>
   </div>
    </div>
  )
}
