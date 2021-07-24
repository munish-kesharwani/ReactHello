import React from "react";
import "./Tile.css";

const Tile = ({ tile, onRemovePressed }) => (
  <div className="tile-container">
    <h3>{tile.text}</h3>
    <div className="buttons-container">
      <button className="completed-button">Mark Done</button>
      <button
        onClick={() => onRemovePressed(tile.text)}
        className="remove-button"
      >
        Delete
      </button>
    </div>
  </div>
);

export default Tile;
