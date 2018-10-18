import React, { Component } from "react";
import {
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Button
} from "react-bootstrap";
import { connect } from "react-redux";
import { setRecipes } from "./../actions";

class SearchRecipe extends Component {
  constructor() {
    super();
    this.state = {
      ingredients: "",
      dish: ""
    };
  }

  search() {
    let { ingredients, dish } = this.state;
    const url = `http://www.recipepuppy.com/api/?i=${ingredients}&q=${dish}`;
    fetch(url, {
      method: "GET",
      "content-type": "Application/json"
    })
      .then(response => response.json())
      .then(json => {
        console.log("this.props", setRecipes(json.results));
      });
  }

  render() {
    return (
      <Form inline>
        <FormGroup>
          <ControlLabel> Ingredients </ControlLabel>{" "}
          <FormControl
            name="ingredients"
            type="text"
            placeholder="garlic, chicken"
            onChange={e => {
              this.setState({ [e.target.name]: e.target.value });
            }}
          />
        </FormGroup>{" "}
        <FormGroup>
          <ControlLabel> Dish </ControlLabel>
          <FormControl
            name="dish"
            type="text"
            placeholder="adobo"
            onChange={e => {
              this.setState({ [e.target.name]: e.target.value });
            }}
          />
        </FormGroup>{" "}
        <Button
          onClick={() => {
            this.search();
          }}
        >
          Submit
        </Button>
      </Form>
    );
  }
}

export default connect(
  null,
  { setRecipes }
)(SearchRecipe);
