import React, { Component } from "react";
import Street from "../Street/Street";
import "./App.css";
import House from "../House/House";
import HouseDetails from "../HouseDetails/HouseDetails";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      streets: [],
      selectedStreetIdx: 0,
      selectedHouseIdx: 0,
      hasFetched: false
    };
  }
  componentWillMount() {
    fetch("http://localhost:9999/feed/street/all")
      .then(response => response.json())
      .then(data => {
        this.setState({
          streets: data.streets,
          hasFetched: true
        });
      });
  }

  getSelectedStreet() {
    return this.state.streets[this.state.selectedStreetIdx].homes;
  }
  setCurrentStreet(idx) {
    this.setState({
      selectedStreetIdx: idx
    });
  }
  getSelectedStreetHouses(){
    if(this.state.hasFetched){
      return this.state.streets[this.state.selectedStreetIdx].homes
    }
    return[];
  }
  getSelectedHouse(){
    return this.state.streets[this.state.selectedStreetIdx].homes[this.state.selectedHouseIdx]
  }
  SetCurrentHouse(idx){
    this.setState({
      selectedHouseIdx:idx
    })
  }
  render() {
    if (!this.state.hasFetched) {
      return null;
    }
    return (
      <div className="App">
        <div className="streets">
          <h2>Streets</h2>
          {this.state.streets.length > 0
            ? this.state.streets.map((street, idx) => {
                return <Street selectedStreet={(e)=> this.setCurrentStreet(idx,e)} location={street.location} key={idx} id={idx} />;
              })
            : null}
        </div>
        <div className="houses">
          <h2>Houses</h2>
          {this.getSelectedStreet().map((home, idx) => {
            return (
              <House selectHouse={(e)=>this.SetCurrentHouse(idx,e)}
                type={home.type}
                description={home.description}
                id={idx}
                imageUrl={home.imageUrl}
                price={home.price}
                key={idx}
              />
            );
          })}
        </div>
        <HouseDetails house={this.getSelectedStreetHouses()[this.state.selectedHouseIdx]}/>

      </div>
    );
  }
}

export default App;
