import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { axiosInstance } from './instance';
import type { Products } from './types';

export const fetchProducts = createAsyncThunk<
  Products,
  undefined,
  { rejectValue: string }
>('products/fetchProducts', async (_, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.get<Products>('/character');

    return response.data;
  } catch (error) {
    console.log(error);
    if (error instanceof AxiosError) {
      return rejectWithValue(error.message);
    }

    return rejectWithValue(`unknown error: ${error}`);
  }
});
