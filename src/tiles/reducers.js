import {
  CREATE_TILE,
  MARK_TILE_DONE,
  REMOVE_TILE,
  LOAD_ERROR,
  LOAD_SUCCESS,
  LOAD_IN_PROGRESS,
} from "./actions";

export const isLoading = (state = false, action) => {
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
export const tiles = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_TILE: {
      const { name, email, message } = payload;
      const newTile = { name, email, message, isCompleted: false };
      return state.concat(newTile);
    }
    case REMOVE_TILE: {
      const { name } = payload;
      return state.filter((tile) => tile.name !== name);
    }
    case MARK_TILE_DONE: {
      const { name } = payload;
      return state.map((tile) => {
        if (tile.name === name) {
          return { ...tile, isCompleted: true };
        }
        return tile;
      });
    }
    case LOAD_SUCCESS: {
      const { tiles } = payload;
      console.log(tiles);
      return tiles;
    }
    // in progress or error are no differently handled (currently) TODO
    case LOAD_IN_PROGRESS:
    case LOAD_ERROR:
    default:
      return state;
  }
};
