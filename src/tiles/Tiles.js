import React from "react";
import { connect } from "react-redux";
import Tile from "./Tile.js";
import "./Tiles.css";
import NewTileForm from "./NewTileForm.js";
import { markTileDone, removeTile } from "./actions.js";
import { displayAlert } from "./thunks.js";

const Tiles = ({
  tiles = [{ text: "Hello Tile" }],
  onRemovePressed,
  onCompletePressed,
  onDisplayAlertClicked,
}) => (
  <div className="list-wrapper">
    <NewTileForm />
    {tiles.map((tile) => (
      <Tile
        key={tile.text}
        tile={tile}
        onRemovePressed={onRemovePressed}
        onCompletePressed={onDisplayAlertClicked}
      />
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  tiles: state.tiles,
});
const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (text) => dispatch(removeTile(text)),
  onCompletePressed: (text) => dispatch(markTileDone(text)),
  onDisplayAlertClicked: () => dispatch(displayAlert()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Tiles);
