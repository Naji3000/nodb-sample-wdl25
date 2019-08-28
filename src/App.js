import React from "react";
import "./App.css";
import Header from "./components/Header";
import Wishes from "./components/Wishes";
import Add from "./components/Add";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      section: "wishes"
    };
  }
  render() {
    return (
      <div>
        <Header />
        <nav>
          <button onClick={() => this.setState({ section: "wishes" })}>
            wishes
          </button>
          <button onClick={() => this.setState({ section: "add" })}>+</button>
          <button onClick={() => this.setState({ section: "memories" })}>
            memories
          </button>
        </nav>
        {this.state.section === "wishes" ? <Wishes /> : null}
        {this.state.section === "add" ? (
          <Add changeSection={() => this.setState({ section: "wishes" })} />
        ) : null}
      </div>
    );
  }
}

export default App;
