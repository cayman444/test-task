import { useAppDispatch, useAppSelector } from '@/app/store/store-hooks';
import { fetchProducts } from '@/shared/api/products-api';
import { useEffect } from 'react';

export const useProductsList = () => {
  const { productsList, isLoading, error, favoritesProducts } = useAppSelector(
    (state) => state.products
  );
  const { currentPage } = useAppSelector((state) => state.products.pagination);
  const { visibilityProducts, gender, status } = useAppSelector(
    (state) => state.products.filter
  );
  const dispatch = useAppDispatch();

  const productsVisibilityList =
    visibilityProducts === 'all' ? productsList : favoritesProducts;

  useEffect(() => {
    dispatch(fetchProducts({ page: currentPage, gender, status }));
  }, [dispatch, currentPage, gender, status]);

  return { productsList: productsVisibilityList, isLoading, error };
};
