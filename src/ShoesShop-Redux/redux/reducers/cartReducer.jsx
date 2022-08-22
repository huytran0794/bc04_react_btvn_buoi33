import {
  ADD_TO_CART,
  CLOSE_CART,
  DECREASE_ITEM_CART,
  INCREASE_ITEM_CART,
  VIEW_CART,
} from "../constant/const";

const initialState = {
  cart: [],
  open: false,
};

export let cartReducer = (state = initialState, { type, payload }) => {
  let idx = -1;
  switch (type) {
    case ADD_TO_CART:
      idx = state.cart.findIndex((item) => item.id === payload.id);
      if (idx === -1) {
        state.cart = [...state.cart, { ...payload, quantity: 1 }];
      } else {
        state.cart[idx].quantity++;
        state.cart = [...state.cart];
      }
      return { ...state };
    case VIEW_CART:
      return { ...state, open: true };
    case CLOSE_CART:
      console.log("Inside close cart reducer now");
      return { ...state, open: false };
    case INCREASE_ITEM_CART:
      idx = state.cart.findIndex((item) => item.id === payload.id);
      if (idx > -1) {
        state.cart[idx].quantity++;
      }
      return { ...state, cart: [...state.cart] };
    case DECREASE_ITEM_CART:
      idx = state.cart.findIndex((item) => item.id === payload.id);
      if (idx > -1) {
        state.cart[idx].quantity--;
        if (state.cart[idx].quantity === 0) {
          state.cart.splice(idx, 1);
          return { ...state, cart: [...state.cart] };
        }
      }
      return { ...state, cart: [...state.cart] };
    default:
      return state;
  }
};
