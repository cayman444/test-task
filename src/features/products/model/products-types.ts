import type { ProductList } from '@/shared/api/types';

export interface ProductsState {
  isLoading: boolean;
  error: string | null;
  productsList: ProductList;
}
