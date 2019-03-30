import React, { Component } from "react";
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleChange=props.handleChange.bind(this)
  }

  render() {
    return (
      <div className="Login">
        <h1>Login</h1>
        <form onSubmit={(e)=>this.props.handleSubmit(e,this.state,false)}>
          <label htmlFor="usernameLogin">Username</label>
          <input
            type="text"
            onChange={this.handleChange}
            name="username"
            placeholder="Ivan Ivanov"
          />
          <label htmlFor="passwordLogin">Password</label>
          <input
            type="password"
            onChange={this.handleChange}
            name="password"
            placeholder="******"
          />
          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}

export default Login;
