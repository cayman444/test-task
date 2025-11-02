import { useAppSelector } from '@/app/store/store-hooks';
import { useMemo } from 'react';

export const useProductsList = () => {
  const { productsList, isLoading, error, visibilityProducts } = useAppSelector(
    (state) => state.products
  );

  const productsVisibilityList = useMemo(() => {
    return productsList.filter(({ isLiked }) => {
      if (visibilityProducts === 'all') return true;
      if (visibilityProducts === 'favorites' && isLiked) return true;

      return false;
    });
  }, [productsList, visibilityProducts]);

  return { productsList: productsVisibilityList, isLoading, error };
};
