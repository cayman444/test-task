import { Spinner } from '@/shared/ui';
import clsx from 'clsx';
import {
  type ComponentProps,
  type FC,
  type PropsWithChildren,
  Suspense,
} from 'react';
import { Outlet } from 'react-router-dom';

export const RootLayout: FC<PropsWithChildren<ComponentProps<'div'>>> = ({
  className,
}) => {
  return (
    <main className={clsx('max-w-6xl px-4 mx-auto', className)}>
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
    </main>
  );
};
