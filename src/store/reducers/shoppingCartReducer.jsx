export const SET_CART_LIST = "SET_CART_LIST";
export const SET_PAYMENT = "SET_PAYMENT";
export const SET_ADDRESS = "SET_ADDRESS";
export const DECREMENT_CART_ITEM = "DECREMENT_CART_ITEM";
export const TOGGLE_CHECK_ITEM = "TOGGLE_CHECK_ITEM";
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";

const storedCartList = JSON.parse(localStorage.getItem("cartList")) || [];
const shoppingCart = {
  cartList: storedCartList,
  payment: {},
  address: [],
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

      localStorage.setItem("cartList", JSON.stringify(updatedCartAfterRemove));

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
      return { ...state, address: action.payload };

    default:
      return state;
  }
};
