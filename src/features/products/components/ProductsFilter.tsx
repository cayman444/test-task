import { ROUTES_PATHS } from '@/app/router';
import { Button } from '@/shared/ui';
import { useNavigate } from 'react-router-dom';
import { useProductsFilter } from '../hooks';
import { FilterSelect } from './FilterSelect';

export const ProductsFilter = () => {
  const navigate = useNavigate();
  const { visibilityProducts, status, gender, changeFilter } =
    useProductsFilter();

  return (
    <div className="flex items-center justify-between flex-wrap gap-4">
      <div className="flex items-center gap-4 flex-wrap">
        <FilterSelect
          title="Visibility"
          name="visibilityProducts"
          value={visibilityProducts}
          options={[
            { title: 'All', value: 'all' },
            { title: 'Favorites', value: 'favorites' },
          ]}
          onChange={changeFilter}
        />
        <FilterSelect
          title="Status"
          name="status"
          value={status}
          options={[
            { title: 'Alive', value: 'alive' },
            { title: 'Dead', value: 'dead' },
            { title: 'unknown', value: 'unknown' },
          ]}
          onChange={changeFilter}
        />
        <FilterSelect
          title="Gender"
          name="gender"
          value={gender}
          options={[
            { title: 'Male', value: 'male' },
            { title: 'Female', value: 'female' },
            { title: 'Genderless', value: 'genderless' },
            { title: 'unknown', value: 'unknown' },
          ]}
          onChange={changeFilter}
        />
      </div>
      <Button onClick={() => navigate(ROUTES_PATHS.CREATE_PRODUCT)}>
        Create product
      </Button>
    </div>
  );
};
