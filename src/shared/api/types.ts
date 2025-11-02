import type { Filter } from '@/features/products/model';

export interface Products {
  info: ProductsInfo;
  results: ProductsList;
}

interface ProductsInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface Product {
  id: number;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
  species: string;
  type: string;
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
  origin: ProductLocation;
  location: ProductLocation;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export type ProductsList = Product[];

export interface ProductsParams extends Filter {
  page: number;
}
interface ProductLocation {
  name: string;
  url: string;
}
