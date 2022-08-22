import {
  ADD_TO_CART,
  CLOSE_CART,
  DECREASE_ITEM_CART,
  INCREASE_ITEM_CART,
  VIEW_CART,
} from "../constant/const";
export const addToCartAction = (shoe) => ({
  type: ADD_TO_CART,
  payload: shoe,
});

export const viewCartAction = () => ({
  type: VIEW_CART,
});

export const closeCartAction = () => ({
  type: CLOSE_CART,
});

export const increaseCartAction = (shoe) => ({
  type: INCREASE_ITEM_CART,
  payload: shoe,
});

export const decreaseCartAction = (shoe) => ({
  type: DECREASE_ITEM_CART,
  payload: shoe,
});
