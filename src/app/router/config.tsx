import { createBrowserRouter, redirect } from 'react-router-dom';
import { RootLayout } from '../layouts';

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
        element: <div>products</div>,
      },
      {
        path: ROUTES_PATHS.PRODUCTS_DETAILS,
        element: <div>details products</div>,
      },
      {
        path: ROUTES_PATHS.CREATE_PRODUCT,
        element: <div>create product</div>,
      },
      { path: '*', element: <div>Not found page</div> },
    ],
  },
]);
