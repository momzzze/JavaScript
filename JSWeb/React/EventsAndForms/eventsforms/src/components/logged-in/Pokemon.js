import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'

const Pokemon=props=>(
  <div>
    
  <h1>{props.item.pokemonName}</h1>
      <p>{props.item.pokemonInfo}</p>
      <img src={props.item.pokeImg} alt={props.item.pokeImg}/>
  </div>
)

export default Pokemon;
