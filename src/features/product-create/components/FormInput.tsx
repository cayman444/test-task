import type { FC } from 'react';
import type { UseFormRegister } from 'react-hook-form';
import type { FormProductFields } from '../schema';

interface FormInputProps {
  register: UseFormRegister<FormProductFields>;
  title: string;
  name: keyof FormProductFields;
  placeholder: string;
  error?: string;
  type?: string;
}

export const FormInput: FC<FormInputProps> = ({
  register,
  title,
  name,
  placeholder,
  type = 'text',
  error = '',
}) => {
  return (
    <label className="flex flex-col gap-1 font-medium">
      {title}
      <input
        {...register(name)}
        name={name}
        type={type}
        placeholder={placeholder}
        className={`border-2 rounded text-gray-700 border-gray-300 focus:border-blue-500 outline-0 px-2 py-1 transition-colors`}
      />
      <p className="text-xs text-red-500">{error}</p>
    </label>
  );
};
