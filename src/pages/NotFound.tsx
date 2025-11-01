import { ROUTES_PATHS } from '@/app/router';
import { Button } from '@/shared/ui';
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col gap-16 items-center justify-center">
        <h1 className="text-white font-medium text-2xl">Nothing found 😕</h1>
        <Button onClick={() => navigate(ROUTES_PATHS.PRODUCTS)}>
          Back to home
        </Button>
      </div>
    </div>
  );
};
