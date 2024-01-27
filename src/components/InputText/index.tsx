import React, { FC } from 'react';
import cx from 'classnames';
import styles from './index.module.scss';

interface Props {
  name: string;
  placeholder: string;
  required: boolean;
  disabled: boolean;
  width?: number;
  value?: string;
  onChange?: (value: string) => void;
  hasError?: boolean;
  controlled?: boolean;
}

export const InputText: FC<Props> = ({
  value,
  name,
  placeholder,
  required,
  disabled,
  width,
  onChange = () => {},
  hasError = false,
  controlled = true,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!onChange || !controlled) return;
    onChange(e.target.value);
  };
  const inputContainerStyles = cx(styles.inputContainer, {
    [styles.hasValidationError]: hasError,
    [styles.inputDisableBackground]: disabled,
  });

  return (
    <div
      className={inputContainerStyles}
      style={{ maxWidth: width ? `${width}px` : '100%' }}
    >
      <input
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        type="text"
        value={controlled ? value : ''}
        onChange={handleChange}
      />
      {!required && <span className={styles.optional}>Opcional</span>}
    </div>
  );
};
