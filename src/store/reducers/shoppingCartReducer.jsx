export const SET_CART_LIST = "SET_CART_LIST";
export const SET_PAYMENT = "SET_PAYMENT";
export const SET_ADDRESS = "SET_ADDRESS";

const shoppingCart = {
  cartList: [],
  payment: {},
  address: [],
};

export const shoppingCartReducer = (state = shoppingCart, action) => {
  switch (action.type) {
    case SET_CART_LIST:
      return { ...state, cartList: action.payload };
    case SET_PAYMENT:
      return { ...state, payment: action.payload };
    case SET_ADDRESS:
      return { ...state, address: action.payload };

    default:
      return state;
  }
};
