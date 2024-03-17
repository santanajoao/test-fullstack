export type CreateClient = {
  name: string;
  email: string;
  cpf: string;
  phoneNumber: string;
  status: 'active' | 'inactive' | 'waiting' | 'disabled';
};

export type Client = CreateClient & {
  id: number;
};
