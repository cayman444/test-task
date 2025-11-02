import type { FC } from 'react';
import type { Filter, FilterParams } from '../model';

interface FilterSelectProps {
  title: string;
  name: keyof Filter;
  value?: string;
  onChange: (filter: FilterParams) => void;
  options: { value: string; title: string }[];
}

export const FilterSelect: FC<FilterSelectProps> = ({
  title,
  name,
  value,
  options,
  onChange,
}) => {
  return (
    <div className="flex items-center gap-2">
      <label htmlFor={name} className="text-lg font-semibold">
        {title}:
      </label>
      <select
        id={name}
        value={value}
        onChange={(e) => onChange({ key: name, value: e.target.value })}
        className="border rounded-lg p-1 cursor-pointer"
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
