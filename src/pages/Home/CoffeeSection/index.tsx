import { COFFEES } from '@/constants/coffees';
import { pageLabels } from '@/constants/labels';
import { CoffeeItem } from './CoffeeItem';
import styles from './index.module.scss';

export const CoffeeSection = () => {
  return (
    <section className={styles.coffeeSecContainer}>
      <div className={styles.coffeeTitle}>
        <h1>{pageLabels.home.ourCoffees}</h1>
      </div>
      <div className={styles.coffeeList}>
        {COFFEES.map((coffee) => (
          <CoffeeItem key={coffee.id} coffee={coffee} />
        ))}
      </div>
    </section>
  );
};
