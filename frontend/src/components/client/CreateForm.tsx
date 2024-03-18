'use client';

import ClientForm from './Form';
import Input from '../Input';
import ErrorMessage from '../ErrorMessage';
import ButtonLike from '../ButtonLike';
import { useForm } from 'react-hook-form';
import { CreateClient } from '@/types/client';
import { zodResolver } from '@hookform/resolvers/zod';
import { createClientSchema } from '@/lib/schemas/client';
import { createClient } from '@/actions/client';

export default function CreateForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
    clearErrors,
  } = useForm<CreateClient>({
    resolver: zodResolver(createClientSchema),
  });

  async function onSubmit(data: CreateClient) {
    clearErrors('root');

    const result = await createClient(data);

    setError('root', { message: result?.message });
  }
  
  return (
    <ClientForm.Form onSubmit={handleSubmit(onSubmit)} className="mt-3">
      <ClientForm.InputGroup>
        <ClientForm.Field>
          <Input
            {...register('name')}
            aria-label="Nome"
            placeholder="Nome"
            type="text"
          />

          <ErrorMessage>{errors.name?.message}</ErrorMessage>
        </ClientForm.Field>

        <ClientForm.Field>
          <Input
            {...register('email')}
            aria-label="Email"
            placeholder="Email"
            type="email"
          />

          <ErrorMessage>{errors.email?.message}</ErrorMessage>
        </ClientForm.Field>

        <ClientForm.Field>
          <Input
            {...register('cpf')}
            aria-label="CPF"
            placeholder="CPF"
            type="text"
          />

          <ErrorMessage>{errors.cpf?.message}</ErrorMessage>
        </ClientForm.Field>

        <ClientForm.Field>
          <Input
            {...register('phoneNumber')}
            aria-label="Telefone"
            placeholder="Telefone"
            type="text"
          />

          <ErrorMessage>{errors.phoneNumber?.message}</ErrorMessage>
        </ClientForm.Field>

        <ClientForm.Field>
          <ClientForm.StatusSelect
            aria-label="Status"
            {...register('status')}
          />

          <ErrorMessage>{errors.status?.message}</ErrorMessage>
        </ClientForm.Field>

        <ErrorMessage>{errors.root?.message}</ErrorMessage>
      </ClientForm.InputGroup>

      <ClientForm.ButtonsGroup className="mt-12">
        <ButtonLike.Button className="w-full">
          Criar
        </ButtonLike.Button>

        <ButtonLike.Ancor className="w-full" variant='outline' href="/">
          Voltar
        </ButtonLike.Ancor>
      </ClientForm.ButtonsGroup>
    </ClientForm.Form>
  );
}