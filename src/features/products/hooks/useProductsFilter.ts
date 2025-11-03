import { useAppDispatch, useAppSelector } from '@/app/store/store-hooks';
import type { ChangeEvent } from 'react';
import { type FilterParams, setFilter } from '../model/filters';
import { setPagination } from '../model/products';

export const useProductsFilter = () => {
  const dispatch = useAppDispatch();
  const { status, visibilityProducts, gender, name } = useAppSelector(
    (state) => state.filters
  );

  const changeFilter = ({ type, value }: FilterParams) => {
    dispatch(setFilter({ type, value }));
    dispatch(setPagination({ currentPage: 1 }));
  };

  const changeSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter({ type: 'name', value: e.target.value }));
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
