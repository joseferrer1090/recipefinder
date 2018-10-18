import React, { Component } from "react";
import SearchRecipe from "./components/SearchRecipe";
import RecipeList from "./components/RecipeList";
import "./styles/index.css";

class App extends Component {
  render() {
    return (
      <div>
        <h2> Recipe Finder </h2>
        <SearchRecipe />
        <RecipeList />
      </div>
    );
  }
}

export default App;
