import React,{useState,useRef ,useEffect} from 'react';
import NavBar from './navbar.js';
import Footer from './footer.js';
import Profile from './profile.js';
import Man from './Man.js';
import Contact from './contact.js';
import Shop from './Shop.js'
import './App.css';

import {BrowserRouter as Router,Route,Link} from 'react-router-dom';


export default function App() {
 
 return (
    <>

   <NavBar />
  <Router>

<div className="nav_link">
<Link to="/shop" className="route_link">Shop</Link>
<Link to="/profile" className="route_link">Profile</Link>
<Link to="/man" className="route_link">Todo</Link>
<Link to="" className="route_link">Contact</Link>
</div>

  <div className="container">

<Route exact path="/" component={Contact}></Route>
<Route path="/profile" component={Profile}></Route>
<Route path="/man" component={Man}></Route>
<Route path="/shop" component={Shop}></Route>

   
</div>
</Router>

  <Footer />
  </>
  )
}


