import React from "react";
import "./Tile.css";

const Tile = ({ tile, onRemovePressed, onCompletePressed }) => (
  <div className="tile-container">
    <h3>{tile.name}</h3>

    <h3>{tile.email}</h3>

    <p> {tile.message}</p>
    <div className="buttons-container">
      {tile.isCompleted ? null : (
        <button
          onClick={() => onCompletePressed(tile.name)}
          className="completed-button"
        >
          Mark Done
        </button>
      )}
      <button
        onClick={() => onRemovePressed(tile.name)}
        className="remove-button"
      >
        Delete
      </button>
    </div>
  </div>
);

export default Tile;
