import { instance } from "../../hooks/useAxios";
import {
  ADD_PRODUCTS,
  CHANGE_FETCHSTAT,
  FETCH_STATES,
  FILTER,
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
export const setTotalProduct = (productC) => {
  return { type: SET_TOTALPRODUCTS, payload: productC };
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

export const filterProducts = (filter) => {
  return { type: FILTER, payload: filter };
};

export const setProductsActionCreator =
  (category = null, filter = null, sort = null, limit = null, offset = null) =>
  (dispatch) => {
    dispatch(setFetchedState(FETCH_STATES.Fetching));
    instance
      .get("/products", {
        params: {
          category: category,
          filter: filter,
          sort: sort,
          limit: limit,
          offset: offset,
        },
      })
      .then((res) => {
        dispatch(setProducts(res.data.products));
        dispatch(setPageCount(Math.ceil(res.data.total / 25)));
        dispatch(setProductCount(res.data.products.length));
        dispatch(setFetchedState(FETCH_STATES.Fetched));
      })
      .catch((err) => {
        console.log(err);
      });
  };
