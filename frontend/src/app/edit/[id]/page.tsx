import SectionHeading from '@/components/SectionHeading';
import UpdateForm from '@/components/client/UpdateForm';
import { getClientById } from '@/services/client';

type Props = {
  params: {
    id: string;
  };
};

export default async function EditClientPage({ params }: Props) {
  const client = await getClientById(params.id);

  if (!client.success) {
    return <p>{client.message}</p>;
  }

  return (
    <div>
      <SectionHeading
        title="Edição de usuário"
        description="Informe os campos a seguir para editar um usuário:"
      />

      <UpdateForm client={client.data} />
    </div>
  );
}
