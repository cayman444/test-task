import { Product } from './Product';

export const ProductsList = () => {
  return (
    <ul className="grid grid-cols-6 gap-5 bg-white/50 p-5 rounded shadow mt-30">
      <Product />
      <Product />
      <Product />
    </ul>
  );
};
