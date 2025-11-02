import { fetchProduct } from '@/shared/api/products-api';
import type { Product } from '@/shared/api/types';
import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { ProductState } from './product-details.types';

const initialState: ProductState = {
  isLoading: false,
  error: null,
  productDetails: null,
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        fetchProduct.fulfilled,
        (state, { payload }: PayloadAction<Product>) => {
          state.productDetails = payload;

          state.isLoading = false;
          state.error = null;
        }
      )
      .addCase(fetchProduct.rejected, (state, { payload }) => {
        state.error = payload ?? 'unknown fetch product error';
        state.isLoading = false;
        state.productDetails = null;
      });
  },
});

export default productSlice.reducer;
