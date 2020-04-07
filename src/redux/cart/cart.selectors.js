import { createSelector } from "reselect";

// here basically we are pulling only the cart state from the state
const selectCart = state => state.cart;

// selecting the only the CartItems from the cart state
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.CartItems
);

//Now from the above selectCartItems we are getting the counts using the reduce
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);
