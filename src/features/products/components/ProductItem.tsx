import type { Product } from '@/shared/api/types';
import type { FC } from 'react';
import { Link } from 'react-router-dom';

export const ProductItem: FC<Product> = ({ name, image, type, id }) => {
  return (
    <li className="h-full border rounded-lg">
      <Link to={`/products/${id}`}>
        <div className="flex flex-col gap-4">
          <div className="relative pt-[100%]">
            <img
              src={image}
              alt={type}
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-2 p-2">
            <h4 className="text-lg font-semibold line-clamp-1">
              <div>{name}</div>
            </h4>
          </div>
        </div>
      </Link>
    </li>
  );
};
