import { Coffee } from '@/models/interfaces/coffee';
import { FC, useContext } from 'react';
import styles from './index.module.scss';
import { InputNumber } from '@/components/InputNumber';
import { Button } from '@/components/Button';
import { Trash } from '@phosphor-icons/react';
import { formatCurrencyReal } from '@/utils/format';
import { OrderContext } from '@/contexts/OrderContext';

interface Props {
  coffee: Coffee;
}

export const CoffeeItem: FC<Props> = ({ coffee }) => {
  const { handleChangeOrder, removeCoffeeFromList, orderList } =
    useContext(OrderContext);
  const coffeeIndex = orderList.findIndex((order) => order.id === coffee.id);
  const coffeeItemAmount = orderList[coffeeIndex]?.amount ?? 0;

  const handleChangeCoffee = (amount: number) => {
    handleChangeOrder(amount, coffee);
  };

  return (
    <div className={styles.coffeeItem}>
      <div className={styles.coffeeRow}>
        <img src={coffee.image} alt={coffee.title} />
        <div className={styles.actionBox}>
          <span>{coffee.title}</span>
          <div className={styles.buttonBottom}>
            <InputNumber
              maxNumber={4}
              value={coffeeItemAmount}
              onChange={handleChangeCoffee}
            />
            <Button
              label="REMOVER"
              size="M"
              type="secondary"
              icon={<Trash color="#8047f8" size={16} />}
              onClick={() => removeCoffeeFromList(coffee)}
            />
          </div>
        </div>
      </div>
      <span className={styles.coffeeValue}>
        {formatCurrencyReal(coffee.value)}
      </span>
    </div>
  );
};
