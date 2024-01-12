import { FC } from 'react';
import styles from './index.module.scss';
import cx from 'classnames';

interface Props {
  value: number;
  maxNumber: number;
  disabled?: boolean;
  onChange: (value: number) => void;
}

export const InputNumber: FC<Props> = ({
  value,
  maxNumber,
  disabled = false,
  onChange,
}) => {
  const handleChange = (type: '+' | '-') => {
    if (type === '+' && value < maxNumber) {
      onChange(value + 1);
    } else if (type === '-' && value > 0) {
      onChange(value - 1);
    }
  };

  const boxStyles = cx(styles.container, {
    [styles.disabled]: disabled,
  });
  const buttonStyles = cx(styles.button, {
    [styles.btnDisabled]: disabled,
  });
  return (
    <div className={boxStyles}>
      <button
        className={buttonStyles}
        role="button"
        onClick={() => handleChange('-')}
      >
        -
      </button>
      <span>{value}</span>
      <button
        className={buttonStyles}
        role="button"
        onClick={() => handleChange('+')}
      >
        +
      </button>
    </div>
  );
};
