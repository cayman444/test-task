import { Button } from '@/shared/ui';
import { zodResolver } from '@hookform/resolvers/zod';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { type FormProductFields, productSchema } from '../schema';
import { FormFile } from './FormFile';
import { FormInput } from './FormInput';
import { FormSelect } from './FormSelect';

export const ProductCreateForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormProductFields>({
    mode: 'onBlur',
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
        <FormSelect
          register={register}
          title="Status"
          name="status"
          options={[
            { value: 'alive', text: 'Alive' },
            { value: 'dead', text: 'Dead' },
            { value: 'unknown', text: 'Unknown' },
          ]}
          error={errors.status?.message}
        />
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
        <FormSelect
          register={register}
          title="Gender"
          name="gender"
          options={[
            { value: 'male', text: 'Male' },
            { value: 'female', text: 'Female' },
            { value: 'genderless', text: 'Genderless' },
            { value: 'unknown', text: 'unknown' },
          ]}
          error={errors.gender?.message}
        />
        <FormInput
          register={register}
          title="Location"
          name="location"
          error={errors['location']?.message}
          placeholder="Enter location product"
        />
        <FormFile
          control={control}
          title="Image"
          name="image"
          error={errors.image?.message}
        />
      </div>
      <Button>Submit</Button>
    </form>
  );
};
