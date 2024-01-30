import { ShoppingCart } from '@phosphor-icons/react';
import { FC } from 'react';
import styles from './index.module.scss';
import cx from 'classnames';

interface Props {
  itensCount: number;
  onClick: () => void;
}

export const Cart: FC<Props> = ({ itensCount, onClick }) => {
  const btnStyles = cx(styles.container, {
    [styles.cartEmpty]: itensCount === 0,
  });
  return (
    <button
      role="button"
      className={btnStyles}
      onClick={itensCount === 0 ? undefined : onClick}
    >
      <ShoppingCart weight="fill" size={22} color="#c47f17" />
      {itensCount > 0 && <div className={styles.countBox}>{itensCount}</div>}
    </button>
  );
};
