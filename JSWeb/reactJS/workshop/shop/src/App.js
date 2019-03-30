import React, { Component,Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./views/home";
import NotFound from "./views/not-found";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/header";
import Footer from "./components/footer";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Fragment>
            <Header/>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route component={NotFound} />
          </Switch>
            <Footer/>
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
