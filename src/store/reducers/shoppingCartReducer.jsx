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
      const existingProductIndex = state.cartList.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingProductIndex !== -1) {
        // If the product already exists in the cart, update the count and checked
        const updatedCartList = [...state.cartList];
        updatedCartList[existingProductIndex].count += 1;
        updatedCartList[existingProductIndex].checked = true;

        return { ...state, cartList: updatedCartList };
      } else {
        // If the product doesn't exist in the cart, add a new entry
        return {
          ...state,
          cartList: [
            ...state.cartList,
            { count: 1, checked: true, ...action.payload },
          ],
        };
      }
    case SET_PAYMENT:
      return { ...state, payment: action.payload };
    case SET_ADDRESS:
      return { ...state, address: action.payload };

    default:
      return state;
  }
};
