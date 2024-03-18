import { z } from 'zod';
import { cpf } from 'cpf-cnpj-validator';
import { isValidPhoneNumber } from 'libphonenumber-js';
import { toOnlyDigits } from '../../utils/string';
import { addExtraNineOnPhone } from '../../utils/phone';

const nameMinLength = 2;

export const nameSchema = z
  .string({
    invalid_type_error: 'O nome deve ser uma string',
    required_error: 'O campo name é obrigatório',
  })
  .min(nameMinLength, `O nome deve ter no mínimo ${nameMinLength} caracteres`);

export const emailSchema = z
  .string({
    invalid_type_error: 'O email deve ser uma string',
    required_error: 'O campo email é obrigatório',
  })
  .email('Informe um email válido');

export const cpfSchema = z
  .string({
    invalid_type_error: 'O cpf deve ser uma string',
    required_error: 'O campo cpf é obrigatório',
  })
  .refine((data) => cpf.isValid(data), 'Informe um cpf válido')
  .transform(toOnlyDigits);

export const phoneNumberSchema = z
  .string({
    invalid_type_error: 'O número de telefone deve ser uma string',
    required_error: 'O campo phoneNumber é obrigatório',
  })
  .refine((phoneNumber) => isValidPhoneNumber(phoneNumber, 'BR'), 'Informe um número de telefone válido')
  .transform(addExtraNineOnPhone)
  .transform(toOnlyDigits);

const validStatus = ['active', 'inactive', 'waiting', 'disabled'];
const invalidStatusMessage = `O status deve ser um dos seguintes valores: ${validStatus.join(', ')}`;

export const statusSchema = z
  .string({
    required_error: 'O campo status é obrigatório',
    invalid_type_error: invalidStatusMessage,
  })
  .refine((status) => validStatus.includes(status), invalidStatusMessage);

export const createClientSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  cpf: cpfSchema,
  phoneNumber: phoneNumberSchema,
  status: statusSchema,
});

export const updateClientSchema = createClientSchema;
