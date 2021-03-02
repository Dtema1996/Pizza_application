import React from 'react';
import styles from './crust.module.css';
import { RadioButton } from '../../ui/base/input/radio/Radio';
import text from './crust_text';
import { Label } from '../../ui/base/label/Label';
import { InputChangeEvent } from '../../ui/types/events';
import { Link } from '../../ui/base/link/link';
import { BaseRoute } from '../../ui/routes/paths';
import { PizzaCrust } from './crust.store';
import { observer } from 'mobx-react';
import { Button } from '@material-ui/core';

type BaseCrustProps = {
  store: PizzaCrust;
};

const BaseCrust = observer(({ store }: BaseCrustProps) => {
  const handleChange = React.useCallback((event: InputChangeEvent) => {
    store.setCrust(event.target.value);
  }, [store]);

  const handleClick = React.useCallback(() => {
    sessionStorage.setItem('crust', store.crust);
  }, [store]);

  React.useEffect(() => {
    // componentDidUpdate() lifecycle, this is wehere you normally want to put API calls
    const fetch = sessionStorage.getItem('crust');
    store.setCrust(fetch ? fetch : store.crust);
  }, [store]);

  return (
    <div className={styles.container}>
      <div>
        <h1>Choose pizza crust</h1>
        <RadioButton
          value={text.thick()}
          isSelected={store.crust === text.thick()}
          onChange={handleChange}
        >
          <Label text={text.thick()}/>
        </RadioButton>
        <RadioButton
          value={text.thin()}
          isSelected={store.crust === text.thin()}
          onChange={handleChange}
        >
          <Label text={text.thin()}/>
        </RadioButton>
        <Link path={{ route: BaseRoute.TOPPINGS }}>
          <Button
            onClick={handleClick}
            color={'primary'}
            variant='contained'
            fullWidth
            style={{ marginTop: 20 }}
          >OK</Button>
        </Link>
      </div>
    </div>
  );
});

export const Crust = observer(() => {
  const [store] = React.useState(new PizzaCrust(text.thick()));
  return <BaseCrust store={store} />;
});
