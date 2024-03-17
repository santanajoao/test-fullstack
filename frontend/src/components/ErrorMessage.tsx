import { cn } from '@/lib/tailwind';
import { ComponentProps } from 'react';

type Props = ComponentProps<'p'>;

export default function ErrorMessage({ className, ...props }: Props) {
  if (!props.children) return null;
  
  return (
    <p className={cn('text-xs text-red-400', className)} {...props} />
  );
}
