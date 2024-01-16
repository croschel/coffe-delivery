import { ImageType } from '@/constants/images';
import { MapPin } from '@phosphor-icons/react';
import { Cart } from '../Cart';
import styles from './index.module.scss';

export const Header = () => {
  const location = 'São Paulo, SP';
  const handleClickCart = () => {
    // TODO - navigate to Cart page
  };
  return (
    <header className={styles.headerContainer}>
      <img src={ImageType.COFFEE_LOGO} alt="Logo Coffee" />
      <div className={styles.rightSideContainer}>
        <div className={styles.locationBox}>
          <MapPin weight="fill" size={22} color="#8047f8" />
          <span>{location}</span>
        </div>
        <Cart itensCount={2} onClick={handleClickCart} />
      </div>
    </header>
  );
};
