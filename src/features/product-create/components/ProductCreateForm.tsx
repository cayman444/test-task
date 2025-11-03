import { Button } from '@/shared/ui';
import { useProductCreateForm } from '../hooks';
import { FormFile } from './FormFile';
import { FormInput } from './FormInput';
import { FormSelect } from './FormSelect';

export const ProductCreateForm = () => {
  const { control, errors, handleSubmit, onSubmit, register } =
    useProductCreateForm();

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
            { value: 'Alive', text: 'Alive' },
            { value: 'Dead', text: 'Dead' },
            { value: 'unknown', text: 'unknown' },
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
            { value: 'Male', text: 'Male' },
            { value: 'Female', text: 'Female' },
            { value: 'Genderless', text: 'Genderless' },
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
      <Button>Create</Button>
    </form>
  );
};
