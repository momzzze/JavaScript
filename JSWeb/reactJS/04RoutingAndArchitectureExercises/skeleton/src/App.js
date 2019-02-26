import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import Home from "./Home/Home";
import Register from "./Register/Register";
import Login from "./Login/Login";
import Create from "./Create/Create";
import Header from "./Header/Header";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route path="/" exact component={Home} /> 
              <Route path="/register" exact component={Register} />
              <Route path="/login" exact component={Login} />
              <Route render={() => <h1>Not Found!</h1>} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
