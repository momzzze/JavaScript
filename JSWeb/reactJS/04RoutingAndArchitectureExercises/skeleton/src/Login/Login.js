import React, { Component } from "react";
import "./Login.css";

class Login extends Component {
  render() {
    return (
      <div className="Login">
        {/* TODO */}
        <div class="Login">
          <h1>Login</h1>
          <form action="/">
            <label for="usernameLogin">Username</label>
            <input type="text" id="usernameLogin" placeholder="Ivan Ivanov" />
            <label for="passwordLogin">Password</label>
            <input type="password" id="passwordLogin" placeholder="******" />
            <input type="submit" value="Login" />
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
