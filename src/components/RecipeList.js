import React, { Component } from "react";
import { connect } from "react-redux";

class RecipeList extends Component {
  render() {
    console.log("this.props", this.props);
    return <div> Lista de las recetas para tomar </div>;
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(
  mapStateToProps,
  null
)(RecipeList);
