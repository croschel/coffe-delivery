import { OrderForm } from '@/models/enum/orderForm';
import * as zod from 'zod';

export const additionalFormValidation = zod.object({
  [OrderForm.CEP]: zod.string().min(1, 'Informe o CEP'),
  [OrderForm.RUA]: zod.string().min(1, 'Informe a Rua'),
  [OrderForm.NUMERO]: zod.string().min(1, 'Informe o número'),
  [OrderForm.COMPLEMENTO]: zod.string().optional(),
  [OrderForm.BAIRRO]: zod.string().min(1, 'Informe o bairro'),
  [OrderForm.CIDADE]: zod.string().min(1, 'Informe a cidade'),
  [OrderForm.UF]: zod.string().min(1, 'Informe o Estado'),
});
