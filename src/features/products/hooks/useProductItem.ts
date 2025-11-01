import { useAppDispatch } from '@/app/store/store-hooks';
import { deleteProduct, toggleLike } from '../model';

export const useProductItem = (id: number) => {
  const dispatch = useAppDispatch();

  const handleChangeLike = () => {
    dispatch(toggleLike(id));
  };

  const handleDeleteProduct = () => {
    dispatch(deleteProduct(id));
  };

  return { handleChangeLike, handleDeleteProduct };
};
