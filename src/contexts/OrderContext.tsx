import { Pages } from '@/models/enum/pages';
import { PaymentMethods } from '@/models/enum/paymentMethods';
import { Coffee } from '@/models/interfaces/coffee';
import { Order } from '@/models/interfaces/order';
import { OrderForm } from '@/models/interfaces/orderForm';
import { createNewId } from '@/utils/generators';
import { ReactNode, createContext, useState } from 'react';

export interface OrderContextAttr {
  order: Order;
  saveOrder: (formAddressValues: OrderForm) => void;
  orderList: Coffee[];
  paymentMethod: PaymentMethods | '';
  handleChangeOrder: (newAmount: number, coffee: Coffee) => void;
  removeCoffeeFromList: (coffee: Coffee) => void;
  handleSelectPayment: (value: string) => void;
}

export interface Props {
  children: ReactNode;
}

export const OrderContext = createContext({} as OrderContextAttr);

export const CoffeeContextProvider = ({ children }: Props) => {
  const location = window.location.pathname;
  const [orderList, setOrderList] = useState<Coffee[]>([]);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethods | ''>('');
  const [order, setOrder] = useState<Order>({} as Order);

  const removeCoffeeFromList = (coffee: Coffee) => {
    setOrderList((prevState) =>
      prevState.filter((order) => order.id !== coffee.id),
    );
  };

  const handleChangeOrder = (newAmount: number, coffee: Coffee) => {
    const orderIndex = orderList.findIndex((order) => order.id === coffee.id);
    if (newAmount === 0 && orderIndex === undefined) {
      return;
    }
    if (location !== Pages.ORDER) {
      if (newAmount === 0) {
        removeCoffeeFromList(coffee);
        return;
      }
    }
    setOrderList((prevState) => {
      const newOrder = [...prevState];
      if (prevState.length > 0 && orderIndex > -1) {
        newOrder[orderIndex] = {
          ...newOrder[orderIndex],
          amount: newAmount,
        };
      } else {
        newOrder.push({
          ...coffee,
          amount: newAmount,
        });
      }
      return newOrder;
    });
  };

  const handleSelectPayment = (value: string) => {
    setPaymentMethod((prevState) =>
      value === prevState ? '' : (value as PaymentMethods),
    );
  };

  const saveOrder = (formAddressValues: OrderForm) => {
    const newOrder: Order = {
      id: createNewId(),
      coffeeList: orderList,
      address: formAddressValues as OrderForm,
      payment: paymentMethod,
    };
    setOrder(newOrder);
  };
  return (
    <OrderContext.Provider
      value={{
        order,
        saveOrder,
        orderList,
        paymentMethod,
        handleChangeOrder,
        removeCoffeeFromList,
        handleSelectPayment,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
