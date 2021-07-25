import React, { useState } from "react";
import "./NewTileForm.css";
import { connect } from "react-redux";
import { createTile } from "./actions";

const NewTileForm = ({ tiles, onCreatePressed }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="new-tile-form">
      <input
        className="new-tile-input"
        type="text"
        value={inputValue}
        placeholder="Type your Tile Text"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={() => {
          const isDuplicate = tiles.some((tile) => tile.text === inputValue);
          if (!isDuplicate) {
            onCreatePressed(inputValue);
            setInputValue("");
          }
        }}
        className="new-tile-button"
      >
        Create Tile
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  tiles: state.tiles,
});
const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: (text) => dispatch(createTile(text)),
});
export default connect(mapStateToProps, mapDispatchToProps)(NewTileForm);
