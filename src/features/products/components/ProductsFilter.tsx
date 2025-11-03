import { ROUTES_PATHS } from '@/app/router';
import { Button } from '@/shared/ui';
import { useNavigate } from 'react-router-dom';
import { useProductsFilter } from '../hooks';
import { FilterSelect } from './FilterSelect';

export const ProductsFilter = () => {
  const navigate = useNavigate();
  const {
    visibilityProducts,
    status,
    gender,
    name,
    changeFilter,
    changeSearchValue,
  } = useProductsFilter();

  return (
    <div className="flex items-center justify-between flex-wrap gap-4">
      <div className="flex-1 flex items-center gap-4 flex-wrap">
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
          disabled={visibilityProducts === 'favorites'}
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
          disabled={visibilityProducts === 'favorites'}
          options={[
            { title: 'Male', value: 'male' },
            { title: 'Female', value: 'female' },
            { title: 'Genderless', value: 'genderless' },
            { title: 'unknown', value: 'unknown' },
          ]}
          onChange={changeFilter}
        />
        <input
          name="search"
          defaultValue={name}
          disabled={visibilityProducts === 'favorites'}
          onChange={changeSearchValue}
          placeholder="Enter name..."
          className={`flex-1 border-2 rounded text-gray-700 border-gray-300 focus:border-blue-500 outline-0 px-2 py-1 transition-colors ${visibilityProducts === 'favorites' && 'opacity-50'}`}
        />
      </div>
      <Button onClick={() => navigate(ROUTES_PATHS.CREATE_PRODUCT)}>
        Create
      </Button>
    </div>
  );
};
