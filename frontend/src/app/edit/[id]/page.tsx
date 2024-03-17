import ButtonLike from '@/components/ButtonLike';
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
        <ClientForm.Inputs />

        <ClientForm.ButtonsContainer className="mt-12">
          <ButtonLike.Button className="w-full">
            Editar
          </ButtonLike.Button>

          <ButtonLike.Ancor className="w-full" variant='outline' href="/">
            Voltar
          </ButtonLike.Ancor>
        </ClientForm.ButtonsContainer>
      </ClientForm.Form>
    </div>
  );
}
