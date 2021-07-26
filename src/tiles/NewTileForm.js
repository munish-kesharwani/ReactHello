import React, { useState } from "react";
import "./NewTileForm.css";
import { connect } from "react-redux";
import { createTile } from "./actions";

const NewTileForm = ({ tiles, onCreatePressed }) => {
  const [name, setInputName] = useState("");
  const [email, setInputEmail] = useState("");
  const [message, setInputMessage] = useState("");

  return (
    <div className="new-tile-form">
      <input
        className="new-tile-input"
        type="text"
        value={name}
        placeholder="Type your Name"
        onChange={(e) => setInputName(e.target.value)}
      />

      <input
        className="new-tile-input"
        type="text"
        value={email}
        placeholder="Type your email"
        onChange={(e) => setInputEmail(e.target.value)}
      />

      <input
        className="new-tile-input"
        type="text"
        value={message}
        placeholder="Type your Message"
        onChange={(e) => setInputMessage(e.target.value)}
      />

      <button
        onClick={() => {
          const isDuplicate = tiles.some((tile) => tile.name === name);
          if (!isDuplicate) {
            onCreatePressed(name, email, message);
            setInputName("");
            setInputEmail("");
            setInputMessage("");
          }
        }}
        className="new-tile-button"
      >
        Submit Feedback
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  tiles: state.tiles,
});
const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: (name, email, message) =>
    dispatch(createTile(name, email, message)),
});
export default connect(mapStateToProps, mapDispatchToProps)(NewTileForm);
