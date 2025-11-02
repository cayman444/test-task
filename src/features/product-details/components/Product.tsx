import { ROUTES_PATHS } from '@/app/router';
import { useAppSelector } from '@/app/store/store-hooks';
import {
  ArrowIcon,
  Button,
  EmptyResponse,
  ErrorMessage,
  Spinner,
} from '@/shared/ui';
import { useNavigate } from 'react-router-dom';
import { ProductInfoItem } from './ProductInfoItem';

export const Product = () => {
  const navigate = useNavigate();
  const { productDetails, isLoading, error } = useAppSelector(
    (state) => state.product
  );

  if (isLoading) return <Spinner />;
  if (error) return <ErrorMessage error={error} />;
  if (!productDetails) return <EmptyResponse />;

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <Button
          className="self-start flex items-center gap-2"
          onClick={() => navigate(ROUTES_PATHS.PRODUCTS)}
        >
          <ArrowIcon /> Back to home
        </Button>
        <h1 className="text-center text-4xl font-semibold">
          {productDetails.name}
        </h1>
      </div>
      <div className="flex gap-4">
        <div className="relative w-100 h-100">
          <img
            src={productDetails.image}
            alt={productDetails.type}
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="grow bg-white/50 p-5 rounded shadow">
          <ul className="flex flex-col gap-2">
            <ProductInfoItem title="Species" text={productDetails.species} />
            <ProductInfoItem title="Gender" text={productDetails.gender} />
            <ProductInfoItem title="Status" text={productDetails.status} />
            <ProductInfoItem
              title="Location"
              text={productDetails.location.name}
            />
            <ProductInfoItem
              title="Created"
              text={new Date(productDetails.created).toLocaleDateString()}
            />
          </ul>
        </div>
      </div>
    </div>
  );
};
