import { toast } from "react-toastify";
import {
  DECREMENT_CART_ITEM,
  REMOVE_CART_ITEM,
  SET_ADDRESS,
  SET_CART_LIST,
  SET_PAYMENT,
  TOGGLE_CHECK_ITEM,
} from "../reducers/shoppingCartReducer";
import { instance } from "../../hooks/useAxios";

export const setCartListAction = (cartList, operation) => {
  return {
    type: operation === "decrement" ? DECREMENT_CART_ITEM : SET_CART_LIST,
    payload: cartList,
  };
};

export const toggleCheckItemAction = (item) => {
  return {
    type: TOGGLE_CHECK_ITEM,
    payload: item,
  };
};

export const removeProductAction = (product) => {
  return { type: REMOVE_CART_ITEM, payload: product };
};

export const setPaymentAction = (payment) => {
  return { type: SET_PAYMENT, payload: payment };
};

export const setAddress = (address) => {
  return { type: SET_ADDRESS, payload: address };
};

export const setAddressThunkAction = (formData) => (dispatch) => {
  instance
    .post("user/address", formData)
    .then((res) => {
      toast.success("Adress başarılı bir şekilde kaydedildi!");
    })
    .catch((err) => {
      console.error(err);
      toast.error("Adress kaydedilirken bir hata ile karşılaşıldı!");
    });
};

export const fetchAddressThunkAction = () => (dispatch) => {
  instance
    .get("user/address")
    .then((res) => dispatch(setAddress(res.data)))
    .catch((err) => {
      console.error(err);
      toast.error("Adress çekilemedi bir hata ile karşılaşıldı!");
    });
};
