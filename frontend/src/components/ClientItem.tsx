import React from 'react';
import ButtonLike from './ButtonLike';
import { statusText } from '@/constants/client';
import { cn } from '@/lib/tailwind';
import { parsePhoneNumber } from 'libphonenumber-js';
import { cpf } from 'cpf-cnpj-validator';
import { Client } from '@/types/api';

type Props = {
  client: Client;
};

export default function ClientItem({ client }: Props) {
  return (
    <div
      className="text-[#6e747a] gap-6 p-5 border rounded-sm flex justify-between items-center"
    >
      <div className="flex flex-col flex-1">
        <span className="font-medium">{client.name}</span>
        <span>{client.email}</span>
      </div>

      <div className="flex flex-col flex-1">
        <span className="font-medium">{cpf.format(client.cpf)}</span>
              
        <span>
          {parsePhoneNumber(client.phoneNumber, 'BR').formatNational()}
        </span>
      </div>

      <div className="flex gap-2 items-center flex-1">
        <div
          className={cn('h-4 w-4 rounded-full shrink-0', {
            'bg-[#4bad5c]': client.status === 'active',
            'bg-[#d73b40]': client.status === 'inactive',
            'bg-[#e29836]': client.status === 'waiting',
            'bg-[#d2d2d2]': client.status === 'disabled',
          })}
        />

        <span className="capitalize">
          {statusText[client.status]}
        </span>
      </div>

      <ButtonLike.Ancor
        href={`/edit/${client.id}`}
        variant="outline"
        className="w-32"
      >
        Editar
      </ButtonLike.Ancor>
    </div>
  );
}
