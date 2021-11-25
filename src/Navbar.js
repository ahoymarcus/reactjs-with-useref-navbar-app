import React, { useState, useRef, useEffect } from 'react'

import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'



const Navbar = () => {


  return (
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} alt="logo" />
        <button className="nav-toggle">
          <FaBars />
        </button>
      </div>
      <div className="links-container show-container">

      </div>
      <ul calssName="social-icons">

      </ul>
    </div>
  );
}



export default Navbar


