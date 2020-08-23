import React,{useState,useRef ,useEffect} from 'react';
import NavBar from './navbar.js';
import Footer from './footer.js';
import Profile from './profile.js';
import Man from './Man.js';
import './App.css';

import {BrowserRouter as Router,Route,Link} from 'react-router-dom';


export default function App() {
 
 return (
    <>

   <NavBar />
  <Router>

<Link to="">Todo</Link>
<Link to="/profile">Profile</Link>


  <div className="container">

<Route exact path="/" component={Man}></Route>
<Route path="/profile" component={Profile}></Route>

   
</div>
</Router>

  <Footer />
  </>
  )
}


