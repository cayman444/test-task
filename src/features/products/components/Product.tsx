import { ROUTES_PATHS } from '@/app/router';
import { Link } from 'react-router-dom';

export const Product = () => {
  return (
    <li className="h-full border rounded-lg">
      <Link to={ROUTES_PATHS.PRODUCTS}>
        <div className="flex flex-col gap-4 p-2">
          <div className="relative pt-[150%]">
            <img
              src="./vite.svg"
              alt="img"
              className="absolute inset-0 w-full h-full object-contain rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-lg font-semibold line-clamp-2">
              <div>description</div>
            </h4>
          </div>
        </div>
      </Link>
    </li>
  );
};
