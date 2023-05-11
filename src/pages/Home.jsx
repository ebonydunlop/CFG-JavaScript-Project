import Popular from "../components/Popular.jsx";
import New from "../components/New.jsx";
import React from 'react'
import Logo from "../assets/images/Logo.png"
import { POPULAR_RECIPES, NEW_RECIPES } from '../Recipes.js';
import NavBar from "../components/NavBar.jsx"

function Home() {
  return ( 
    <div>
    <div className="logo-container">
        <img src={Logo} alt="The Recipe Router Logo" id="logo" />
        <h1 id="site-name">The Recipe Router</h1>
        <img src={Logo} alt="The Recipe Router Logo" id="logo" />
      </div>
    <div>
        <NavBar />
        <New recipes={NEW_RECIPES} />
        <Popular recipes={POPULAR_RECIPES} />
    </div>
    </div>
  )
}

export default Home