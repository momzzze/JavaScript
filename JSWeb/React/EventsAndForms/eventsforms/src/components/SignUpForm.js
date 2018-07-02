import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'

class SignUpForm extends Component {
constructor(props){
  super(props)
  this.state={
    form:{}
  }
  this.handleChange=this.handleChange.bind(this)
  this.handleSubmit=this.handleSubmit.bind(this)
}

handleChange(e){
  const name=e.target.dataset.name
  const value=e.target.value
  const newObj={};
  newObj[name]=value;
  
  this.setState({
    form: Object.assign(this.state.form, newObj)
  })  
}

handleSubmit(e){
  e.preventDefault();
  fetch('http://localhost:5000/auth/signup',
  {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(this.state.form), // data can be `string` or {object}!
    headers:{
      'Content-Type': 'application/json'    
    }}).then(data=>data.json()).then(response=>console.log(response))
}



  render() {
    return (
      <form>
        <h1>SignUp</h1>
        <div className="form-group">
          <label htmlFor="input-email">Email address</label>
          <input data-name="email" type="email" onChange={this.handleChange} className="form-control" id="input-email" aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="input-password">Password</label>
          <input data-name="password" type="password" onChange={this.handleChange} className="form-control" id="input-password" placeholder="Password" />
        </div>
         <div className="form-group">
          <label htmlFor="input-username">Username</label>
          <input data-name="name" type="text" className="form-control" onChange={this.handleChange} id="input-username" placeholder="Username" />
        </div>
        <button type="button" onClick={this.handleSubmit} className="btn btn-primary">Submit</button>
      </form>
    )
  }


}

export default SignUpForm;
