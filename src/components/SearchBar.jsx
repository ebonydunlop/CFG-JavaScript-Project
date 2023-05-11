import React from 'react';
import { POPULAR_RECIPES, NEW_RECIPES } from '../Recipes';
import { useState } from 'react';  

function SearchBar() {
  const allRecipes = [...NEW_RECIPES, ...POPULAR_RECIPES];
  const [query, setQuery] = useState("");
  const filteredRecipes = allRecipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="search-bar-container">
      <input placeholder="Search recipes" onChange={(event) => setQuery(event.target.value)}/>
      {filteredRecipes.map((recipe) => (
        <div key={recipe.id}>
          <p>{recipe.name}</p>
        </div>
      ))}
    </div>
  );
}

export default SearchBar;
