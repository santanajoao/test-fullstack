'use client';

import ButtonLike from '@/components/ButtonLike';
import ErrorMessage from '@/components/ErrorMessage';
import Input from '@/components/Input';
import SectionHeading from '@/components/SectionHeading';
import ClientForm from '@/components/client/Form';
import { createClientSchema } from '@/lib/schemas/client';
import { CreateClient } from '@/types/client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

export default function CreateClientPage() {
  const { register, formState: { errors }, handleSubmit } = useForm<CreateClient>({
    resolver: zodResolver(createClientSchema),
  });

  function onSubmit(data: CreateClient) {
    console.log(data);
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
    </div>
  );
}
