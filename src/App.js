import React, { Component } from "react";
import SearchRecipe from "./components/SearchRecipe";
import "./styles/index.css";

class App extends Component {
  render() {
    return (
      <div>
        <h2> Recipe Finder </h2>
        <SearchRecipe />
      </div>
    );
  }
}

export default App;
