import type { FC } from 'react';

interface ProductInfoItemProps {
  title: string;
  text: string;
}

export const ProductInfoItem: FC<ProductInfoItemProps> = ({ title, text }) => {
  return (
    <li className="flex items-center gap-1 border-b-2 border-gray-200 pb-2">
      <h2 className="text-gray-800 font-medium">{title}:</h2>
      <p className="text-gray-700">{text}</p>
    </li>
  );
};
