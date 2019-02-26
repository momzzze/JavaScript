import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        {/* TODO */}
        <div class="Home">
          <h1>All movies</h1>
          <ul class="movies">
            <li class="movie">
              <h2>Titanic (1997)</h2>
              <img src="https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX182_CR0,0,182,268_AL_.jpg" />
            </li>
            <li class="movie">
              <h2>Avatar (2009)</h2>
              <img src="https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_UX182_CR0,0,182,268_AL_.jpg" />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
