import React from "react";
import "./House.css";

const House = props => (
  <div className="House" onMouseEnter={()=>props.selectHouse(props.id)}>
    <img alt="house" src={props.imageUrl} />
  </div>
);

export default House;
