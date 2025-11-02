import type { Product } from '@/shared/api/types';

export interface ProductState {
  isLoading: boolean;
  error: string | null;
  productDetails: Product | null;
}
