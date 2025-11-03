import { useAppDispatch } from '@/app/store/store-hooks';
import {
  type ProductTransform,
  deleteProduct,
  toggleLike,
} from '../model/products';

export const useProductItem = (product: ProductTransform) => {
  const dispatch = useAppDispatch();

  const handleChangeLike = () => {
    dispatch(toggleLike(product));
  };

  const handleDeleteProduct = () => {
    dispatch(deleteProduct(product.id));
  };

  return { handleChangeLike, handleDeleteProduct };
};
