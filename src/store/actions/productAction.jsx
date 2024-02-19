import {
  FETCH_STATES,
  SET_PAGECOUNT,
  SET_PRODUCT,
  SET_PRODUCTCOUNT,
} from "../reducers/productReducer";

export const setProducts = (data) => {
  return { type: SET_PRODUCT, payload: data };
};

export const setProductCount = () => {
  return { type: SET_PRODUCTCOUNT };
};

export const setPageCount = (count) => {
  return { type: SET_PAGECOUNT, payload: count };
};

export const setActivePageAction = (page) => {
  return { type: SET_ACTIVEPAGE, payload: page };
};

export const setFetchedState = (state) => {
  return { type: FETCH_STATES, payload: state };
};
