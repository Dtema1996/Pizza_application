import React from 'react';
import styles from './radio.module.css';
import { InputProps } from '../../../types/props';

export type RadioButtonProps = Omit<InputProps, 'type' | 'id' | 'name' | 'checked'> & {
  isSelected: boolean;
  value: string;
  children: React.ReactNode;
};

export const RadioButton = ({ value, isSelected, children, ...props }: RadioButtonProps) => {
  return (
    <div className={styles.radioContainer}>
      <input
        type='radio'
        checked={isSelected}
        onChange={props.onChange}
        value={value}
        id={value}
        name={value}
        className={styles.radio}
        {...props}
      />
      {children}
    </div>
  );
};