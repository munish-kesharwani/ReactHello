import { loadSuccess, loadInProgress, loadError } from "./actions";

export const loadFeedback = () => async (dispatch, getState) => {
  try {
    dispatch(loadInProgress());
    const response = await fetch("http://localhost:3000/api");
    const tiles = response.json();

    dispatch(loadSuccess(tiles));
  } catch (e) {
    displayAlert(e);
    dispatch(loadError());
  }
};

export const displayAlert = (text) => () => {
  alert(`${text}`);
};
