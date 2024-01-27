import { FC, ReactNode } from 'react';
import cx from 'classnames';
import styles from './index.module.scss';

interface Props {
  selected: boolean;
  label: string;
  icon?: ReactNode;
  onSelect: (value: string) => void;
}

export const Select: FC<Props> = ({ selected, label, icon, onSelect }) => {
  const btnStyle = cx(styles.container, {
    [styles.selected]: selected,
  });
  return (
    <button className={btnStyle} onClick={() => onSelect(label)}>
      <div className={styles.contentBtn}>
        {!!icon && icon}
        {label}
      </div>
    </button>
  );
};
