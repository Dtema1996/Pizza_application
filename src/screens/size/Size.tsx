import React from 'react';
import styles from './size.module.css';
import { RadioButton } from '../../ui/base/input/radio/Radio';
import text from './size_text';
import { InputChangeEvent } from '../../ui/types/events';
import { Label } from '../../ui/base/label/Label';
import { Link } from '../../ui/base/link/link';
import { BaseRoute } from '../../ui/routes/paths';
import { observer } from 'mobx-react';
import { PizzaSize } from './size_store';
import { Button } from '@material-ui/core';

type BaseSizeProps = {
  store: PizzaSize;
};

const BaseSize = observer(({ store }: BaseSizeProps) => {
  const handleChange = React.useCallback((event: InputChangeEvent) => {
    store.setSize(event.target.value);
  }, [store]);

  const handleClick = React.useCallback(() => {
    sessionStorage.setItem('size', store.size);
  }, [store]);

  React.useEffect(() => {
    const fetch = sessionStorage.getItem('size');
    store.setSize(fetch ? fetch : store.size);
  }, [store]);

  return (
    <div className={styles.container}>
      <div>
        <h1>Choose pizza size</h1>
        <RadioButton
          value={text.small()}
          isSelected={store.size === text.small()}
          onChange={handleChange}
        >
          <Label text={text.small()}/>
        </RadioButton>
        <RadioButton
          value={text.medium()}
          isSelected={store.size === text.medium()}
          onChange={handleChange}
        >
          <Label text={text.medium()}/>
        </RadioButton>
        <RadioButton
          value={text.large()}
          isSelected={store.size === text.large()}
          onChange={handleChange}
        >
          <Label text={text.large()}/>
        </RadioButton>
        <Link path={{ route: BaseRoute.CRUST }}>
          <Button
            onClick={handleClick}
            color={'primary'}
            variant='contained'
            fullWidth
            style={{ marginTop: 20 }}
          >OK</Button>
        </Link>
      </div>
      <div>

      </div>
    </div>
  );
});

export const Size = observer(() => {
  const [store] = React.useState(new PizzaSize(text.large()));
  return <BaseSize store={store} />;
});

