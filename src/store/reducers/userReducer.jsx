export const SET_USER = "SET_USER";

const user = {
  userInfo: {
    name: "",
    email: "",
    password: "",
    role_id: "",
  },
};

export const userReducer = (state = user, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        userInfo: {
          ...payload,
        },
      };

    default:
      return state;
  }
};
