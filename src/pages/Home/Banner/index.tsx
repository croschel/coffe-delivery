import { pageLabels } from '@/constants/labels';
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react';
import styles from './index.module.scss';
import backgroundImg from '@/assets/BackgroundImg.png';
import cx from 'classnames';

export const Banner = () => {
  return (
    <section className={styles.homeContainer}>
      <div className={styles.infoContainer}>
        <div className={styles.infoTitle}>
          <h1>{pageLabels.home.mainTitle}</h1>
          <span>{pageLabels.home.mainDescription}</span>
        </div>
        <div className={styles.infoIcons}>
          <div className={styles.infoIconRow}>
            <div className={cx(styles.infoItem, styles.iconInfoLimit)}>
              <div className={styles.cartBox}>
                <ShoppingCart weight="fill" size={13} color="#fff" />
              </div>
              {pageLabels.home.simpleBuy}
            </div>
            <div className={styles.infoItem}>
              <div className={styles.packageBox}>
                <Package weight="fill" size={13} color="#fff" />
              </div>
              {pageLabels.home.intactCoffee}
            </div>
          </div>
          <div className={styles.infoIconRow}>
            <div className={cx(styles.infoItem, styles.iconInfoLimit)}>
              <div className={styles.timerBox}>
                <Timer weight="fill" size={13} color="#fff" />
              </div>
              {pageLabels.home.fastDelivery}
            </div>
            <div className={styles.infoItem}>
              <div className={styles.coffeeBox}>
                <Coffee weight="fill" size={13} color="#fff" />
              </div>
              {pageLabels.home.freshCoffee}
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={backgroundImg} alt="coffee image" />
      </div>
    </section>
  );
};
