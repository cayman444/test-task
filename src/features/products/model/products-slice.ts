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
  reducers: {
    toggleLike: (state, { payload }: PayloadAction<number>) => {
      const product = state.productsList.find((p) => p.id === payload);

      if (product) {
        product.isLiked = !product.isLiked;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, { payload }: PayloadAction<Products>) => {
          state.productsList = payload.results.map((product) => ({
            ...product,
            isLiked: false,
          }));

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

export const { toggleLike } = productsSlice.actions;
export default productsSlice.reducer;
