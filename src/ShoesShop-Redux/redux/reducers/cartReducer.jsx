import { ADD_TO_CART } from "../constant/const";

const initialState = {
  cart: [],
  isOpened: false,
};

export let cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      let idx = state.cart.findIndex((item) => item.id === payload.id);
      if (idx === -1) {
        state.cart = [...state.cart, { ...payload, quantity: 1 }];
      } else {
        state.cart[idx].quantity++;
        state.cart = [...state.cart];
      }
      return { ...state };

    default:
      return state;
  }
};
