import { EmptyResponse, ErrorMessage, Spinner } from '@/shared/ui';
import { useProductsList } from '../hooks';
import { ProductItem } from './ProductItem';

export const ProductsList = () => {
  const { productsList, isLoading, error } = useProductsList();

  if (isLoading) return <Spinner />;
  if (error) return <ErrorMessage error={error} />;
  if (!productsList.length) return <EmptyResponse />;

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {productsList.map((params) => (
        <ProductItem key={params.id} {...params} />
      ))}
    </ul>
  );
};
