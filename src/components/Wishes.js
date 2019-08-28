import React, { Component } from "react";
import Wish from "./Wish";
import axios from "axios";

export default class Wishes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wishes: []
    };
    this.updateWishes = this.updateWishes.bind(this);
  }

  updateWishes(wishes) {
    this.setState({ wishes: wishes });
  }
  componentDidMount() {
    axios
      .get("/api/wishes")
      .then(response => {
        this.setState({ wishes: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <div>
        {this.state.wishes.map((wish, index) => (
          <Wish
            updateWishes={this.updateWishes}
            name={wish.name}
            image={wish.image}
            index={index}
          />
        ))}
      </div>
    );
  }
}
