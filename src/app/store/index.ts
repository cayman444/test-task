import { productReducer } from '@/features/product-details/model';
import { filtersReducer } from '@/features/products/model/filters';
import { productsReducer } from '@/features/products/model/products';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    product: productReducer,
    filters: filtersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
