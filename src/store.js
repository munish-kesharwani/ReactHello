import { createStore, combineReducers } from "redux";
import { tiles } from "./tiles/reducers";

const reducers = { tiles };
const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(rootReducer);
