import React from 'react'
import {Link} from 'react-router-dom';


export default function Home() {
    return (
        <div  class="container">

<Link to="/Login">
<button 
type="submit"
className="btn login"
>Login</button>
</Link>

<Link to="/register">
<button 
type="submit"
className="btn sign"
>Register</button>
</Link>

<Link to="/Dashboard">
<button 
type="submit"
className="btn dash"
>Dashboard</button>
</Link>


        </div>
    )
}
