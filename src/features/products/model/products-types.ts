import type { Product } from '@/shared/api/types';

export interface ProductTransform extends Product {
  isLiked: boolean;
}

export interface ProductsState {
  isLoading: boolean;
  error: string | null;
  visibilityProducts: VisibilityProducts;
  productsList: ProductTransform[];
}

export type VisibilityProducts = 'all' | 'favorites';
