'use client';

import ButtonLike from '@/components/ButtonLike';
import ErrorMessage from '@/components/ErrorMessage';
import Input from '@/components/Input';
import SectionHeading from '@/components/SectionHeading';
import ClientForm from '@/components/client/Form';
import { updateClientSchema } from '@/lib/schemas/client';
import { UpdateClient } from '@/types/client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

export default function EditClientPage() {
  const { register, formState: { errors }, handleSubmit } = useForm<UpdateClient>({
    resolver: zodResolver(updateClientSchema),
  });

  function onSubmit(data: UpdateClient) {
    console.log(data);
  }

  return (
    <div>
      <SectionHeading
        title="Edição de usuário"
        description="Informe os campos a seguir para editar um usuário:"
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
            Editar
          </ButtonLike.Button>

          <ButtonLike.Ancor className="w-full" variant='outline' href="/">
            Voltar
          </ButtonLike.Ancor>
        </ClientForm.ButtonsGroup>
      </ClientForm.Form>
    </div>
  );
}
