'use client';

import { updateClientSchema } from '@/lib/schemas/client';
import { Client, UpdateClient } from '@/types/client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import ClientForm from './Form';
import Input from '../Input';
import ErrorMessage from '../ErrorMessage';
import ButtonLike from '../ButtonLike';
import { updateClient } from '@/actions/client';

type Props = {
  client: Client;
};

export default function UpdateForm({ client }: Props) {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    setError,
    clearErrors,
  } = useForm<UpdateClient>({
    resolver: zodResolver(updateClientSchema),
    defaultValues: client,
  });

  async function onSubmit(data: UpdateClient) {
    clearErrors('root');

    const result = await updateClient(client.id, data);

    setError('root', { message: result?.message });
  }
  
  return (
    <ClientForm.Form onSubmit={handleSubmit(onSubmit)} className="mt-3">
      <ClientForm.InputGroup>
        <ClientForm.Field>
          <Input
            {...register('name')}
            placeholder="Nome"
            type="text"
          />

          <ErrorMessage>{errors.name?.message}</ErrorMessage>
        </ClientForm.Field>

        <ClientForm.Field>
          <Input
            {...register('email')}
            placeholder="Email"
            type="email"
          />

          <ErrorMessage>{errors.email?.message}</ErrorMessage>
        </ClientForm.Field>

        <ClientForm.Field>
          <Input
            {...register('cpf')}
            placeholder="CPF"
            type="text"
          />

          <ErrorMessage>{errors.cpf?.message}</ErrorMessage>
        </ClientForm.Field>

        <ClientForm.Field>
          <Input
            {...register('phoneNumber')}
            placeholder="Telefone"
            type="text"
          />

          <ErrorMessage>{errors.phoneNumber?.message}</ErrorMessage>
        </ClientForm.Field>

        <ClientForm.Field>
          <ClientForm.StatusSelect
            {...register('status')}
          />

          <ErrorMessage>{errors.status?.message}</ErrorMessage>
        </ClientForm.Field>

        <ErrorMessage>{errors.root?.message}</ErrorMessage>
      </ClientForm.InputGroup>

      <ClientForm.ButtonsGroup className="mt-12">
        <ButtonLike.Button disabled={!isValid} className="w-full">
          Editar
        </ButtonLike.Button>

        <ButtonLike.Ancor className="w-full" variant='outline' href="/">
          Voltar
        </ButtonLike.Ancor>
      </ClientForm.ButtonsGroup>
    </ClientForm.Form>
  );
}
