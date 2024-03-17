
import SectionHeading from '@/components/SectionHeading';
import CreateForm from '@/components/client/CreateForm';

export default function CreateClientPage() {
  return (
    <div>
      <SectionHeading
        title="Novo usuário"
        description="Informe os campos a seguir para criar novo usuário:"
      />

      <CreateForm />
    </div>
  );
}
