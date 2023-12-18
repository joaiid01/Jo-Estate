import React from 'react';
import {FaSearch} from 'react-icons/fa';
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <header className="bg-slate-200 shadow-md">
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3' >
           <Link to="/"><h1 className='font-bold text-sm sm:text-xl flex flex-wrap'> 
                <span className='text-slate-500'>Jo</span>
                <span className='text-slate-700'>Estate</span>

            </h1></Link>
            <form className='rounded-lg bg-slate-100 flex items-center p-3 '>
                <input className='focus:outline-none bg-transparent w-24 sm:w-64 ' type="text"  placeholder='Search...' ></input>
                <FaSearch className='text-slate-300  '></FaSearch>
            </form> 
            <ul className='flex gap-4 ' >
               <Link to="/"><li className='hidden sm:inline  text-slate-700 hover:underline'>Home</li></Link> 
               <Link to="/About"><li className='hidden sm:inline  text-slate-700 hover:underline'>About</li></Link> 
               <Link to="/SignUp"><li className=' text-slate-700 hover:underline'>SignUp</li></Link> 
            </ul>
        </div>
    </header>
  )
}
