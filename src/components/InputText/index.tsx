import React, { FC } from 'react';
import cx from 'classnames';
import styles from './index.module.scss';
import { FieldValues, UseFormRegister } from 'react-hook-form';

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
  register?: UseFormRegister<FieldValues>;
}

export const InputText: FC<Props> = ({
  value,
  name,
  placeholder,
  required,
  disabled,
  width,
  register,
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
      {!controlled && register !== undefined ? (
        <input
          {...register(name)}
          id={name}
          placeholder={placeholder}
          disabled={disabled}
          type="text"
          onChange={handleChange}
        />
      ) : (
        <input
          id={name}
          placeholder={placeholder}
          disabled={disabled}
          type="text"
          value={value}
          onChange={handleChange}
        />
      )}

      {!required && <span className={styles.optional}>Opcional</span>}
    </div>
  );
};
