import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
   // this.handleChange = this.handleChange.bind(this)

  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json()).then(users => this.setState({ monsters: users }))
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    //const { monsters, searchField } = this.state;
    //const filteredMonsters = monsters.filter(m => m.name.toLowerCase().includes(searchField.toLowerCase))

    const { monsters, searchField } = this.state; //destructure
    const filteredMonsters = monsters.filter(m => m.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">

        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />

        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App;
