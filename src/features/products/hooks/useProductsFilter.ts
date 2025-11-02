import { useAppDispatch, useAppSelector } from '@/app/store/store-hooks';
import { type FilterParams, setFilter, setPagination } from '../model';

export const useProductsFilter = () => {
  const dispatch = useAppDispatch();
  const { status, visibilityProducts, gender } = useAppSelector(
    (state) => state.products.filter
  );

  const changeFilter = ({ key, value }: FilterParams) => {
    dispatch(setFilter({ key, value }));
    dispatch(setPagination({ currentPage: 1 }));
  };

  return {
    visibilityProducts,
    status,
    gender,
    changeFilter,
  };
};
