import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }

  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json()).then(users => this.setState({ monsters: users }))
  }
  render() {
    //const { monsters, searchField } = this.state;
    //const filteredMonsters = monsters.filter(m => m.name.toLowerCase().includes(searchField.toLowerCase))

    const { monsters, searchField } = this.state; //destructure
    const filteredMonsters = monsters.filter(m => m.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <input onChange={e => {
          this.setState({ searchField: e.target.value }, () => console.log(this.state))
        }} type="text" placeholder="search monsters" />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App;
