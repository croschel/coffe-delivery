import { FC, ReactNode } from 'react';
import cx from 'classnames';
import styles from './index.module.scss';
interface Props {
  type: 'primary' | 'secondary' | 'icon';
  size: 'Tag' | 'M' | 'G';
  label?: string;
  icon?: ReactNode;
}
export const Button: FC<Props> = ({ label = '', type, size, icon }) => {
  const btnStyle = cx(styles.container, styles[type], styles[`button${size}`]);
  return (
    <button className={btnStyle}>
      <div className={styles.contentBtn}>
        {icon && icon}
        {type !== 'icon' && label}
      </div>
    </button>
  );
};
