import React, { useState } from "react";
import "./NewTileForm.css";

const NewTileForm = () => {
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
      <button classNam="new-tile-button">Create Tile</button>
    </div>
  );
};

export default NewTileForm;
