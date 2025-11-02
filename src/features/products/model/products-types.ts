import type { Product } from '@/shared/api/types';

export interface ProductTransform extends Product {
  isLiked: boolean;
}

export interface ProductsState {
  isLoading: boolean;
  error: string | null;
  productsList: ProductTransform[];
  localProducts: ProductTransform[];
  favoritesProducts: ProductTransform[];
  pagination: Pagination;
  filter: Filter;
}

export interface Pagination {
  totalPages?: number | null;
  currentPage: number;
}

export interface Filter {
  status?: Product['status'];
  gender?: Product['gender'];
  visibilityProducts?: VisibilityProducts;
}

export interface FilterParams {
  key: keyof Filter;
  value: string;
}

export type VisibilityProducts = 'all' | 'favorites';
