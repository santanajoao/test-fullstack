import { cn } from '@/lib/tailwind';
import { ComponentProps } from 'react';
import Input from '@/components/Input';

type ButtonContainerProps = ComponentProps<'div'>;

function ButtonsContainer({ className, ...props }: ButtonContainerProps) {
  return (
    <div className={cn('flex gap-3', className)} {...props} />
  );
}


type FormProps = ComponentProps<'form'>;

function Form({ className, ...props }: FormProps) {
  return (
    <form className={cn('flex flex-col w-min', className)} {...props} />
  );
}


type Props = ComponentProps<'div'>;

export function Inputs({ className, ...props }: Props) {
  return (
    <div className={cn('space-y-4', className)} {...props}>
      <Input placeholder="Name" type="text" />

      <Input placeholder="Email" type="email" />

      <Input placeholder="CPF" type="text" />

      <Input placeholder="Telefone" type="text" />

      <select className="border border-[#6e747a] text-[#6e747a] bg-white rounded-md px-3 py-2 w-full">
        <option value="">Status</option>
        <option value="inactive">Inativo</option>
        <option value="waiting">Aguardando ativação</option>
        <option value="active">Ativo</option>
        <option value="disabled">Desativado</option>
      </select>
    </div>
  );
}

const ClientForm = { Form, Inputs, ButtonsContainer };

export { ClientForm as default };
