export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const clearItemFromCart = (cartItems, cartItemToRemove) => {
  return cartItems.filter(item => item.id !== cartItemToRemove.id);
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingItem = cartItems.find(item => item.id === cartItemToRemove.id);

  if (existingItem.quantity === 1) {
    return clearItemFromCart(cartItems, cartItemToRemove);
  }

  return cartItems.map(item =>
    item.id !== cartItemToRemove.id
      ? item
      : { ...item, quantity: item.quantity - 1 }
  );
};
