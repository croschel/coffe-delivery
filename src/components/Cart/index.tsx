import { ShoppingCart } from '@phosphor-icons/react';
import { FC } from 'react';
import styles from './index.module.scss';

interface Props {
  itensCount: number;
  onClick: () => void;
}

export const Cart: FC<Props> = ({ itensCount, onClick }) => {
  return (
    <button role="button" className={styles.container} onClick={onClick}>
      <ShoppingCart weight="fill" size={22} color="#c47f17" />
      {itensCount > 0 && <div className={styles.countBox}>{itensCount}</div>}
    </button>
  );
};
