import { cn } from '@/lib/tailwind';
import { ComponentProps } from 'react';

type Props = ComponentProps<'div'>;

export function InputGroup({ className, ...props }: Props) {
  return (
    <div className={cn('space-y-4', className)} {...props} />
  );
}
