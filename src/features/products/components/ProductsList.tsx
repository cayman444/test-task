import { useAppSelector } from '@/app/store/store-hooks';
import { Product } from './Product';

export const ProductsList = () => {
  const productsList = useAppSelector((state) => state.products.productsList);

  return (
    <ul className="grid grid-cols-6 gap-5 bg-white/50 p-5 rounded shadow mt-30">
      {productsList.map(({ id }) => (
        <Product key={id} />
      ))}
    </ul>
  );
};
