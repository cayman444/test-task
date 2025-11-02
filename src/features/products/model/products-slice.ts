import { fetchProducts } from '@/shared/api/products-api';
import type { Products } from '@/shared/api/types';
import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import type {
  ProductTransform,
  ProductsState,
  VisibilityProducts,
} from './products-types';

const initialState: ProductsState = {
  isLoading: false,
  error: null,
  visibilityProducts: 'all',
  productsList: [],
  favoritesProducts: [],
  localProducts: [],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    toggleLike: (state, { payload }: PayloadAction<ProductTransform>) => {
      const productId = payload.id;

      const favoriteIndex = state.favoritesProducts.findIndex(
        (p) => p.id === productId
      );

      if (favoriteIndex === -1) {
        state.favoritesProducts.push({
          ...payload,
          isLiked: true,
        });
      } else {
        state.favoritesProducts.splice(favoriteIndex, 1);
      }

      const currentProduct = state.productsList.find((p) => p.id === productId);
      if (currentProduct) {
        currentProduct.isLiked = !currentProduct.isLiked;
      }

      const localProduct = state.localProducts.find((p) => p.id === productId);
      if (localProduct) {
        localProduct.isLiked = !localProduct.isLiked;
      }
    },
    deleteProduct: (state, { payload }: PayloadAction<number>) => {
      state.productsList = state.productsList.filter((p) => p.id !== payload);
      state.localProducts = state.localProducts.filter((p) => p.id !== payload);
      state.favoritesProducts = state.favoritesProducts.filter(
        (p) => p.id !== payload
      );
    },
    changeVisibilityProducts: (
      state,
      { payload }: PayloadAction<VisibilityProducts>
    ) => {
      state.visibilityProducts = payload;
    },
    createProduct: (state, { payload }: PayloadAction<ProductTransform>) => {
      state.localProducts.push(payload);
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
            isLiked: state.favoritesProducts.some((p) => p.id === product.id),
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

export const {
  toggleLike,
  deleteProduct,
  changeVisibilityProducts,
  createProduct,
} = productsSlice.actions;
export default productsSlice.reducer;
