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
        <p className="filler-text">Welcome to our recipe website, where culinary creativity and passion unite! We are dedicated to providing a delightful culinary journey for food enthusiasts of all levels. With a wide range of recipes, from traditional classics to innovative fusion dishes, we aim to inspire and empower you in the kitchen. Our team of talented chefs and experienced home cooks curates an extensive collection of mouthwatering recipes that are not only delicious but also accessible and achievable. Whether you're a novice cook or a seasoned pro, we're here to guide you with clear instructions, helpful tips, and step-by-step tutorials. We believe that cooking is an art that brings people together, and our mission is to foster a sense of joy and fulfillment through the love of food. Join us on this culinary adventure, and let's explore the endless possibilities of flavors and techniques together!</p>
        <h2 className='section-header'>Zuzia</h2>
        <p className="filler-text">Allow me to introduce myself â€“ my name is Zuzia and I am a passionate home cook who has embarked on a remarkable journey into the world of vegan food. With an unwavering love for plant-based cuisine, I have dedicated myself to creating and sharing delicious recipes that showcase the incredible flavors and endless possibilities of vegan ingredients. Through my personal experiences and culinary explorations, I have come to appreciate the incredible impact that vegan food can have on our health, the environment, and the welfare of animals. As a firm believer in the power of conscious eating, I am here to inspire and guide you on your own vegan culinary adventure. Whether you're a seasoned vegan or simply curious about incorporating more plant-based meals into your life, I am committed to providing you with innovative and mouthwatering recipes that will tantalize your taste buds and nourish your body and soul. Join me on this exciting plant-based journey, and together, let's celebrate the abundance and beauty of vegan cuisine.</p>
        <h2 className='section-header'>Ebony</h2>
        <p className="filler-text">I'm Ebony, a passionate and inventive chef who loves to add a distinctive twist to beloved dishes. I specialize in taking classic recipes and infusing them with my unique creativity. With each dish I create, I aim to elevate traditional flavors to new and exciting heights, capturing the essence of culinary artistry. Join me on this gastronomic journey as I share my delectable creations, inspiring you to embrace the beauty of cooking with a fresh perspective. Get ready to experience a world of flavors like never before!</p>
    </div>
  )
}

export default AboutUs