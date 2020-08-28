import React from 'react'
import './contact.css'
export default function contact() {
    return (
        <>
        <div className="container">
      <form className="form">
  <input placeholder="Name" className="input"/>
  <input placeholder="Phone Number" type="number" className="input" />
  <input placeholder="City" className="input"/>
  <input placeholder="Message" className="textarea input" />
<br />
  <button className="send" type="submit">Send</button>
        </form>
        </div>
</>
    )
}
