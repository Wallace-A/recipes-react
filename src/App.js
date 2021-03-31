import React, { useEffect, useState } from "react";
import './App.css';
import Recipe from "./Recipe";

const App = () => {
  //app id
  const APP_ID = "0b2ff9d2";
  const API_KEY = "1d2182efb99e8f3de04a946c5bbd41b7";
  //empty array of recipes
  const [recipes, setRecipes] = useState([]);   
  //empty seacrh string
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  //runs only when query changes
  //query changes on sunmit button
  useEffect( () => {
    getRecipes();
  },[query]);

  

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${API_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  };
  
  const updateSearch = (e) => {
    setSearch(e.target.value);
  }
  
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }
  return(
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar"type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">Submit</button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe 
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients} />
        ))}
      </div>
      
    </div>
  );
}



export default App;
