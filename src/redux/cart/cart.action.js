import { CartActionType } from './cart.action.type';

export const toggleCartHidden = () => {
  return {
    type: CartActionType.TOGGLE_CART_HIDDEN
  };
};
export const addItem = item => {
  return {
    type: CartActionType.ADD_ITEM,
    payload: item
  };
};
export const removeItem = item => ({
  type: CartActionType.REMOVE_ITEM,
  payload: item
});
export const clearItem = item => {
  return {
    type: CartActionType.CLEAR_ITEM_FROM_CART,
    payload: item
  };
};
