import React,{useState,useRef ,useEffect} from 'react';
import {Link,withRouter} from 'react-router-dom';
import base from './base'


 function Login(props) {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    return (
        <div>
            <input placeholder="Email" type="email" name="email" value={email} onChange={e=> setEmail(e.target.value)}  />
            <input placeholder="Password" type="password" name="password" value={password} onChange={e=> setPassword(e.target.value) } />
            <button onClick={login}> Login </button>
            <Link to="/Register">     <button> Create Account </button></Link>
         
        </div>
    )

        async function login(){

            try {
                console.log(email);
                await base.login(email,password)
                props.history.replace("/dashboard") 
            } catch (error) {
                alert(error.message);
            }

        }

}


// export default Login;
export default withRouter(Login);