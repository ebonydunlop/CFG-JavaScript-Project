import React, { useState } from "react";
import { popularRecipes, newRecipes } from "../Recipes";
  
const getFilteredItems = (query, items) => {
    if (!query) {
      return items;
    }
    return items.filter(recipe => recipe.name.toLowerCase().includes(query.toLowerCase()));
  };
  

function SearchBar() {
  const [query, setQuery] = useState("");
  const recipes = [...popularRecipes, ...newRecipes];
  const filteredItems = getFilteredItems(query, recipes);

  return (
    <div>
      <label>Search by Name </label>
      <input type="text" onChange={e => setQuery(e.target.value)} />
      <ul>
        {filteredItems.map(value => (
          <li key={value.id}>{value.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchBar;
