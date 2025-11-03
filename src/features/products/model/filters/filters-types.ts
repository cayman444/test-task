import type { Product } from '@/shared/api/types';

export interface Filter {
  status?: ProductStatus;
  gender?: ProductGender;
  visibilityProducts?: VisibilityProducts;
  name?: string;
}

export interface FilterParams {
  type: keyof Filter;
  value: Filter[keyof Filter];
}

export type VisibilityProducts = 'all' | 'favorites';
export type ProductGender = Product['gender'];
export type ProductStatus = Product['status'];
