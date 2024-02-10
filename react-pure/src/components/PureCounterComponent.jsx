import React, { PureComponent } from 'react';
import '../App.css'
class PureCounterComponent extends PureComponent {
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
    console.log('This is Pure Component');
    return (
      <div>
        <h2>Pure Counter</h2>
        <p>{this.state.count}</p>
        <button onClick={this.handleToggle}>Set Toggle</button>
        <button onClick={this.handleIncrement}>Counter</button>
      </div>
    );
  }
}

export default PureCounterComponent;