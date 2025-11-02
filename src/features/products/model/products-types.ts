import type { Product } from '@/shared/api/types';

export interface ProductTransform extends Product {
  isLiked: boolean;
}

export interface ProductsState {
  isLoading: boolean;
  error: string | null;
  visibilityProducts: VisibilityProducts;
  productsList: ProductTransform[];
  localProducts: ProductTransform[];
  favoritesProducts: ProductTransform[];
  pagination: Pagination;
}

export interface Pagination {
  totalPages?: number | null;
  currentPage: number;
}

export type VisibilityProducts = 'all' | 'favorites';
