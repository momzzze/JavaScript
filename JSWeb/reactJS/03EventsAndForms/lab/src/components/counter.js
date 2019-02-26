import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.increment=this.increment.bind(this)
  }

  increment(){

  }


  render() {
    const { count } = this.state;
    return (
      <div>
        <span>{count}</span>
        <br />
        <button onClick={this.increment}>+</button>
        <button>-</button>
      </div>
    );
  }
}

export default Counter;
