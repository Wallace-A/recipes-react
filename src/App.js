import React, { useEffect, useState } from "react";
import './App.css';

const App = () => {
  //app id
  const APP_ID = "0b2ff9d2";
  const API_KEY = "1d2182efb99e8f3de04a946c5bbd41b7";

  useEffect( () => {
    getRecipes();
  },[]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${API_KEY}`);
    const data = response.json();
    console.log(data);
  }
  
  return(
    <div className="App">
      <h1>sup</h1>
      <form className="search-form">
        <input className="search-bar"type="text"/>
        <button className="search-input" type="submit"></button>
      </form>
    </div>
  );
}



export default App;
