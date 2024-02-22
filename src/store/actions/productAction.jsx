import { instance } from "../../hooks/useAxios";
import {
  CHANGE_FETCHSTAT,
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
  return { type: CHANGE_FETCHSTAT, payload: state };
};

export const setProductsActionCreator = () => (dispatch) => {
  dispatch(setFetchedState(FETCH_STATES.Fetching));
  instance
    .get("/products")
    .then((res) => {
      dispatch(setProducts(res.data.products));
      dispatch(setFetchedState(FETCH_STATES.Fetched));
    })
    .catch((err) => {
      console.log(err);
      dispatch(setFetchedState(FETCH_STATES.FetchFailed));
    })
    .finally(() => {
      dispatch(setFetchedState(FETCH_STATES.NotFetched));
    });
};
