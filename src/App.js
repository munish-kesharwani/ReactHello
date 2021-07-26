import React from "react";
import { hot } from "react-hot-loader";
import "./App.css";
import Tiles from "./tiles/Tiles.js";

import FeedbackList from "./feedback/feedbacklist";

/**
 * 
 * to be added later
 * <h1> Tiles Section</h1>
    <Tiles />
 */

const App = () => (
  <div className="App">
    <h1> Feedback Section</h1>
    <FeedbackList />
  </div>
);

export default hot(module)(App);
