import { Coffee } from '@/models/interfaces/coffee';
import { FC, useState } from 'react';
import styles from './index.module.scss';
import { InputNumber } from '@/components/InputNumber';
import { Button } from '@/components/Button';
import { ShoppingCart } from '@phosphor-icons/react';

interface Props {
  coffee: Coffee;
}

export const CoffeeItem: FC<Props> = ({ coffee }) => {
  const [coffeeOrder, setCoffeeOrder] = useState(0);

  const handleAddRemoveCoffee = (value: number) => {
    setCoffeeOrder(value);
  };

  const handleClickCart = () => {};
  return (
    <div className={styles.coffeeContainer}>
      <img src={coffee.image} alt="" />
      <div className={styles.tagListBox}>
        {coffee.tagType.map((tag) => (
          <div className={styles.tagType} key={tag}>
            <span>{tag}</span>
          </div>
        ))}
      </div>
      <div className={styles.titleBox}>
        <h3>{coffee.title}</h3>
        <span>{coffee.description}</span>
      </div>
      <div className={styles.bottomActions}>
        <div className={styles.valueBox}>
          <span className={styles.moneySymbol}>R$</span>{' '}
          <span className={styles.value}>{coffee.value}</span>
        </div>
        <div className={styles.cartBox}>
          <InputNumber
            maxNumber={4}
            value={coffeeOrder}
            onChange={handleAddRemoveCoffee}
          />
          <Button
            size="M"
            type="icon"
            icon={<ShoppingCart color="#fff" weight="fill" size={22} />}
            onClick={handleClickCart}
          />
        </div>
      </div>
    </div>
  );
};
