import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import MyForm from "./components/ref-form";
import * as serviceWorker from "./serviceWorker";

class List extends Component {
  state = {
    soppingProducts: [
      { id: "some-id-for-aple", value: "apple" },
      { id: "some-id-for-orange", value: "orange" },
      { id: "some-id-for-tomato", value: "tomato" }
    ]
  };
  render() {
    const { soppingProducts } = this.state;
    return (
      <ul>
        {soppingProducts.map(product => (
          <li key={product.id}>{product.value}</li>
        ))}
      </ul>
    );
  }
}

ReactDOM.render(<List />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
