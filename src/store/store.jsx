import { thunk } from "redux-thunk";
import logger from "redux-logger";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { globalReducer } from "./reducers/globalReducer";

export const myStore = createStore(
  globalReducer,
  applyMiddleware(thunk, logger)
);
