import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
  isProductGender,
  isProductStatus,
  isVisibilityProducts,
} from './filters-guards';
import type { Filter, FilterParams } from './filters-types';

const initialState: Filter = {
  status: 'Alive',
  visibilityProducts: 'all',
  gender: 'Male',
  name: '',
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilter: (
      state,
      { payload: { type, value } }: PayloadAction<FilterParams>
    ) => {
      if (type === 'visibilityProducts' && isVisibilityProducts(value)) {
        state.visibilityProducts = value;
      }

      if (type === 'gender' && isProductGender(value)) {
        state.gender = value;
      }

      if (type === 'name' && typeof value === 'string') {
        state.name = value;
      }

      if (type === 'status' && isProductStatus(value)) {
        state.status = value;
      }
    },
  },
});

export const { setFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
