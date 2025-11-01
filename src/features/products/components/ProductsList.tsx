import { useAppSelector } from '@/app/store/store-hooks';
import { Spinner } from '@/shared/ui';
import { ProductItem } from './ProductItem';

export const ProductsList = () => {
  const { productsList, isLoading, error } = useAppSelector(
    (state) => state.products
  );

  return (
    <ul className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5 my-30">
      {isLoading && <Spinner />}
      {error && (
        <div className="text-center font-medium text-red-500">{error}</div>
      )}
      {productsList.map((params) => (
        <ProductItem key={params.id} {...params} />
      ))}
    </ul>
  );
};
