import { useAppSelector } from '@/app/store/store-hooks';
import { ProductItem } from './ProductItem';

export const LocalProductsList = () => {
  const { localProducts } = useAppSelector((state) => state.products);
  const { visibilityProducts } = useAppSelector((state) => state.filters);

  if (!localProducts.length || visibilityProducts === 'favorites') return;

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-2xl font-semibold">Local create:</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {localProducts.map((params) => (
          <ProductItem key={params.id} {...params} />
        ))}
      </ul>
    </div>
  );
};
