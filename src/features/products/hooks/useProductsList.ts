import { useAppDispatch, useAppSelector } from '@/app/store/store-hooks';
import { fetchProducts } from '@/shared/api/products-api';
import { useEffect } from 'react';

export const useProductsList = () => {
  const {
    productsList,
    isLoading,
    error,
    visibilityProducts,
    favoritesProducts,
  } = useAppSelector((state) => state.products);
  const { currentPage } = useAppSelector((state) => state.products.pagination);
  const dispatch = useAppDispatch();

  const productsVisibilityList =
    visibilityProducts === 'all' ? productsList : favoritesProducts;

  useEffect(() => {
    dispatch(fetchProducts(currentPage));
  }, [dispatch, currentPage]);

  return { productsList: productsVisibilityList, isLoading, error };
};
