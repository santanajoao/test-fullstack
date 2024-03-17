import { cn } from '@/lib/tailwind';
import { ComponentProps } from 'react';

type Props = ComponentProps<'form'>;

export function Form({ className, ...props }: Props) {
  return (
    <form className={cn('flex flex-col w-min', className)} {...props} />
  );
}
