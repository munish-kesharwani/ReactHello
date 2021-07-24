import React from "react";
import "./Tile.css";

const Tile = ({ tile }) => (
  <div className="tile-container">
    <h3>{tile.text}</h3>
    <div className="buttons-container">
      <button className="completed-button">Mark Done</button>
      <button className="remove-button">Delete</button>
    </div>
  </div>
);

export default Tile;
