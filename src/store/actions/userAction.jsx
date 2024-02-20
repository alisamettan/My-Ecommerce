import { instance } from "../../hooks/useAxios";
import { SET_USER } from "../reducers/userReducer";

export const setUser = (data) => {
  return { type: SET_USER, payload: data };
};

export const setUserActionCreator = (formData) => (dispatch, getState) => {
  instance.post("/login", formData).then((res) => {
    dispatch(setUser(res.data));
  });
};
