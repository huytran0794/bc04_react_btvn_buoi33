import { ADD_TO_CART } from "../constant/const";
export const addToCartAction = (shoe) => ({
  type: ADD_TO_CART,
  payload: shoe,
});
