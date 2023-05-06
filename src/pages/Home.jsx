import Popular from "../components/Popular.jsx";
import New from "../components/New.jsx";
import React from 'react'
import { newRecipes, popularRecipes } from "../Recipes.js";

function Home() {
  return (
    <div>
        <New recipes={newRecipes} />
        <Popular recipes={popularRecipes} />
    </div>
  )
}

export default Home