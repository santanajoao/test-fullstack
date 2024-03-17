import { Client } from '@/types/api';

export const statusText: Record<Client['status'], string> = {
  active: 'Ativo',
  inactive: 'Inativo',
  waiting: 'Aguardado ativação',
  disabled: 'Desativado',
};
