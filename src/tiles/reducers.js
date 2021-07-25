import { CREATE_TILE, MARK_TILE_DONE, REMOVE_TILE } from "./actions";
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
    case MARK_TILE_DONE: {
      const { text } = payload;
      return state.map((tile) => {
        if (tile.text === text) {
          return { ...tile, isCompleted: true };
        }
        return tile;
      });
    }
    default:
      return state;
  }
};
