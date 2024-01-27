import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react';
import styles from './index.module.scss';
import { pageLabels } from '@/constants/labels';

export const FinalInformation = () => {
  const street = 'Rua João Daniel Martinelli, 102';
  const neighborhood = 'Farrapos';
  const city = 'Porto Alegre';
  const uf = 'RS';
  const address = `${neighborhood} - ${city}, ${uf}`;
  const estimationDelivery = '20 min - 30 min';
  const paymentMethod = 'Cartão de Crédito';

  return (
    <div className={styles.card}>
      <div className={styles.regularCard}>
        <div className={styles.mapIconBox}>
          <MapPin color="#fff" size={16} weight="fill" />
        </div>
        <div className={styles.regularCardInfo}>
          <span>
            {pageLabels.confirmation.orderOn} <strong>{street}</strong>
          </span>
          <p>{address}</p>
        </div>
      </div>
      <div className={styles.regularCard}>
        <div className={styles.timerIconBox}>
          <Timer color="#fff" size={16} weight="fill" />
        </div>
        <div className={styles.regularCardInfo}>
          <span>{pageLabels.confirmation.orderEstimation}</span>
          <p>
            <strong>{estimationDelivery}</strong>
          </p>
        </div>
      </div>
      <div className={styles.regularCard}>
        <div className={styles.moneyIconBox}>
          <CurrencyDollar color="#fff" size={16} />
        </div>
        <div className={styles.regularCardInfo}>
          <span>{pageLabels.confirmation.paymentOnPlace}</span>
          <p>
            <strong>{paymentMethod}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};
