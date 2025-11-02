import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { useProductItem } from '../hooks';
import { type ProductTransform } from '../model';
import { ArrowIcon, DeleteIcon, LikeIcon } from '../ui';

export const ProductItem: FC<ProductTransform> = ({
  name,
  image,
  type,
  id,
  isLiked,
}) => {
  const { handleChangeLike, handleDeleteProduct } = useProductItem(id);

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
        <div className="flex items-center justify-between gap-2 p-2 border-t">
          <div className="flex items-center gap-2">
            <LikeIcon onClick={handleChangeLike} isLiked={isLiked} />
            <DeleteIcon onClick={handleDeleteProduct} />
          </div>
          <Link to={`/products/${id}`}>
            <ArrowIcon className="rotate-180" />
          </Link>
        </div>
      </div>
    </li>
  );
};
