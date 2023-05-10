import {createSlice} from '@reduxjs/toolkit';
import products from '../data/products';
const initialState = {
  products: products,
  selectedProducts: null,
};
export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSelectedProducts: (state, action) => {
      const productsId = action.payload;
      state.selectedProducts = state.products.find(p => p.id === productsId);
    },
  },
});
