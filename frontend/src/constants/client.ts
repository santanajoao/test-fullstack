import { Client } from '@/types/client';

export const statusText: Record<Client['status'], string> = {
  active: 'Ativo',
  inactive: 'Inativo',
  waiting: 'Aguardado ativação',
  disabled: 'Desativado',
};
