import { Button } from '@/shared/ui';

// import { zodResolver } from '@hookform/resolvers/zod';
// import { useForm } from 'react-hook-form';
// import { type FormProductFields, productSchema } from '../schema';

export const ProductCreateForm = () => {
  // const { register } = useForm<FormProductFields>({
  //   mode: 'onChange',
  //   resolver: zodResolver(productSchema),
  // });

  return (
    <form className="flex flex-col gap-5 max-w-2xl mx-auto bg-white rounded shadow p-5">
      <h1 className="text-center text-xl font-semibold">Create product</h1>
      <div className="flex flex-col gap-2">
        <label className="flex flex-col gap-1 font-medium">
          Name
          <input
            name="product-name"
            type="text"
            placeholder="Enter name product"
            className={`border-2 rounded text-gray-700 border-gray-300 focus:border-blue-500 outline-0 px-2 py-1 transition-colors`}
          />
        </label>
        <label className="flex flex-col gap-1 font-medium">
          Status
          <input
            name="status"
            type="text"
            placeholder="Enter status product"
            className={`border-2 rounded text-gray-700 border-gray-300 focus:border-blue-500 outline-0 px-2 py-1 transition-colors`}
          />
        </label>
        <label className="flex flex-col gap-1 font-medium">
          Species
          <input
            name="species"
            type="text"
            placeholder="Enter species product"
            className={`border-2 rounded text-gray-700 border-gray-300 focus:border-blue-500 outline-0 px-2 py-1 transition-colors`}
          />
        </label>
        <label className="flex flex-col gap-1 font-medium">
          Type
          <input
            name="type"
            type="text"
            placeholder="Enter type product"
            className={`border-2 rounded text-gray-700 border-gray-300 focus:border-blue-500 outline-0 px-2 py-1 transition-colors`}
          />
        </label>
        <label className="flex flex-col gap-1 font-medium">
          Gender
          <input
            name="gender"
            type="text"
            placeholder="Enter gender product"
            className={`border-2 rounded text-gray-700 border-gray-300 focus:border-blue-500 outline-0 px-2 py-1 transition-colors`}
          />
        </label>
        <label className="flex flex-col gap-1 font-medium">
          Location
          <input
            name="location"
            type="text"
            placeholder="Enter location product"
            className={`border-2 rounded text-gray-700 border-gray-300 focus:border-blue-500 outline-0 px-2 py-1 transition-colors`}
          />
        </label>
        <label className="flex flex-col gap-1 font-medium">
          Image
          <input
            name="image"
            type="file"
            accept="image/png, image/jpeg"
            className={`border-2 border-dashed rounded text-center text-gray-700 border-gray-300 focus:border-blue-500 outline-0 px-2 py-1 transition-colors cursor-pointer hover:border-blue-500`}
          />
        </label>
        <p className="text-xs text-red-500"></p>
      </div>
      <Button>Submit</Button>
    </form>
  );
};
