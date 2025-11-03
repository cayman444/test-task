import { useAppDispatch, useAppSelector } from '@/app/store/store-hooks';
import { fetchProducts } from '@/shared/api/products-api';
import { useDebounce } from '@/shared/hooks';
import { useEffect } from 'react';

export const useProductsList = () => {
  const dispatch = useAppDispatch();
  const { productsList, isLoading, error, favoritesProducts } = useAppSelector(
    (state) => state.products
  );
  const { currentPage } = useAppSelector((state) => state.products.pagination);
  const { visibilityProducts, gender, status, name } = useAppSelector(
    (state) => state.filters
  );

  const productsVisibilityList =
    visibilityProducts === 'all' ? productsList : favoritesProducts;

  const debounceName = useDebounce(name, 300);

  useEffect(() => {
    dispatch(
      fetchProducts({ page: currentPage, gender, status, name: debounceName })
    );
  }, [dispatch, currentPage, gender, status, debounceName]);

  return { productsList: productsVisibilityList, isLoading, error };
};
