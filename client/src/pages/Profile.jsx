import React from 'react'
import { useRef ,useState,useEffect} from 'react'
import {useSelector} from 'react-redux'
import{getDownloadURL, getStorage,ref, uploadBytesResumable}from'firebase/storage'
import { app } from '../firebase.js'
export default function Profile() {
  const {currentUser}=useSelector(state=>state.user)
   const fileRef=useRef(null);
   const[file,setfile]=useState(undefined);
   const[filePerc,setfilePerc]=useState(0);
   const[fileUploadError,setfileUploadError]=useState(false)
   const[formData,setformData]=useState({})
  
   useEffect(()=>{
    if(file){
      handleFileUpload();
    }},[file]
   );
const handleFileUpload=()=>{

  const storage =getStorage(app);
  const fileName= new Date().getTime()+file.name;
  const storageRef= ref(storage,fileName);
  const  uploadTask=uploadBytesResumable(storageRef,file);
  uploadTask.on('state_changed',
  (snapshot)=>{

    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    setfilePerc(Math.round(progress));
    
  },(error)=>{
    setfileUploadError(true);
    
  },
  ()=>{
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      setformData({ ...formData, avatar: downloadURL });
    });
    
  }
  )

};



  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='font-semibold text-3xl text-center my-7'>profile</h1>
   <form className='flex flex-col gap-4'>  
   <input  onChange={(e)=>setfile(e.target.files[0])} type='file' ref={fileRef} accept='image/*' hidden/>
   <img onClick={()=>fileRef.current.click()} className='self-center  rounded-full h-24 w-24 object-cover cursor-pointer mt-2' src={formData.avatar||currentUser.avater} alt='profile'/>
   <p className='self-center text-sm'>{fileUploadError?<span className='text-red-700'>file upload error</span>:filePerc>0&&filePerc<100? <span className='text-slate-700'>Image must be less than 2mb{filePerc}%</span>:filePerc==100?<span className='text-green-700'>Image uploaded successfully</span>:<span></span>}</p>
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
