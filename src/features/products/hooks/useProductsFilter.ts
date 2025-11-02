import { useAppDispatch, useAppSelector } from '@/app/store/store-hooks';
import type { ChangeEvent } from 'react';
import { type VisibilityProducts, changeVisibilityProducts } from '../model';

export const useProductsFilter = () => {
  const dispatch = useAppDispatch();
  const visibilityProducts = useAppSelector(
    (state) => state.products.visibilityProducts
  );

  const handleChangeProductsVisibility = (
    e: ChangeEvent<HTMLSelectElement>
  ) => {
    dispatch(changeVisibilityProducts(e.target.value as VisibilityProducts));
  };

  return { visibilityProducts, handleChangeProductsVisibility };
};
