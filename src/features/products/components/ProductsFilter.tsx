import { ROUTES_PATHS } from '@/app/router';
import { Button } from '@/shared/ui';
import { useNavigate } from 'react-router-dom';
import { useProductsFilter } from '../hooks';

export const ProductsFilter = () => {
  const navigate = useNavigate();
  const { visibilityProducts, handleChangeProductsVisibility } =
    useProductsFilter();

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <label htmlFor="products-visibility" className="text-lg font-semibold">
          Products visibility:
        </label>
        <select
          id="products-visibility"
          value={visibilityProducts}
          onChange={handleChangeProductsVisibility}
          className="border rounded-lg p-1 cursor-pointer"
        >
          <option value="all">All</option>
          <option value="favorites">Favorites</option>
        </select>
      </div>
      <Button onClick={() => navigate(ROUTES_PATHS.CREATE_PRODUCT)}>
        Create product
      </Button>
    </div>
  );
};
