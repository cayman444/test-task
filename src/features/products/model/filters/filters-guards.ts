import type {
  ProductGender,
  ProductStatus,
  VisibilityProducts,
} from './filters-types';

export const isVisibilityProducts = (
  value: unknown
): value is VisibilityProducts => {
  return value === 'all' || value === 'favorites';
};

export const isProductGender = (value: unknown): value is ProductGender => {
  return (
    value === 'female' ||
    value === 'male' ||
    value === 'genderless' ||
    value === 'unknown'
  );
};

export const isProductStatus = (value: unknown): value is ProductStatus => {
  return value === 'unknown' || value === 'alive' || value === 'dead';
};
