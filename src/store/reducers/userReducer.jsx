import { FETCH_STATES } from "./productReducer";

export const SET_USER = "SET_USER";
export const SET_USER_FETCHSTATE = "SET_USER_FETCHSTATE";

const user = {
  userInfo: {
    name: "",
    email: "",
    password: "",
    role_id: "",
  },
  fetchState: FETCH_STATES.NotFetched,
};

export const userReducer = (state = user, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        userInfo: action.payload,
      };
    case SET_USER_FETCHSTATE:
      return { ...state, fetchState: action.payload };

    default:
      return state;
  }
};
