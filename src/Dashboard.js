import React from 'react'
import NavBar from './navbar.js';
import Footer from './footer.js';
import Profile from './profile.js';
import Man from './Man.js';
import Contact from './contact.js';
import Shop from './Shop.js'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import base from './base.js';


export default function Dashboard(props) {
    if(!base.getCurrentUserName()){
        alert("Login");
        props.history.replace('/Login')
        return null;
    }
   
   return (
<>        
  
  
<NavBar />
  <Router>

<div className="nav_link">
<Link to="/shop" className="route_link">Shop</Link>
<Link to="/profile" className="route_link">Profile</Link>
<Link to="/man" className="route_link">Todo</Link>
<Link to="/contact" className="route_link">Contact</Link>
{/* <Link to="" className="route_link">Contact</Link> */}
</div>

<button className="btn log_out" onClick={logout}>Logout</button>
Nasmste {base.getCurrentUserName()}

  <div className="container">


<Route  path="/contact" component={Contact}></Route>
<Route path="/profile" component={Profile}></Route>
<Route path="/man" component={Man}></Route>
<Route path="/shop" component={Shop}></Route>

   
</div>
</Router>

  <Footer />
   </>
    )

  async function logout(){
await base.logout();
props.history.replace('/login')
  }

}
