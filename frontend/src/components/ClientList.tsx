import { getAllClients } from '@/services/client';
import ClientItem from './ClientItem';

export default async function ClientList() {
  const clientsResponse = await getAllClients();

  if (!clientsResponse.success) {
    return (
      <div className="mt-12">
        <h2 className="text-[#333333] text-center flex flex-col">
          <span className="font-semibold text-2xl">
            Ops! Algo deu errado.
          </span>
          
          <span className="font-medium">
            Recarregue a página para tentar novamente
          </span>
        </h2>
      </div>
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
