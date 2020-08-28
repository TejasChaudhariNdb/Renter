import React,{useState,useRef ,useEffect} from 'react';
import './App.css';
import base from './base'
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Login from './Login.js'
import Register from './Register';
import Dashboard from './dash/Dashboard';
import Home from './Home';

export default function App() {

  const [firebaseinit,setFirebaseinit] = useState(false);

useEffect(() => {

base.isInitalized().then(val =>{
  setFirebaseinit(val);
})

})
  
 return firebaseinit !== false ? (
    <>
    <Router>
<Switch>
  <Route exact path="/" component={Home}></Route>
  <Route exact path="/login" component={Login}></Route>
  <Route exact path="/register" component={Register}></Route>
  <Route exact path="/Dashboard" component={Dashboard}></Route>
  <Route path="*"> <Dashboard/> </Route>
       


</Switch>

    </Router>

  </>
  ):<div>Loading.....</div>
}


