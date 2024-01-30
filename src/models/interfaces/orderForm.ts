import { OrderForm as OrderFormEnum } from '../enum/orderForm';

export interface OrderForm {
  [OrderFormEnum.CEP]: string;
  [OrderFormEnum.RUA]: string;
  [OrderFormEnum.NUMERO]: string;
  [OrderFormEnum.COMPLEMENTO]: string;
  [OrderFormEnum.BAIRRO]: string;
  [OrderFormEnum.CIDADE]: string;
  [OrderFormEnum.UF]: string;
}
