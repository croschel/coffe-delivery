import { Coffee } from '@/models/interfaces/coffee';
import { FC, useState } from 'react';
import styles from './index.module.scss';
import { InputNumber } from '@/components/InputNumber';
import { Button } from '@/components/Button';
import { Trash } from '@phosphor-icons/react';
import { formatCurrencyReal } from '@/utils/format';

interface Props {
  coffee: Coffee;
}

export const CoffeeItem: FC<Props> = ({ coffee }) => {
  const [qntCoffee, setQndCoffee] = useState<number>(0);

  const handleChangeCoffee = (value: number) => {
    setQndCoffee(value);
  };

  const handleRemoveCoffee = () => {
    // TODO - remove coffe
    console.log('Remove Coffee');
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
              value={qntCoffee}
              onChange={handleChangeCoffee}
            />
            <Button
              label="REMOVER"
              size="M"
              type="secondary"
              icon={<Trash color="#8047f8" size={16} />}
              onClick={handleRemoveCoffee}
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
