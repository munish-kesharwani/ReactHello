import { CREATE_TILE, REMOVE_TILE } from "./actions";
export const tiles = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_TILE: {
      const { text } = payload;
      const newTile = { text, isCompleted: false };
      return state.concat(newTile);
    }
    case REMOVE_TILE: {
      const { text } = payload;
      return state.filter((tile) => tile.text !== text);
    }
    default:
      return state;
  }
};
