import * as type from "./typeActions";

const initState = {
  cart: []
};
export default function reducer(state = initState, action) {
  switch (action.type) {
    case type.ADD_PRODUCT:
      return { ...state, cart: [...state.cart, action.payload] };

    case type.REMOVE_PRODUCT:
      return {
        ...state,
        cart: [
          ...state.cart.filter(
            (product) => product._id !== action.payload._id
          ),
        ],
      };

    case type.INCREMENT_QNT:
      return {
        ...state,
        cart: [
          ...state.cart.map((product) => {
            if (product._id === action.payload._id) {
              return { ...product, quantity: product.quantity + 1 };
            } else {
              return product
            }
          }),
        ],
      };

    case type.DECREMENT_QNT:
      return {
        ...state,
        cart: [
          ...state.cart.map((product) => {
            if (
              product._id === action.payload._id &&
              product.quantity > 1
            ) {
              return { ...product, quantity: product.quantity - 1 };
            } else {
              return product
            }
          }
          ),
        ],
      };

    case type.EMPTY_CART:
      return { ...state, cart: [] }
    default:
  return state;
}
}
