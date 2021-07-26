export const CREATE_TILE = "CREATE_TILE";

export const createTile = (name, email, message) => ({
  type: CREATE_TILE,
  payload: { name, email, message },
});

export const REMOVE_TILE = "REMOVE_TILE";

export const removeTile = (name) => ({
  type: REMOVE_TILE,
  payload: { name },
});

export const MARK_TILE_DONE = "MARK_TILE_DONE";

export const markTileDone = (name) => ({
  type: MARK_TILE_DONE,
  payload: { name },
});

export const LOAD_IN_PROGRESS = "LOADING_TILE";

export const loadInProgress = () => ({
  type: LOAD_IN_PROGRESS,
});

export const LOAD_SUCCESS = "LOAD_SUCCESS";

export const loadSuccess = (tiles) => ({
  type: LOAD_SUCCESS,
  payload: { tiles },
});

export const LOAD_ERROR = "LOAD_ERROR";

export const loadError = () => ({
  type: LOAD_ERROR,
});
