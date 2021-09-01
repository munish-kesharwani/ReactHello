import { LOAD_ERROR, LOAD_SUCCESS, LOAD_IN_PROGRESS } from "./actions";

export const isFeedbackLoading = (state = false, action) => {
  const { type } = action;
  switch (type) {
    case LOAD_IN_PROGRESS: {
      return true;
    }
    case LOAD_ERROR:
    case LOAD_SUCCESS:
      return false;
    default: {
      return state;
    }
  }
};
export const feedbacklist = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case LOAD_SUCCESS: {
      const { feedbacklist } = payload;
      console.log(feedbacklist);
      return feedbacklist;
    }
    // in progress or error are no differently handled (currently) TODO
    case LOAD_ERROR:
      const err_list = [
        {
          name: "localhost",
          email: "error handler",
          message: "Apologies but error in loading feedback",
        },
      ];
      return err_list;
    case LOAD_IN_PROGRESS:

    default:
      return state;
  }
};
