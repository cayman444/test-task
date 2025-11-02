import { Button } from '@/shared/ui';
import { zodResolver } from '@hookform/resolvers/zod';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { type FormProductFields, productSchema } from '../schema';
import { FormInput } from './FormInput';

export const ProductCreateForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProductFields>({
    mode: 'onChange',
    resolver: zodResolver(productSchema),
  });

  const onSubmit: SubmitHandler<FormProductFields> = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5 max-w-2xl mx-auto bg-white rounded shadow p-5"
    >
      <h1 className="text-center text-xl font-semibold">Create product</h1>
      <div className="flex flex-col gap-2">
        <FormInput
          register={register}
          title="Name"
          name="product-name"
          error={errors['product-name']?.message}
          placeholder="Enter name product"
        />
        <label className="flex flex-col gap-1 font-medium">
          Status
          <select
            name="status"
            className={`border-2 rounded text-gray-700 border-gray-300 focus:border-blue-500 outline-0 px-2 py-1 transition-colors`}
          >
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
          </select>
        </label>
        <FormInput
          register={register}
          title="Species"
          name="species"
          error={errors['species']?.message}
          placeholder="Enter species product"
        />
        <FormInput
          register={register}
          title="Type"
          name="type"
          error={errors['type']?.message}
          placeholder="Enter type product"
        />
        <label className="flex flex-col gap-1 font-medium">
          Gender
          <select
            name="gender"
            className={`border-2 rounded text-gray-700 border-gray-300 focus:border-blue-500 outline-0 px-2 py-1 transition-colors`}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="genderless">Genderless</option>
            <option value="unknown">unknown</option>
          </select>
        </label>
        <FormInput
          register={register}
          title="Location"
          name="location"
          error={errors['location']?.message}
          placeholder="Enter location product"
        />
        <label className="flex flex-col gap-1 font-medium">
          Image
          <input
            {...register('image')}
            name="image"
            type="file"
            accept="image/png, image/jpeg"
            className={`border-2 border-dashed rounded text-center text-gray-700 border-gray-300 focus:border-blue-500 outline-0 px-2 py-1 transition-colors cursor-pointer hover:border-blue-500`}
          />
        </label>
      </div>
      <Button>Submit</Button>
    </form>
  );
};
