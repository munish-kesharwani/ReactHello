import React, { useEffect } from "react";
import { connect } from "react-redux";
import Tile from "./Tile.js";
import "./Tiles.css";
import NewTileForm from "./NewTileForm.js";
import { markTileDone, removeTile } from "./actions.js";
import { displayAlert } from "./thunks.js";
import { isLoading } from "./reducers.js";
import { loadFeedback } from "./thunks.js";

const Tiles = ({
  tiles = [
    {
      name: "Munish",
      email: "munish.kesharwani@gmail.com",
      message: "Hello Tile",
    },
  ],
  onRemovePressed,
  onCompletePressed,
  onDisplayAlertClicked,
  isLoading,
  startLoadingFeedback,
}) => {
  useEffect(() => {
    startLoadingFeedback();
  }, []);

  const loadingMessage = <div> Loading feedback ...</div>;

  const content = (
    <div className="list-wrapper">
      <NewTileForm />
      {tiles.map((tile) => (
        <Tile
          //key={tile.message}
          tile={tile}
          onRemovePressed={onRemovePressed}
          onCompletePressed={onCompletePressed}
        />
      ))}
    </div>
  );

  return isLoading ? loadingMessage : content;
};

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  tiles: state.tiles,
});
const mapDispatchToProps = (dispatch) => ({
  startLoadingFeedback: () => dispatch(loadFeedback()),
  onRemovePressed: (text) => dispatch(removeTile(text)),
  onCompletePressed: (text) => dispatch(markTileDone(text)),
  onDisplayAlertClicked: (text) => dispatch(displayAlert(text)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Tiles);
