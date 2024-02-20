import { thunk } from "redux-thunk";
import logger from "redux-logger";
import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import { globalReducer } from "./reducers/globalReducer";
import { userReducer } from "./reducers/userReducer";
import { productReducer } from "./reducers/productReducer";
import { shoppingCartReducer } from "./reducers/shoppingCartReducer";

const reducers = combineReducers({
  user: userReducer,
  global: globalReducer,
  product: productReducer,
  shoppingCart: shoppingCartReducer,
});

export const myStore = createStore(reducers, applyMiddleware(thunk, logger));
