import React from 'react';
import '../containers/Contact';
import './AboutMe';
import AboutMe from './AboutMe'
import './NavBar.css';
const NavBar = () => {
  return (
    <nav className="navbar1">
      
      <div className="logo">About ME</div>

        <ul className="nav-links">
            <div className="menu">
              <li><a href="index.html">Home</a></li>
              <li><a href="protfolio.html">Portfolio</a></li>
              <li><a href="../containers/Contact.js">Contact</a></li>
              <li><a href="./aboutMe.js">About Me</a></li>
              <li><a href='{aboutMe.js}'>About Me</a></li>
            </div>
        </ul>
    </nav>
  );
}

export default NavBar;
