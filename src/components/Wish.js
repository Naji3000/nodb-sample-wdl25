import React from "react";
import "./Wish.css";
import Axios from "axios";

export default class Wish extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    };
  }
  render() {
    return (
      <div
        onClick={() => {
          this.setState({ selected: !this.state.selected });
        }}
        className="wish-container"
      >
        <img
          src={this.props.image}
          className={this.state.selected ? "selected" : ""}
        />
        <div>
          <h2 className="wish-title">{this.props.name}</h2>
          <button
            onClick={e => {
              e.stopPropagation();
              Axios.delete(`/api/wishes/${this.props.index}`).then(response => {
                this.props.updateWishes(response.data);
              });
            }}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}
