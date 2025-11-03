import type { FC } from 'react';
import type { Filter, FilterParams } from '../model';

interface FilterSelectProps {
  title: string;
  name: keyof Filter;
  value?: string;
  onChange: (filter: FilterParams) => void;
  options: { value: string; title: string }[];
  disabled?: boolean;
}

export const FilterSelect: FC<FilterSelectProps> = ({
  title,
  name,
  value,
  options,
  disabled,
  onChange,
}) => {
  return (
    <div className={`flex items-center gap-2 ${disabled && 'opacity-50'}`}>
      <label htmlFor={name} className="text-lg font-semibold">
        {title}:
      </label>
      <select
        id={name}
        value={value}
        disabled={disabled}
        onChange={(e) => onChange({ key: name, value: e.target.value })}
        className="border rounded-lg p-1 cursor-pointer disabled:cursor-default"
      >
        {options.map(({ value, title }) => (
          <option key={value} value={value}>
            {title}
          </option>
        ))}
      </select>
    </div>
  );
};
