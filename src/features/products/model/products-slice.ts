import { createSlice } from '@reduxjs/toolkit';
import type { ProductsState } from './products-types';

const initialState: ProductsState = {
  products: [],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
