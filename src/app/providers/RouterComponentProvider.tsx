import { RouterProvider } from 'react-router-dom';
import { router } from '../router';

export const RouterComponentProvider = () => {
  return <RouterProvider router={router} />;
};
