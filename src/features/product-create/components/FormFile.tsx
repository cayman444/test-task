import type { FC } from 'react';
import { type Control, Controller } from 'react-hook-form';
import type { FormProductFields } from '../schema';

interface FormFileProps {
  control: Control<FormProductFields>;
  title: string;
  name: keyof FormProductFields;
  error?: string;
}

export const FormFile: FC<FormFileProps> = ({
  title,
  control,
  name,
  error,
}) => {
  return (
    <label className="flex flex-col gap-1 font-medium">
      {title}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <input
            onChange={(e) => {
              field.onChange(e.target.files?.[0]);
            }}
            type="file"
            name={name}
            accept="image/png, image/jpeg"
            className={`border-2 border-dashed rounded text-center text-gray-700 border-gray-300 focus:border-blue-500 outline-0 px-2 py-1 transition-colors cursor-pointer hover:border-blue-500 ${error && 'border-red-500'}`}
          />
        )}
      />
      <p className="text-xs text-red-500">{error}</p>
    </label>
  );
};
