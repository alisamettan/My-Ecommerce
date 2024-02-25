import { instance } from "../../hooks/useAxios";
import {
  ADD_PRODUCTS,
  CHANGE_FETCHSTAT,
  FETCH_STATES,
  SET_PAGECOUNT,
  SET_PRODUCT,
  SET_PRODUCTCOUNT,
  SET_TOTALPRODUCTS,
} from "../reducers/productReducer";

export const setProducts = (data) => {
  return { type: SET_PRODUCT, payload: data };
};

export const setProductCount = (productCount) => {
  return { type: SET_PRODUCTCOUNT, payload: productCount };
};
export const setTotalProduct = (productCount) => {
  return { type: SET_TOTALPRODUCTS, payload: productCount };
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

export const addProducts = (products) => {
  return { type: ADD_PRODUCTS, payload: products };
};

export const setProductsActionCreator = (params) => (dispatch) => {
  dispatch(setFetchedState(FETCH_STATES.Fetching));
  instance
    .get("/products", { params })
    .then((res) => {
      dispatch(setProducts(res.data.products));
      dispatch(setTotalProduct(res.data.total));
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

export const scrollingAddProducts = (params) => (dispatch) => {
  dispatch(setFetchedState(FETCH_STATES.Fetching));
  instance
    .get("/products", { params })
    .then((res) => {
      dispatch(addProducts(res.data.products));
      dispatch(setTotalProduct(res.data.total));
      dispatch(setFetchedState(FETCH_STATES.Fetched));
    })
    .catch((err) => {
      dispatch(setFetchedState(FETCH_STATES.FetchFailed));
      console.log(err);
    })
    .finally(() => {
      dispatch(setFetchedState(FETCH_STATES.NotFetched));
    });
};
