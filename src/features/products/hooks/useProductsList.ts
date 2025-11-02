import { useAppSelector } from '@/app/store/store-hooks';

export const useProductsList = () => {
  const {
    productsList,
    isLoading,
    error,
    visibilityProducts,
    favoritesProducts,
  } = useAppSelector((state) => state.products);

  const productsVisibilityList =
    visibilityProducts === 'all' ? productsList : favoritesProducts;

  return { productsList: productsVisibilityList, isLoading, error };
};
