import { thunk } from "redux-thunk";
import logger from "redux-logger";
import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import { globalReducer } from "./reducers/globalReducer";
import { userReducer } from "./reducers/userReducer";

const reducers = combineReducers({
  user: userReducer,
  global: globalReducer,
});

export const myStore = createStore(reducers, applyMiddleware(thunk, logger));
