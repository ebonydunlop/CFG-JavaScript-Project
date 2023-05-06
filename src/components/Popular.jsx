import React from 'react'

function Popular({ recipes }) {
  return (
    <div>
      <h2 className="section-header">Popular Recipes</h2>
      <div className="card-container">
        {recipes.map(recipe => (
          <div key={recipe.id} className="card">
            <h3>{recipe.name}</h3>
            <img src={recipe.image} alt={recipe.name}/>
            <div className="recipe-img-overlay">
              <p id="recipe-description">{recipe.description}</p>
              <p id="recipe-rating">Rating: {recipe.rating}</p>
            </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Popular