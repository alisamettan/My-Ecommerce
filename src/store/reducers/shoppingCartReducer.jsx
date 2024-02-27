export const SET_CART_LIST = "SET_CART_LIST";
export const SET_PAYMENT = "SET_PAYMENT";
export const SET_ADDRESS = "SET_ADDRESS";
export const DECREMENT_CART_ITEM = "DECREMENT_CART_ITEM";

const shoppingCart = {
  cartList: [],
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

        return { ...state, cartList: updatedCartList };
      } else {
        return {
          ...state,
          cartList: [
            ...state.cartList,
            { count: 1, checked: true, ...action.payload },
          ],
        };
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

      return { ...state, cartList: updatedCart };
    case SET_PAYMENT:
      return { ...state, payment: action.payload };
    case SET_ADDRESS:
      return { ...state, address: action.payload };

    default:
      return state;
  }
};
