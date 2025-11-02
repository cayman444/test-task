import { Button } from '@/shared/ui';
import clsx from 'clsx';
import { usePagination } from '../hooks';

export const Pagination = () => {
  const data = usePagination();
  if (!data) return;

  const {
    pages,
    currentPage,
    totalPages,
    handleNextPage,
    handlePrevPage,
    setPage,
  } = data;

  return (
    <div className="flex items-center gap-4 overflow-auto pb-2 justify-center">
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
            onClick={() => setPage(ind)}
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
