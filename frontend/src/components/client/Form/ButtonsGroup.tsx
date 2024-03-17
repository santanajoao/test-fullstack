import { cn } from '@/lib/tailwind';
import { ComponentProps } from 'react';

type Props = ComponentProps<'div'>;

export function ButtonsGroup({ className, ...props }: Props) {
  return (
    <div className={cn('flex gap-3', className)} {...props} />
  );
}
