import React, { Component } from "react";
import Axios from "axios";

export default class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      image: "",
      error: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          Axios.post("/api/wishes", {
            name: this.state.name,
            image: this.state.image
          })
            .then(response => {
              this.props.changeSection();
            })
            .catch(error => {
              this.setState({ error: "An error ocurred" });
            });
        }}
      >
        <input
          name="name"
          onChange={this.handleChange}
          value={this.state.name}
          placeholder="name"
        />
        <input
          name="image"
          onChange={this.handleChange}
          value={this.state.image}
          placeholder="image"
        />
        <button type="submit">Submit</button>
        {this.state.error ? this.state.error : "Everything is good"}
      </form>
    );
  }
}
