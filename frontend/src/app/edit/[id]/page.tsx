import ButtonLike from '@/components/ButtonLike';
import Input from '@/components/Input';
import SectionHeading from '@/components/SectionHeading';
import ClientForm from '@/components/client/Form';

export default function EditClientPage() {
  return (
    <div>
      <SectionHeading
        title="Edição de usuário"
        description="Informe os campos a seguir para editar um usuário:"
      />

      <ClientForm.Form className="mt-3">
        <ClientForm.InputGroup>
          <Input placeholder="Name" type="text" />

          <Input placeholder="Email" type="email" />

          <Input placeholder="CPF" type="text" />

          <Input placeholder="Telefone" type="text" />

          <ClientForm.StatusSelect />
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
