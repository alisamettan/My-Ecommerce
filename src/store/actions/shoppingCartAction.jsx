import {
  SET_ADDRESS,
  SET_CART_LIST,
  SET_PAYMENT,
} from "../reducers/shoppingCartReducer";

export const setCartListAction = (cartList) => {
  return { type: SET_CART_LIST, payload: cartList };
};

export const setPaymentAction = (payment) => {
  return { type: SET_PAYMENT, payload: payment };
};

export const setAddress = (address) => {
  return { type: SET_ADDRESS, payload: address };
};
