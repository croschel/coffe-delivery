import React, { FC } from 'react';
import cx from 'classnames';
import styles from './index.module.scss';

interface Props {
  value: string;
  name: string;
  placeholder: string;
  required: boolean;
  disabled: boolean;
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
    <div className={inputContainerStyles}>
      <input
        name={name}
        placeholder={placeholder}
        required={required}
        type="text"
        value={value}
        onChange={handleChange}
      />
      {!required && <span className={styles.optional}>Opcional</span>}
    </div>
  );
};
