import { cn } from '@/lib/tailwind';
import { ComponentProps, forwardRef } from 'react';

type Props = ComponentProps<'select'>;

export const StatusSelect = forwardRef<HTMLSelectElement, Props>(
  function StatusSelect({ className, ...props }, ref) {
    return (
      <select
        {...props}
        className={cn('border border-[#6e747a] text-[#6e747a] bg-white rounded-md px-3 py-2 w-full', className)}
        ref={ref}
      >
        <option value="">Status</option>
        <option value="inactive">Inativo</option>
        <option value="waiting">Aguardando ativação</option>
        <option value="active">Ativo</option>
        <option value="disabled">Desativado</option>
      </select>
    );
  }
);
