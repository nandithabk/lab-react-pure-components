import React, { Component } from "react";

class SimpleCounterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      toggle: false,
    };
  }

  handleIncrement = () => {
    if (this.state.toggle) {
      this.setState((prevState) => ({
        count: prevState.count + 1,
      }));
    }
  };

  handleToggle = () => {
    this.setState((prevState) => ({
      toggle: !prevState.toggle,
    }));
  };

  render() {
    console.log("This is Simple Component");
    return (
      <div>
        <h2>Simple Counter</h2>
        <p> {this.state.count}</p>
        <button onClick={this.handleToggle}>Set Toggle</button>
        <button onClick={this.handleIncrement}>Counter</button>
      </div>
    );
  }
}

export default SimpleCounterComponent;