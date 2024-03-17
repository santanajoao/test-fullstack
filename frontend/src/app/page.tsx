import ButtonLike from '@/components/ButtonLike';
import ClientList from '@/components/ClientList';
import SectionHeading from '@/components/SectionHeading';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Painel de clientes - UOL',
};

export default async function Home() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <SectionHeading
          title="Listagem de usuários"
          description="Escolha um cliente para visualizar os detalhes"
        />

        <ButtonLike.Ancor href="/create" size="small">
          Novo cliente
        </ButtonLike.Ancor>
      </div>

      <ClientList />
    </div>
  );
}
