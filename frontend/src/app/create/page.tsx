'use client';

import ButtonLike from '@/components/ButtonLike';
import ErrorMessage from '@/components/ErrorMessage';
import Input from '@/components/Input';
import SectionHeading from '@/components/SectionHeading';
import ClientForm from '@/components/client/Form';
import { createClientSchema } from '@/lib/schemas/client';
import { createClient } from '@/services/client';
import { CreateClient } from '@/types/client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

export default function CreateClientPage() {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    setError,
  } = useForm<CreateClient>({
    resolver: zodResolver(createClientSchema),
  });

  const router = useRouter();

  async function onSubmit(data: CreateClient) {
    const response = await createClient(data);

    if (response.success) {
      return router.push('/');
    }

    setError('root', { message: response.message });
  }

  return (
    <div>
      <SectionHeading
        title="Novo usuário"
        description="Informe os campos a seguir para criar novo usuário:"
      />

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
    </div>
  );
}
