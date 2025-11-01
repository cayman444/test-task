import { createBrowserRouter, redirect } from 'react-router-dom';

export const ROUTES_PATHS = {
  HOME: '/',
  PRODUCTS: '/products',
  PRODUCTS_DETAILS: '/products/:id',
} as const;

export const router = createBrowserRouter([
  {
    path: ROUTES_PATHS.HOME,
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
  { path: '*', element: <div>Not found page</div> },
]);
