'use client';

import ClientForm from './Form';
import Input from '../Input';
import ErrorMessage from '../ErrorMessage';
import ButtonLike from '../ButtonLike';
import { useForm } from 'react-hook-form';
import { CreateClient } from '@/types/client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { createClientSchema } from '@/lib/schemas/client';
import { createClient } from '@/services/client';

export default function CreateForm() {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    setError,
    clearErrors,
  } = useForm<CreateClient>({
    resolver: zodResolver(createClientSchema),
  });

  const router = useRouter();

  async function onSubmit(data: CreateClient) {
    clearErrors('root');

    const response = await createClient(data);

    if (response.success) {
      return router.push('/');
    }

    setError('root', { message: response.message });
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
          Criar
        </ButtonLike.Button>

        <ButtonLike.Ancor className="w-full" variant='outline' href="/">
          Voltar
        </ButtonLike.Ancor>
      </ClientForm.ButtonsGroup>
    </ClientForm.Form>
  );
}
