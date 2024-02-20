import { instance } from "../../hooks/useAxios";
import { FETCH_STATES } from "../reducers/productReducer";
import { SET_USER, SET_USER_FETCHSTATE } from "../reducers/userReducer";

export const setUser = (data) => {
  return { type: SET_USER, payload: data };
};
export const setUserFetchState = (state) => {
  return { type: SET_USER_FETCHSTATE, payload: state };
};

export const setUserActionCreator = (formData) => (dispatch, getState) => {
  dispatch(setUserFetchState(FETCH_STATES.Fetching));
  instance
    .post("/login", formData)
    .then((res) => {
      dispatch(setUser(res.data));
      dispatch(setUserFetchState(FETCH_STATES.Fetched));
    })
    .catch((err) => {
      console.log(err);
      dispatch(setUserFetchState(FETCH_STATES.FetchFailed));
    })
    .finally(() => {
      dispatch(setUserFetchState(FETCH_STATES.NotFetched));
    });
};
