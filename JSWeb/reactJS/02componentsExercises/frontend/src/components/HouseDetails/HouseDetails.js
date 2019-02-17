import React from "react";
import "./HouseDetails.css";

const HouseDetails = function(props) {
  return (
    <div className="HouseDetails">
      <h2>{props.house.type}</h2>
      <div className="image">
        <img src={props.house.imageUrl} alt="house" />
        </div>
        <p>Description: {props.house.description}</p>
        <p>Price: {props.house.price}$</p>
      
    </div>
  );
};

export default HouseDetails;
