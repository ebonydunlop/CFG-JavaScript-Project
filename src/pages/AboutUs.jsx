import React from 'react';
import NavBar from "../components/NavBar";
import Logo from "../assets/images/Logo.png"

function AboutUs() {
  return (
    <div>
      <div className="logo-container">
        <img src={Logo} alt="The Recipe Router Logo" id="logo" />
        <h1 id="site-name">The Recipe Router</h1>
        <img src={Logo} alt="The Recipe Router Logo" id="logo" />
      </div>
        <NavBar />
        <h2 className='section-header'>About Us</h2>
        <p className="filler-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum a neque id accumsan. Aliquam varius volutpat nibh, et ornare quam pulvinar non. Sed pellentesque mattis felis. Vivamus eu dolor in turpis luctus volutpat vitae non quam. Donec sollicitudin nisl quis erat elementum, quis aliquam odio convallis. Phasellus nulla ante, aliquet a lacus eget, dapibus ultricies purus. Sed urna quam, mattis ac blandit nec, scelerisque et ligula. Phasellus condimentum elit eu odio bibendum congue. Pellentesque ex mauris, elementum nec rutrum quis, pretium id erat. Morbi a tempus massa. Phasellus convallis magna nec ex lacinia elementum a eget lacus.</p>
        <p className="filler-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum a neque id accumsan. Aliquam varius volutpat nibh, et ornare quam pulvinar non. Sed pellentesque mattis felis. Vivamus eu dolor in turpis luctus volutpat vitae non quam. Donec sollicitudin nisl quis erat elementum, quis aliquam odio convallis. Phasellus nulla ante, aliquet a lacus eget, dapibus ultricies purus. Sed urna quam, mattis ac blandit nec, scelerisque et ligula. Phasellus condimentum elit eu odio bibendum congue. Pellentesque ex mauris, elementum nec rutrum quis, pretium id erat. Morbi a tempus massa. Phasellus convallis magna nec ex lacinia elementum a eget lacus.</p>
        <p className="filler-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum a neque id accumsan. Aliquam varius volutpat nibh, et ornare quam pulvinar non. Sed pellentesque mattis felis. Vivamus eu dolor in turpis luctus volutpat vitae non quam. Donec sollicitudin nisl quis erat elementum, quis aliquam odio convallis. Phasellus nulla ante, aliquet a lacus eget, dapibus ultricies purus. Sed urna quam, mattis ac blandit nec, scelerisque et ligula. Phasellus condimentum elit eu odio bibendum congue. Pellentesque ex mauris, elementum nec rutrum quis, pretium id erat. Morbi a tempus massa. Phasellus convallis magna nec ex lacinia elementum a eget lacus.</p>
    </div>
  )
}

export default AboutUs