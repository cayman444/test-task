import { useAppDispatch, useAppSelector } from '@/app/store/store-hooks';
import type { ChangeEvent } from 'react';
import { type FilterParams, setFilter, setPagination } from '../model';

export const useProductsFilter = () => {
  const dispatch = useAppDispatch();
  const { status, visibilityProducts, gender, name } = useAppSelector(
    (state) => state.products.filter
  );

  const changeFilter = ({ key, value }: FilterParams) => {
    dispatch(setFilter({ key, value }));
    dispatch(setPagination({ currentPage: 1 }));
  };

  const changeSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter({ key: 'name', value: e.target.value }));
    dispatch(setPagination({ currentPage: 1 }));
  };

  return {
    visibilityProducts,
    status,
    gender,
    name,
    changeFilter,
    changeSearchValue,
  };
};
