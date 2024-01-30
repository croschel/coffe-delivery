import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react';
import styles from './index.module.scss';
import { pageLabels } from '@/constants/labels';
import { useContext } from 'react';
import { OrderContext } from '@/contexts/OrderContext';

export const FinalInformation = () => {
  const { order } = useContext(OrderContext);
  const address = `${order.address.bairro} - ${order.address.cidade}, ${order.address.uf}`;
  const estimationDelivery = '20 min - 30 min';

  return (
    <div className={styles.card}>
      <div className={styles.regularCard}>
        <div className={styles.mapIconBox}>
          <MapPin color="#fff" size={16} weight="fill" />
        </div>
        <div className={styles.regularCardInfo}>
          <span>
            {pageLabels.confirmation.orderOn}{' '}
            <strong>{order.address.rua}</strong>
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
            <strong>{order.payment}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};
