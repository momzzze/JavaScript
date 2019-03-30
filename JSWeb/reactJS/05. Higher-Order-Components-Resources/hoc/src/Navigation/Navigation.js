import React, { Component } from "react";
import "../App/App.css";

class Navigation extends Component {
  render() {
    return (
      <div className="App">
      <header>
            <span className="title">Navigation</span>
          </header>
        <nav>          
          <ul>
            <li>
              <a htmlFor="#">Home</a>
            </li>
            <li>
              <a htmlFor="#">Catalog</a>
            </li>
            <li>
              <a htmlFor="#">About</a>
            </li>
            <li>
              <a htmlFor="#">Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navigation;
