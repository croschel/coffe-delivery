import { Pages } from '@/models/enum/pages';
import { Coffee } from '@/models/interfaces/coffee';
import { ReactNode, createContext, useState } from 'react';

export interface OrderContextAttr {
  orderList: Coffee[];
  handleChangeOrder: (newAmount: number, coffee: Coffee) => void;
  removeCoffeeFromList: (coffee: Coffee) => void;
}

export interface Props {
  children: ReactNode;
}

export const OrderContext = createContext({} as OrderContextAttr);

export const CoffeeContextProvider = ({ children }: Props) => {
  const location = window.location.pathname;
  const [orderList, setOrderList] = useState<Coffee[]>([]);

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
  return (
    <OrderContext.Provider
      value={{ orderList, handleChangeOrder, removeCoffeeFromList }}
    >
      {children}
    </OrderContext.Provider>
  );
};
