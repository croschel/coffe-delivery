import { Header } from '@/components/Header';
import { AddditionalForm } from './AdditionalForm';
import styles from './index.module.scss';
import { SelectedCoffee } from './SelectedCoffee';

export const Order = () => {
  return (
    <>
      <Header />
      <main className={styles.mainOrder}>
        <AddditionalForm />
        <SelectedCoffee />
      </main>
    </>
  );
};
