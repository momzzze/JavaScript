import React, { Component } from "react";
import "./App.css";
import Article from "../Article/Article";
import RegisterForm from "../RegisterForm/RegisterForm";
import Navigation from "../Navigation/Navigation";
import warningWrapper from "../hocs/warningWrapper";
import errorHandlingWrapper from "../hocs/errorHandlingWrapper";
import BindingForm from "../BindingForm/BindingForm";

const ArticleWithWarning = errorHandlingWrapper(warningWrapper(Article));
const RegisterFormWithWarning = errorHandlingWrapper(
  warningWrapper(RegisterForm)
);
const NavigationWithWarning = errorHandlingWrapper(warningWrapper(Navigation));

class App extends Component {
  onSubmit(e,data){
    e.preventDefault();
    console.log(data)
  }
  render() {
    return (
      <section className="App">
        <BindingForm onSubmit={this.onSubmit}>
        <h1>LoginForm</h1>
          <input type="text" name='username' placeholder='username'/>
          
          <input type="text" name='password' placeholder='password'/>
          </BindingForm>
          <BindingForm onSubmit={this.onSubmit}>
          <h1>CreateSomethingForm</h1>
          <input type="text" name='title' placeholder='title'/>
          <input type="text" name='description' placeholder='Description'/>
          <input type="text" name='posterUrl' placeholder='poster Url'/>
          </BindingForm>
        <ArticleWithWarning />
        <RegisterFormWithWarning />
        <NavigationWithWarning />
      </section>
    );
  }
}

export default App;
