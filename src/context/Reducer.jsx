export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((p) => p.id !== action.payload.id),
      };
    case "INCREMENT_PRODUCT":
      return {
        ...state,
        cart: state.cart.map((product) =>
          product.id === action.payload.id
            ? { ...product, qty: product.qty + 1 }
            : product
        ),
      };
    case "DECREMENT_PRODUCT":
      return {
        ...state,
        cart: state.cart.map((product) =>
          product.id === action.payload.id && product.qty > 1
            ? { ...product, qty: product.qty - 1 }
            : product
        ),
      };
    default:
      return state;
  }
};
