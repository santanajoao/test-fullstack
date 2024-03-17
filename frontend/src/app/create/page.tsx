
import SectionHeading from '@/components/SectionHeading';
import CreateForm from '@/components/client/CreateForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Registro de clientes - UOL',
};

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
