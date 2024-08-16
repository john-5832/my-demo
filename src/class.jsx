
import React, { Component } from 'react';


class Class extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  };

  decrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1
    }));
  };

  render() {
    return (
         <>
          <div>
          <h1>Increment: {this.state.count}</h1>
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>decrement</button>
          </div>
          </>
    );
  }
}

export default Class;