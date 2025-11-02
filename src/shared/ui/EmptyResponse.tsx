import clsx from 'clsx';
import type { ComponentProps, FC } from 'react';

interface EmptyResponseProps extends ComponentProps<'div'> {
  message?: string;
}

export const EmptyResponse: FC<EmptyResponseProps> = ({
  className,
  message = 'No products found',
}) => {
  return (
    <div className={clsx('text-center font-medium text-gray-800', className)}>
      {message}
    </div>
  );
};
