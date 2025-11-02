import clsx from 'clsx';
import type { ComponentProps, FC } from 'react';

interface ErrorMessageProps extends ComponentProps<'div'> {
  error: string;
}

export const ErrorMessage: FC<ErrorMessageProps> = ({ className, error }) => {
  return (
    <div className={clsx('text-center font-medium text-red-500', className)}>
      {error}
    </div>
  );
};
