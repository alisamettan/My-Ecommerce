import { instance } from "../../hooks/useAxios";
import {
  SET_CATEGORY,
  CHANGE_LANGUAGE,
  SET_ROLES,
  CHANGE_THEME,
} from "../reducers/globalReducer";

export const setRoles = (data) => {
  return { type: SET_ROLES, payload: data };
};

export const setCategories = (categoryData) => {
  return { type: SET_CATEGORY, payload: categoryData };
};

export const setTheme = (theme) => {
  return { type: CHANGE_THEME, payload: theme };
};
export const setLang = (lang) => {
  return { type: CHANGE_LANGUAGE, payload: lang };
};

export const setRolesActionCreator = () => (dispatch) => {
  instance
    .get("/roles")
    .then((res) => {
      dispatch(setRoles(res.data));
    })
    .catch((err) => {
      console.log(err);
    });
};
