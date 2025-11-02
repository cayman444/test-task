import { useAppSelector } from '@/app/store/store-hooks';
import { EmptyResponse, ErrorMessage, Spinner } from '@/shared/ui';
import { ProductInfoItem } from './ProductInfoItem';

export const Product = () => {
  const { productDetails, isLoading, error } = useAppSelector(
    (state) => state.product
  );

  if (isLoading) return <Spinner />;
  if (error) return <ErrorMessage error={error} />;
  if (!productDetails) return <EmptyResponse />;

  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-center text-4xl font-semibold">
        {productDetails.name}
      </h1>
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
