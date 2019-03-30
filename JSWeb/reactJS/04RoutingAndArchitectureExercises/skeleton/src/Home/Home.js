import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        {/* TODO */}
        <div className="Home">
          <h1>All movies</h1>
          <ul className="movies">
            {this.props.movies.map(m => (
              <li key={m._id} className="movie">
                <h2>{m.title}</h2>
                <img src={m.poster} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
