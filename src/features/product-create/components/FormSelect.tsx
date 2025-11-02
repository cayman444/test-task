import type { FC } from 'react';
import type { UseFormRegister } from 'react-hook-form';
import type { FormProductFields } from '../schema';

interface FormSelectProps {
  register: UseFormRegister<FormProductFields>;
  title: string;
  name: keyof FormProductFields;
  options: { value: string; text: string }[];
  error?: string;
}

export const FormSelect: FC<FormSelectProps> = ({
  register,
  title,
  name,
  options,
  error = '',
}) => {
  return (
    <label className="flex flex-col gap-1 font-medium">
      {title}
      <select
        {...register(name)}
        name={name}
        className={`border-2 rounded text-gray-700 border-gray-300 focus:border-blue-500 outline-0 px-2 py-1 transition-colors ${error && 'border-red-500'}`}
      >
        {options.map(({ text, value }) => (
          <option key={value} value={value}>
            {text}
          </option>
        ))}
      </select>
      <p className="text-xs text-red-500">{error}</p>
    </label>
  );
};
