import { Header } from '@/components/Header';
import { pageLabels } from '@/constants/labels';
import Motorcycle from '@/assets/Motorcycle.png';
import { FinalInformation } from './FinalInformation';
import styles from './index.module.scss';

export const Confirmation = () => {
  return (
    <>
      <Header />
      <main className={styles.confirmationContainer}>
        <div className={styles.confirmationTitle}>
          <h2>{pageLabels.confirmation.orderConfirmed}</h2>
          <span>{pageLabels.confirmation.confirmedInfo}</span>
        </div>
        <div className={styles.banner}>
          <FinalInformation />
          <img src={Motorcycle} alt="Motorcycle image" />
        </div>
      </main>
    </>
  );
};
