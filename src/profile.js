import React from 'react';
import './profile.css';
import base from './base.js';
import { Link } from 'react-router-dom';

export default function profile(name) {
    return (
        <div className="container">
      <div className="card">
       
  <div className="card-container">
    <h1> {base.getCurrentUserName()}</h1>
 <p className="title">CEO & Founder : Renter</p>
 <p><Link to="/contact"><button className="contact">Contact</button></Link></p>
      </div>
  </div>
  </div>
    );
  }