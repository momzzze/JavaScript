import React, { Component } from "react";

class Register extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  };

  handleRegister = (event) => {
      event.preventDefault();
    console.log(this.state);
  };

  handleFormElement = event => {
    const { value, id } = event.target;

    this.setState({
      [id]: value
    });
  };

  render() {
    const { email, password, firstName, lastName } = this.state;
    return (
      <form onSubmit={this.handleRegister}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          id="email"
          onChange={this.handleFormElement}
          required
        />
        <br />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={this.handleFormElement}
          required
        />
        <br />

        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={firstName}
          onChange={this.handleFormElement}
          required
        />
        <br />

        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={lastName}
          onChange={this.handleFormElement}
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Register;
