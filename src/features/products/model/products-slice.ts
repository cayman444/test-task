import { fetchProducts } from '@/shared/api/products-api';
import type { Products } from '@/shared/api/types';
import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { ProductsState } from './products-types';

const initialState: ProductsState = {
  isLoading: false,
  error: null,
  productsList: [],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, { payload }: PayloadAction<Products>) => {
          state.productsList = payload.results;
          state.isLoading = false;
          state.error = null;
        }
      )
      .addCase(fetchProducts.rejected, (state, { payload }) => {
        state.error = payload ?? 'unknown fetch products error';
        state.isLoading = false;
        state.productsList = [];
      });
  },
});

export default productsSlice.reducer;
