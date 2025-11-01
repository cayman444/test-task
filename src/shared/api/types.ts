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
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: ProductLocation;
  location: ProductLocation;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export type ProductsList = Product[];

interface ProductLocation {
  name: string;
  url: string;
}
