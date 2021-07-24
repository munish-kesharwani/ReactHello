import React from "react";
import { connect } from "react-redux";
import Tile from "./Tile.js";
import "./Tiles.css";
import NewTileForm from "./NewTileForm.js";
import { removeTile } from "./actions.js";

const Tiles = ({ tiles = [{ text: "Hello Tile" }], onRemovePressed }) => (
  <div className="list-wrapper">
    <NewTileForm />
    {tiles.map((tile) => (
      <Tile tile={tile} onRemovePressed={onRemovePressed} />
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  tiles: state.tiles,
});
const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (text) => dispatch(removeTile(text)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Tiles);
