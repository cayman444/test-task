import { CreateProduct, NotFound, ProductDetails, Products } from '@/pages';
import { fetchProducts } from '@/shared/api/products-api';
import { createBrowserRouter, redirect } from 'react-router-dom';
import { RootLayout } from '../layouts';
import { store } from '../store';

export const ROUTES_PATHS = {
  PRODUCTS: '/products',
  PRODUCTS_DETAILS: '/products/:id',
  CREATE_PRODUCT: '/create-product',
} as const;

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        index: true,
        loader: () => redirect(ROUTES_PATHS.PRODUCTS),
      },
      {
        path: ROUTES_PATHS.PRODUCTS,
        element: <Products />,
        loader: () => {
          store.dispatch(fetchProducts());
          return null;
        },
      },
      {
        path: ROUTES_PATHS.PRODUCTS_DETAILS,
        element: <ProductDetails />,
      },
      {
        path: ROUTES_PATHS.CREATE_PRODUCT,
        element: <CreateProduct />,
      },
      { path: '*', element: <NotFound /> },
    ],
  },
]);
