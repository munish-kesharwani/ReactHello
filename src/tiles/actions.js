export const CREATE_TILE = "CREATE_TILE";

export const createTile = (text) => ({
  type: CREATE_TILE,
  payload: { text },
});

export const REMOVE_TILE = "REMOVE_TILE";

export const removeTile = (text) => ({
  type: REMOVE_TILE,
  payload: { text },
});
