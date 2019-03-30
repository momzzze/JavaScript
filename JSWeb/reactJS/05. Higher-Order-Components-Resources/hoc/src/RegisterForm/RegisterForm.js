import React, { Component } from "react";
import "../App/App.css";

class RegisterForm extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <span className="title">Register</span>
        </header>
        <form>
          Username:
          <input type="text" name="username" />
          <br />
          Email:
          <input type="text" name="email" />
          <br />
          Password:
          <input type="password" name="password" />
          <br />
          Repeat Password:
          <input type="password" name="confirm-password" />
          <br />
          <input type="submit" value="Register" />
        </form>
      </div>
    );
  }
}

export default RegisterForm;
