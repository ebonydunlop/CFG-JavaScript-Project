import React from 'react';
import Logo from "../assets/images/Logo.png";
import NavBar from '../components/NavBar';

function Contact() {
  return (
    <div>
    <div className="logo-container">
        <img src={Logo} alt="The Recipe Router Logo" id="logo" />
        <h1 id="site-name">The Recipe Router</h1>
        <img src={Logo} alt="The Recipe Router Logo" id="logo" />
      </div>
        <NavBar />
        <h2 className='section-header'>Contact Us</h2>
        </div>
  )
}

export default Contact