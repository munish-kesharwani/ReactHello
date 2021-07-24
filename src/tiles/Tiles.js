import React from "react";
import Tile from "./Tile.js";
import "./Tiles.css";
import NewTileForm from "./NewTileForm.js";

const Tiles = ({ tiles = [{ text: "Hello Tile" }] }) => (
  <div className="list-wrapper">
    <NewTileForm />
    {tiles.map((tile) => (
      <Tile tile={tile} />
    ))}
  </div>
);

export default Tiles;
