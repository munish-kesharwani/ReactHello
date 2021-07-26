/**
 * MVP 1.0 : displayAlert (for error) & loadFeedback
 * MVP 0.5 : hardcode the json
 */

import { loadSuccess, loadInProgress, loadError } from "./actions";

/**
 * 
 * MVP 0.5 hardcoded json (to be replaced later with)
 * const response = await fetch("http://localhost:3000/api");
    const feedbacklist = response.json();
 */

const feedbackListJson = [
  {
    name: "Munish",
    email: "munish.kesharwani@gmail.com",
    message: "Very well done. Learn React as well.",
  },
  {
    name: "Shilpi",
    email: "Shilpi.gupta@gmail.com",
    message: "Job Well Done !",
  },
  {
    name: "Munish",
    email: "munish.kesharwani@gmail.com",
    message: "Groovy site.",
  },
  {
    name: "Venkatesh",
    email: "venky@gmail.com",
    message: "Would you consider learning React ?.",
  },
  { name: "Rajesh", email: "rajesh@gmail.com", message: "TBD." },
];
/*[
  {
    name: "Munish",
    email: "munish.kesharwani@gmail.com",
    message: "Very well done. Learn React as well.",
  },
  {
    name: "Shilpi",
    email: "munish.kesharwani@gmail.com",
    message: "2nd message.",
  },
];*/

export const loadFeedback = () => async (dispatch, getState) => {
  try {
    dispatch(loadInProgress());

    // const feedbacklist = feedbackListJson;
    const response = await fetch("http://localhost:3000/api");
    const feedbacklist = await response.json(); //JSON.parse(response);
    console.log(feedbacklist);

    dispatch(loadSuccess(feedbacklist));
  } catch (e) {
    console.log(e);
    displayAlert(e);
    dispatch(loadError());
  }
};

export const displayAlert = (text) => () => {
  alert(`${text}`);
};
