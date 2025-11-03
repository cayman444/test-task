import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { axiosInstance } from './instance';
import type { Product, Products, ProductsParams } from './types';

export const fetchProducts = createAsyncThunk<
  Products,
  ProductsParams,
  { rejectValue: string }
>(
  'products/fetchProducts',
  async ({ page, gender, status, name }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get<Products>('/character', {
        params: { page, gender, status, name },
      });

      return response.data;
    } catch (error) {
      console.log(error);
      if (error instanceof AxiosError) {
        return rejectWithValue(error.message);
      }

      return rejectWithValue(`unknown error: ${error}`);
    }
  }
);

export const fetchProduct = createAsyncThunk<
  Product,
  string,
  { rejectValue: string }
>('product/fetchProduct', async (id, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.get<Product>(`/character/${id}`);

    return response.data;
  } catch (error) {
    console.log(error);
    if (error instanceof AxiosError) {
      return rejectWithValue(error.message);
    }

    return rejectWithValue(`unknown error: ${error}`);
  }
});
