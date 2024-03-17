import { getAllClients } from '@/services/client';
import ClientItem from './ClientItem';

export default async function ClientList() {
  const clientsResponse = await getAllClients();

  if (!clientsResponse.success) {
    return (
      <p className="text-[#333333] text-center flex flex-col py-7">
        <span className="font-medium text-xl">
          Ops! Algo deu errado.
        </span>
          
        <span>
          Recarregue a página para tentar novamente
        </span>
      </p>
    );
  }

  if (clientsResponse.data.length === 0) {
    return (
      <p className="text-[#333333] text-center py-7">
        Nenhum cliente cadastrado
      </p>
    );
  }

  return (
    <div>
      <ul className="space-y-8">
        {clientsResponse.data.map((client) => (
          <ClientItem key={client.id} client={client} />
        ))}
      </ul>

      <p className="mt-7 text-[#6e747a]">
        Exibindo {clientsResponse.data.length} clientes
      </p>
    </div>
  );
}
