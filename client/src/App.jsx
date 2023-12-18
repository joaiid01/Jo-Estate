import React from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp.jsx";
import Header from './components/Header.jsx';

export default function App() {
  return (<BrowserRouter>
 <Header/>
  <Routes>
    <Route path='/' element= {<Home/>}/>
    <Route path='/About' element= {<About/>}/>
    <Route path='/SignIn' element= {<SignIn/>}/>
    <Route path='/SignUp' element= {<SignUp/>}/>
    <Route path='/Profile' element= {<Profile/>}/>
    </Routes>
    </BrowserRouter>
    
  )
}
