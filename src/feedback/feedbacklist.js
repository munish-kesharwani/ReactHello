/**
 * this component is more like container (or list) that holds each feedback line item as holder
 * MVP 1.0  - we need to load the feedback from json.
 * new entry form can be done as MVP 2.0
 */

import React, { useEffect } from "react";
import { connect } from "react-redux";
import Feedback from "./feedback";
import "./feedbacklist.css";
import { displayAlert } from "./thunks.js";
import { isFeedbackLoading } from "./reducers.js";
import { loadFeedback } from "./thunks.js";

const defaultList = {
  name: "Munish",
  email: "munish.kesharwani@gmail.com",
  message: "Good stuff !",
};

const FeedbackList = ({
  feedbacklist = defaultList,
  isFeedbackLoading,
  startLoadingFeedback,
}) => {
  useEffect(() => {
    startLoadingFeedback();
  }, []);

  const loadingMessage = <div> Loading feedback ...</div>;

  const content = (
    <div className="list-wrapper">
      {feedbacklist.map((feedback) => (
        <Feedback feedback={feedback} />
      ))}
    </div>
  );

  return isFeedbackLoading ? loadingMessage : content;
};

const mapStateToProps = (state) => ({
  isFeedbackLoading: state.isFeedbackLoading,
  feedbacklist: state.feedbacklist,
});
const mapDispatchToProps = (dispatch) => ({
  startLoadingFeedback: () => dispatch(loadFeedback()),
});
export default connect(mapStateToProps, mapDispatchToProps)(FeedbackList);
