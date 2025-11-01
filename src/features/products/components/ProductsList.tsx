import { useAppSelector } from '@/app/store/store-hooks';
import { ProductItem } from './ProductItem';

export const ProductsList = () => {
  const productsList = useAppSelector((state) => state.products.productsList);

  return (
    <ul className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5 my-30">
      {productsList.map((params) => (
        <ProductItem key={params.id} {...params} />
      ))}
    </ul>
  );
};
