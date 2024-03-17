import { cn } from '@/lib/tailwind';
import { ComponentProps } from 'react';

type Props = ComponentProps<'div'>;

export function Field({ className, ...props }: Props) {
  return (
    <div className={cn('space-y-1', className)} {...props} />
  );
}
