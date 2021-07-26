/**
 * this component is each read-only feedback line item.
 * MVP 1.0 - simple listing
 * MVP 2.0 - minimize / maximize option
 * MVP 3.0 - comments / likes on the feedback
 */

import React from "react";
import "./feedback.css";

const Feedback = ({ feedback }) => (
  <div className="feedback-container">
    <div>
      <img src="Quote-start.png" width="30" height="30" /> {feedback.message}
      <img src="Quote-end.png" width="30" height="30" />
    </div>
    <div className="feedback-name">
      <h3>{feedback.name}</h3>
    </div>

    <div className="feedback-name">
      <h3>{feedback.email}</h3>
    </div>
  </div>
);

export default Feedback;
