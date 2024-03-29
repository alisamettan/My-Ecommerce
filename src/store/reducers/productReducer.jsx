export const SET_PRODUCT = "SET_PRODUCT";
export const SET_PRODUCTCOUNT = "SET_PRODUCTCOUNT";
export const SET_PAGECOUNT = "SET_PAGECOUNT";
export const SET_ACTIVEPAGE = "SET_ACTIVEPAGE";
export const CHANGE_FETCHSTAT = "CHANGE_FETCHSTAT";
export const SET_TOTALPRODUCTS = "SET_TOTALPRODUCTS";
export const ADD_PRODUCTS = "ADD_PRODUCTS";
export const FILTER = "FILTER";
export const SORT = "SORT";

export const FETCH_STATES = {
  NotFetched: "NOT_FETCHED",
  Fetching: "FETCHING",
  Fetched: "FETCHED",
  FetchFailed: "FETCH_FAILED",
};

const product = {
  productList: [],
  productCount: 0,
  pageCount: 0,
  activePage: 0,
  fetchState: FETCH_STATES.NotFetched,
  totalProducts: 0,
};

export const productReducer = (state = product, action) => {
  switch (action.type) {
    case SET_PRODUCT:
      return { ...state, productList: [...action.payload] };
    case SET_PRODUCTCOUNT:
      return { ...state, productCount: action.payload };
    case SET_PAGECOUNT:
      return { ...state, pageCount: action.payload };
    case SET_TOTALPRODUCTS:
      return { ...state, totalProducts: action.payload };
    case ADD_PRODUCTS:
      return {
        ...state,
        productList: [...state.productList, ...action.payload],
      };
    case SET_ACTIVEPAGE:
      return { ...state, activePage: action.payload };
    case CHANGE_FETCHSTAT:
      return { ...state, fetchState: action.payload };
    case FILTER:
      return {
        ...state,
        productList: action.payload,
      };
    case SORT:
      return { ...state, productList: [...action.payload] };
    default:
      return state;
  }
};
