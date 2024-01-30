import { PaymentMethods } from '../enum/paymentMethods';
import { Coffee } from './coffee';
import { OrderForm } from './orderForm';

export interface Order {
  id: string; // UUID
  address: OrderForm;
  payment: PaymentMethods | '';
  coffeeList: Coffee[];
}
