import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./Home/Home";
import Register from "./Register/Register";
import Login from "./Login/Login";
import Create from "./Create/Create";
import Header from "./Header/Header";
import "./App.css";
import Details from "./Details/Details";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: null,
      isAdmin: null,
      movies: [],
      selectedMovieId: 0
    };
  }
  componentWillMount() {
    const isAdmin = localStorage.getItem("isAdmin") === "true";
    if (localStorage.getItem("username")) {
      this.setState({
        username: localStorage.getItem("username"),
        isAdmin: isAdmin
      });
    }

    fetch("http://localhost:9999/feed/movies")
      .then(rawData => rawData.json())
      .then(body => {
        this.setState({
          movies: body.movies
        });
        toast.success(body.message, {
          closeButton: false
        });
      });
  }
  handleChange(e) {
    console.log(e.target.name, "=>", e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleChangeSubmit(e, data) {
    e.preventDefault();
    fetch("http://localhost:9999/feed/movie/create", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(rawData => rawData.json())
      .then(responseBody => {
        if (!responseBody.errors) {
          toast.success(responseBody.message, {
            closeButton: false
          });
        } else {
          toast.error(responseBody.message, {
            closeButton: false
          });
        }
      });
  }

  handleSubmit(e, data, isSignup) {
    e.preventDefault();
    fetch("http://localhost:9999/auth/sign" + (isSignup ? "up" : "in"), {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(rawData => rawData.json())
      .then(responseBody => {
        if (responseBody.username) {
          this.setState({
            username: responseBody.username,
            isAdmin: responseBody.isAdmin
          });
          localStorage.setItem("username", responseBody.username);
          localStorage.setItem("isAdmin", responseBody.isAdmin);
          toast.success("Welcome, " + responseBody.username, {
            closeButton: false
          });
        } else {
          toast.error(responseBody.message, {
            closeButton: false
          });
        }
      });
  }

  render() {
    return (
      <div className="App">
        <ToastContainer />
        <BrowserRouter>
          <div>
            <Header
              isAdmin={this.state.isAdmin}
              username={this.state.username}
            />
            <Switch>
              <Route
                exact
                render={props => 
                  <Details
                    {...props}
                    />}
                    path="/movies/:id"
                    movie={this.state.movies[this.state.selectedMovieId]}              
               
              />

              <Route
                exact
                render={props => <Home {...props} movies={this.state.movies} />}
                path="/"
              />

              <Route
                render={props =>
                  this.state.isAdmin ? (
                    <Create
                      {...props}
                      handleChangeSubmit={this.handleChangeSubmit.bind(this)}
                      handleChange={this.handleChange}
                    />
                  ) : (
                    <Redirect
                      to={{
                        pathname: "/login"
                      }}
                    />
                  )
                }
                path="/create"
              />
              <Route
                render={props => (
                  <Register
                    {...props}
                    handleSubmit={this.handleSubmit.bind(this)}
                    handleChange={this.handleChange}
                  />
                )}
                path="/register"
              />
              <Route
                path="/login"
                render={() => (
                  <Login
                    handleSubmit={this.handleSubmit.bind(this)}
                    handleChange={this.handleChange}
                  />
                )}
              />
              <Route render={() => <h1>Not Found!</h1>} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
