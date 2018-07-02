import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'

class AddPokemonForm extends Component {
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
  fetch('http://localhost:5000/pokedex/create',
  {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(this.state.form), // data can be `string` or {object}!
    headers:{
      'Content-Type': 'application/json'    
    }})
    .then(data=>data.json())
    .then(response=>{      
        this.props.updateRoster(response)      
    }).catch(err=>console.log(err))
}

  render() {
    return (
      <form>
        <h1>Create Pokemon</h1>
        <div className="form-group">
          <label htmlFor="input-pokename">Pokemon Name</label>
          <input data-name="pokemonName" type="text" onChange={this.handleChange} className="form-control" id="input-pokename" aria-describedby="emailHelp" placeholder="Pokemon Name" />
          
        </div>
        <div className="form-group">
          <label htmlFor="input-password">Image</label>
          <input data-name="pokeImg" type="text" onChange={this.handleChange} className="form-control" id="input-pokeimg" placeholder="Pockemon Image" />
        </div>
        <div className="form-group">
          <label htmlFor="input-info">Info</label>
          <input data-name="pokemonInfo" type="text" onChange={this.handleChange} className="form-control" id="input-Info" placeholder="Pockemon Info" />
        </div>
         
        <button type="button" onClick={this.handleSubmit} className="btn btn-primary">Submit</button>
      </form>
    )
  }


}

export default AddPokemonForm;
