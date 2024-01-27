import { pageLabels } from '@/constants/labels';
import styles from './index.module.scss';
import { COFFEES } from '@/constants/coffees';
import { Coffee } from '@/models/interfaces/coffee';
import { CoffeeItem } from './CoffeeItem';
import { formatCurrencyReal } from '@/utils/format';
import { Button } from '@/components/Button';

export const SelectedCoffee = () => {
  const coffeeMock: Coffee[] = [COFFEES[0], COFFEES[1]];

  const handleSubmitOrder = () => {
    // TODO - submit order
  };
  return (
    <div className={styles.selectedCoffee}>
      <h2 className={styles.coffeeSectionTitle}>
        {pageLabels.order.selectedCoffees}
      </h2>
      <section className={styles.sectionConfirm}>
        <div className={styles.coffeeList}>
          {coffeeMock.map((coffee) => (
            <CoffeeItem key={coffee.id} coffee={coffee} />
          ))}
        </div>
        <div className={styles.totalOrder}>
          <div className={styles.regularOrderRow}>
            <span>{pageLabels.order.totalItens}</span>
            <p>{formatCurrencyReal(29.7)}</p>
          </div>
          <div className={styles.regularOrderRow}>
            <span>{pageLabels.order.delivery}</span>
            <p>{formatCurrencyReal(3.5)}</p>
          </div>
          <div className={styles.boldOrderRow}>
            <span>{pageLabels.order.total}</span>
            <p>{formatCurrencyReal(33.2)}</p>
          </div>
        </div>
        <Button
          label="confirmar pedido"
          size="M"
          type="primary"
          onClick={handleSubmitOrder}
        />
      </section>
    </div>
  );
};
