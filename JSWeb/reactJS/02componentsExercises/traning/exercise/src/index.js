import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import "./index.css";

//import App from "./components/App/App";

class Counter extends Component {
  constructor(props) {
    super(props);

    const { identifier }=this.props


    this.state = {
      count: Number(window.localStorage.getItem(`${identifier}-count`))|| 0,
    };
    this.updateCounter = this.updateCounter.bind(this);
    this.resetCounter=this.resetCounter.bind(this);
  }
  updateCounter() {
    const {identifier}=this.props;
    this.setState(
      {
        count: this.state.count + 1
      },
      () => {
        const updatedCount = this.state.count;
        window.localStorage.setItem(`${identifier}-count`, `${updatedCount}`);
      }
    );
  }
  resetCounter() {
    this.setState({
      count: 0
    });
  }
  render() {
    const { count } = this.state;

    return (
      <div>
        <span>{this.state.count}</span>
        <br />
        <button onClick={this.updateCounter}>+</button>
        
        <button onClick={this.resetCounter}>Reset</button>
      </div>
    );
  }
}
ReactDOM.render(
  <Fragment>
    <Counter identifier="first-count" />
    <Counter identifier="second-count"/>
    <Counter identifier="third-count"/>
  </Fragment>,
  document.getElementById("root")
);
