import { ProductCreateForm } from '@/features/product-create/components';

export const CreateProduct = () => {
  return (
    <div className="flex flex-col gap-5 min-h-screen items-center justify-center">
      <ProductCreateForm />
    </div>
  );
};
