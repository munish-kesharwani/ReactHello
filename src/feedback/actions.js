/**
 * MVP 1.0 = load related actions only.
 */
export const LOAD_IN_PROGRESS = "LOADING_FEEDBACK";

export const loadInProgress = () => ({
  type: LOAD_IN_PROGRESS,
});

export const LOAD_SUCCESS = "LOADING_FEEDBACK_SUCCESS";

export const loadSuccess = (feedbacklist) => ({
  type: LOAD_SUCCESS,
  payload: { feedbacklist },
});

export const LOAD_ERROR = "LOADING_FEEDBACK_ERROR";

export const loadError = () => ({
  type: LOAD_ERROR,
});
