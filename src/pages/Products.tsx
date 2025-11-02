import { ProductsFilter, ProductsList } from '@/features/products/components';

export const Products = () => {
  return (
    <div className="flex flex-col gap-5 my-30">
      <ProductsFilter />
      <ProductsList />
    </div>
  );
};
