import React,{useState,useRef ,useEffect} from 'react';

import {Link,withRouter} from 'react-router-dom';
import base from './base'


 function Register(props) {

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');


    return (
        <div>
               <input placeholder="Email" type="email" name="email" value={email} onChange={e=> setEmail(e.target.value)}  />
               <input placeholder="Name" type="text" name="name" value={name} onChange={e=> setName(e.target.value)}  />
            <input placeholder="Password" type="password" name="password" value={password} onChange={e=> setPassword(e.target.value) } />
            <button onClick={register}> Register </button>
         <Link to="/login">   <button> Login</button></Link>
        </div>
    )



    async function register(){

        try {
            await base.register(name,email,password);
            props.history.replace("/dashboard") 
        } catch (error) {
            alert(error.message);
        }

    }



}

export default withRouter(Register);