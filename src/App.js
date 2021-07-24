import React from "react";
import { hot } from "react-hot-loader";
import "./App.css";
import Tiles from "./tiles/Tiles.js";

const App = () => (
  <div className="App">
    <h1> React Hello 12345!</h1>
    <h2> Changes in the script.</h2>
    <Tiles />
  </div>
);

export default hot(module)(App);
