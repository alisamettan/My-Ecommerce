export const SET_CART_LIST = "SET_CART_LIST";
export const SET_PAYMENT = "SET_PAYMENT";
export const SET_ADDRESS = "SET_ADDRESS";
export const DECREMENT_CART_ITEM = "DECREMENT_CART_ITEM";
export const TOGGLE_CHECK_ITEM = "TOGGLE_CHECK_ITEM";
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";
export const REMOVE_ADDRESS = "REMOVE_ADDRESS";
export const UPDATE_ADDRESS = "UPDATE_ADDRESS";
export const SET_LOADING = "SET_LOADING";
export const ADD_CARDS = "ADD_CARDS";
export const SET_SELECTED_CARD = "SET_SELECTED_CARD";

const storedCartList = JSON.parse(localStorage.getItem("cartList")) || [];
const shoppingCart = {
  cartList: storedCartList,
  payment: {},
  address: [],
  cards: [],
  loading: false,
  checkedCard: {},
};

export const shoppingCartReducer = (state = shoppingCart, action) => {
  switch (action.type) {
    case SET_CART_LIST:
      const existingProductIndex = state.cartList.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingProductIndex !== -1) {
        const updatedCartList = [...state.cartList];
        updatedCartList[existingProductIndex].count += 1;
        updatedCartList[existingProductIndex].checked = true;

        localStorage.setItem("cartList", JSON.stringify(updatedCartList));

        return { ...state, cartList: updatedCartList };
      } else {
        const updatedCartList = [
          ...state.cartList,
          { count: 1, checked: true, ...action.payload },
        ];

        localStorage.setItem("cartList", JSON.stringify(updatedCartList));

        return { ...state, cartList: updatedCartList };
      }
    case DECREMENT_CART_ITEM:
      const updatedCart = state.cartList
        .map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, count: Math.max(0, item.count - 1) };
          }
          return item;
        })
        .filter((item) => item.count > 0);

      localStorage.setItem("cartList", JSON.stringify(updatedCart));

      return { ...state, cartList: updatedCart };

    case REMOVE_CART_ITEM:
      const updatedCartAfterRemove = state.cartList.filter(
        (item) => item.id !== action.payload.id
      );

      return { ...state, cartList: updatedCartAfterRemove };
    case TOGGLE_CHECK_ITEM:
      const toggledCart = state.cartList.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, checked: !item.checked };
        }
        return item;
      });

      return { ...state, cartList: toggledCart };
    case SET_PAYMENT:
      return { ...state, payment: action.payload };
    case SET_ADDRESS:
      console.log("SET_ADDRESS action payload:", action.payload);
      return { ...state, address: [...state.address, ...action.payload] };
    case REMOVE_ADDRESS:
      const updatedAddressList = state.address.filter(
        (item) => item.id !== action.payload.id
      );

      return { ...state, address: updatedAddressList };
    case UPDATE_ADDRESS:
      return {
        ...state,
        address: state.address.map((address) =>
          address.id === action.payload.id
            ? { ...address, ...action.payload }
            : address
        ),
      };
    case ADD_CARDS:
      return { ...state, cards: [...state.cards, action.payload] };
    case SET_SELECTED_CARD:
      return {
        ...state,
        checkedCard: action.payload,
      };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
