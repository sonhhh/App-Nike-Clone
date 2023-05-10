import {createSelector, createSlice} from '@reduxjs/toolkit';
const initialState = {
  items: [],
  deliveryFee: 15,
  FreeDeliveryFrom: 200,
};
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      const newProduct = action.payload.product;
      const cartItem = state.items.find(item => item.id === newProduct.id);
      state.items.push({product: newProduct, quantity: 1});
      if (cartItem) {
        cartItem.quantity += 1;
      } else {
        state.items.push({product: newProduct, quantity: 1});
      }
    },
    changeQuantity: (state, action) => {
      const {productId, amount} = action.payload;
      const cartItem = state.items.find(
        (item: any) => item.product.id === productId,
      );
      if (cartItem) {
        cartItem.quantity += amount;
      }

      if (cartItem.quantity <= 0) {
        state.items = state.items.filter(item => item !== cartItem);
      }
    },
  },
});
export const selectNumberOfItems = (state: any) => state.cart.items.length;
export const selectSubtotal = (state: any) =>
  state.cart.items.reduce(
    (sum, cartItem) => sum + cartItem.product.price * cartItem.quantity,
    0,
  );
const cartSlector = state => state.cart;
export const selectDeliveryPrice = createSelector(
  cartSlector,
  selectSubtotal,
  (cart, subtotal) => (subtotal > cart.FreeDeliveryFrom ? 0 : cart.deliveryFee),
);
export const selectTotal = createSelector(
  selectSubtotal,
  selectDeliveryPrice,
  (subtatol, delivery) => subtatol + delivery,
);
