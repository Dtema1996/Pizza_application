import React from 'react';
import { observer } from 'mobx-react';
import styles from './input_checkbox.module.css';
import { CheckboxInput as BaseCheckboxInput,
  CheckboxInputProps as BaseCheckboxInputProps } from '../../base/input/checkbox/Checkbox';

export type CheckboxInputProps = Omit<BaseCheckboxInputProps, 'className'>;
export const CheckboxInput = observer(({ store, ...props }: CheckboxInputProps) => {
  return (
    <label className={store.value ? styles.selected : styles.unselected}>
      <BaseCheckboxInput className={styles.checkbox} store={store} {...props}/>
    </label>
  );
});