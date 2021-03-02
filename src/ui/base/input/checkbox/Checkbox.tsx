import React from 'react';
import { observer } from 'mobx-react';
import { BooleanStore } from '../../generic_store/generic_store';
import { InputChangeEvent } from '../../../types/events';
import { InputProps } from '../../../types/props';

export type CheckboxInputProps = Omit<InputProps, 'type' | 'value' | 'onChange'> & {
  store: BooleanStore;
};

export const CheckboxInput = observer(({ store, ...props }: CheckboxInputProps) => {
  const onChange = React.useCallback((event: InputChangeEvent) => {
    store.setValue(event.target.checked);
  }, [store]);

  return <input type='checkbox' checked={store.value} onChange={onChange} {...props}/>;
});
