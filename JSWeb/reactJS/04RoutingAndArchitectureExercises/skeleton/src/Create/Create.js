import React, { Component } from "react";
import "./Create.css";

class Create extends Component {
  constructor(props) {
    super(props);

    this.state={
      title:null,
      storyLine:null,
      trailerUrl:null,
      poster:null
    }
    this.handleChange=this.props.handleChange.bind(this);
  }

  render() {
    return (
      <div className="Create">
        <h1>Create Movie</h1>
        <form onSubmit={(e)=>this.props.handleChangeSubmit(e,this.state)}>
          <label htmlFor="title">Title</label>
          <input type="text" onChange={this.handleChange} name="title" placeholder="Titanic" />
          <label htmlFor="storyLine">StoryLine</label>
          <input type="text" onChange={this.handleChange} name="storyLine" placeholder="Text" />
          <label htmlFor="trailerUrl">Trailer Url</label>
          <input
            type="text"
            onChange={this.handleChange}
            name="trailerUrl"
            placeholder="https://www.youtube.com/watch?v=DNyKDI9pn0Q"
          />
          <label htmlFor="poster">Movie Poster</label>
          <input
            type="text"
            onChange={this.handleChange}
            name="poster"
            placeholder="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRzg6o0KjhufKFU1iBNr1zuyi0YDNgCUw4Ky5SNATZDVKaIUkiAA"
          />
          <input type="submit" value="Create" />
        </form>
      </div>
    );
  }
}

export default Create;
