import { useAppDispatch, useAppSelector } from '@/app/store/store-hooks';
import { Button } from '@/shared/ui';
import clsx from 'clsx';
import { setPagination } from '../model';

export const Pagination = () => {
  const dispatch = useAppDispatch();
  const { visibilityProducts } = useAppSelector((state) => state.products);
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

  const pages = [...Array(totalPages)];

  return (
    <div className="flex items-center gap-4 overflow-auto pb-2">
      <Button
        className={clsx(
          {
            'pointer-events-none opacity-50': currentPage === 1,
          },
          'flex justify-center items-center w-10'
        )}
        onClick={handlePrevPage}
      >
        {'<'}
      </Button>
      <div className="flex  justify-center items-center gap-2">
        {pages.map((_, ind) => (
          <Button
            key={ind}
            className={clsx(
              {
                'pointer-events-none opacity-50': ind + 1 === currentPage,
              },
              'flex justify-center items-center w-10'
            )}
            onClick={() => dispatch(setPagination({ currentPage: ind + 1 }))}
          >
            {ind + 1}
          </Button>
        ))}
      </div>
      <Button
        className={clsx(
          {
            'pointer-events-none opacity-50': currentPage === totalPages,
          },
          'flex justify-center items-center w-10'
        )}
        onClick={handleNextPage}
      >
        {'>'}
      </Button>
    </div>
  );
};
