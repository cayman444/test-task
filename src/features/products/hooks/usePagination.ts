import { useAppDispatch, useAppSelector } from '@/app/store/store-hooks';
import { setPagination } from '../model/products';

export const usePagination = () => {
  const dispatch = useAppDispatch();
  const visibilityProducts = useAppSelector(
    (state) => state.filters.visibilityProducts
  );
  const { currentPage, totalPages } = useAppSelector(
    (state) => state.products.pagination
  );

  if (!totalPages || totalPages === 1 || visibilityProducts === 'favorites')
    return;

  const handlePrevPage = () => {
    dispatch(setPagination({ currentPage: currentPage - 1 }));
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      dispatch(setPagination({ currentPage: currentPage + 1 }));
    }
  };

  const setPage = (index: number) => {
    dispatch(setPagination({ currentPage: index + 1 }));
  };

  const pages = [...Array(totalPages)];

  return {
    pages,
    currentPage,
    totalPages,
    handlePrevPage,
    handleNextPage,
    setPage,
  };
};
