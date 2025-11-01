import { useAppDispatch } from '@/app/store/store-hooks';
import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { type ProductTransform, toggleLike } from '../model';
import { DeleteIcon, LikeIcon } from '../ui';

export const ProductItem: FC<ProductTransform> = ({
  name,
  image,
  type,
  id,
  isLiked,
}) => {
  const dispatch = useAppDispatch();
  const handleChangeLike = () => {
    dispatch(toggleLike(id));
  };

  return (
    <li className="h-full border rounded-lg">
      <div className="flex flex-col h-full">
        <Link to={`/products/${id}`}>
          <div className="flex flex-col ">
            <div className="relative pt-[100%]">
              <img
                src={image}
                alt={type}
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="p-2">
              <h4 className="text-lg font-semibold line-clamp-1">{name}</h4>
            </div>
          </div>
        </Link>
        <div className="flex items-center gap-2 p-2 border-t">
          <LikeIcon onClick={handleChangeLike} isLiked={isLiked} />
          <DeleteIcon />
        </div>
      </div>
    </li>
  );
};
