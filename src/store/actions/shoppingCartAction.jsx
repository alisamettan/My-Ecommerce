import { toast } from "react-toastify";
import {
  ADD_CARDS,
  DECREMENT_CART_ITEM,
  REMOVE_ADDRESS,
  REMOVE_CART_ITEM,
  SET_ADDRESS,
  SET_CART_LIST,
  SET_LOADING,
  SET_PAYMENT,
  TOGGLE_CHECK_ITEM,
  UPDATE_ADDRESS,
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
export const removeAddressAction = (address) => {
  return { type: REMOVE_ADDRESS, payload: address };
};
export const updateAddressAction = (address) => {
  return { type: UPDATE_ADDRESS, payload: address };
};
export const setLoading = (loading) => {
  return { type: SET_LOADING, payload: loading };
};
export const addCard = (card) => {
  return { type: ADD_CARDS, payload: card };
};

export const setAddressThunkAction = (formData) => (dispatch) => {
  const token = localStorage.getItem("token");
  instance
    .post("/user/address", formData, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => {
      dispatch(setAddress(res.data));
    })
    .catch((err) => console.log(err));
};

export const removeAddressThunkAction = (id) => (dispatch) => {
  const token = localStorage.getItem("token");
  instance
    .delete("/user/address/" + id, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => {
      dispatch(removeAddressAction(id));
      console.log(res.data);
      toast.success("Address deleted successfully");
    })
    .catch((err) => {
      toast.error("Error deleting address");
      console.error(err);
    });
};

export const updateAddressThunkAction = (formData) => (dispatch) => {
  const token = localStorage.getItem("token");
  dispatch(setLoading(true));
  instance
    .put(`/user/address`, formData, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => {
      dispatch(updateAddressAction(res.data));
      toast.success("Address updated successfully");
      dispatch(setLoading(false));
    })
    .catch((err) => {
      console.error(err.response);
      toast.error("Error updating address");
    });
};

export const addCardsThunkAction = (formData) => (dispatch) => {
  const token = localStorage.getItem("token");
  instance
    .post("/user/card", formData, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => {
      dispatch(addCard(res.data));
    });
};
