import React from 'react'
import './Navbar.css'
import Toggle from '../Toggle/Toggle'
import { NavLink } from "react-router-dom"
function Navbar() {
  return (
    <div className='n-wrapper'>
      <div className="n-left">
           <div className="n-name">
            Naveed
           </div>
           <span><Toggle/></span>
      </div>
      <div className="n-right">
        <div className="n-list">
            <ul>
            {/* <NavLink to='/'> */}
                <li>Home</li>
                {/* </NavLink> */}
                {/* <NavLink */}
                {/* to='/services'> */}
                <li>Services</li>
                {/* </NavLink> */}
                {/* <NavLink to='/experience'> */}
                <li>Experience</li>
                {/* </NavLink> */}
                {/* <NavLink to='/portfolio'> */}
                <li>Portfolio</li>
                {/* </NavLink> */}
                {/* <NavLink to='/testimonials'> */}
                <li>Testimonials</li>
                {/* </NavLink> */}
            </ul>
        </div>
        <button className="button n-button">
            Contact
        </button>
      </div>
    </div>
  )
}

export default Navbar
