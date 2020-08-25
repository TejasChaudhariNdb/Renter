import React from 'react'
import {Link} from 'react-router-dom';


export default function Home() {
    return (
        <div>
<Link to="/Login">
<button 
type="submit"

>Login</button>
</Link>

<Link to="/register">
<button 
type="submit"

>Register</button>
</Link>

<Link to="/Dashboard">
<button 
type="submit"

>Dashboard</button>
</Link>


        </div>
    )
}
