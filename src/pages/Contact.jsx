import React from 'react';
import Logo from "../assets/images/Logo.png";
import NavBar from '../components/NavBar';
import { Link } from "react-router-dom";

const ButtonMailto = ({ mailto, label }) => {
  return (
      <Link
          to='#'
          onClick={(e) => {
              window.location.href = mailto;
              e.preventDefault();
          }}
      >
          {label}
      </Link>
  );
};

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
      <div className='contact-details'>
      <h3>
      <ButtonMailto label="Email our editors at thereciperouter@gmail.com!" mailto="mailto:thereciperouter@gmail.com" />
      </h3>
      <h3>
      <ButtonMailto label="Email Ebony at ebony.thereciperouter@gmail.com!" mailto="mailto:ebony.thereciperouter@gmail.com" />
      </h3>
      <h3>
      <ButtonMailto label="Email Zuzia at zuzia.thereciperouter@gmail.com!" mailto="mailto:zuzia.thereciperouter@gmail.com" />
      </h3>
      <h3>Call us at 07594066935</h3>
      <h3>Mail us at 14 Whittlessey Street, London, SE1 8SZ</h3>
      </div>
    </div>
  )
}

export default Contact