import React from 'react';
import styles from './topping.module.css';
import text from './topping_text';
import { observer } from 'mobx-react';
import { CheckboxInput } from '../../ui/components/input_checkbox/input_checkbox';
import { BooleanStore } from '../../ui/base/generic_store/generic_store';
import { Ingredients, ToppingStore } from './topping_store';
import { ButtonClickEvent } from '../../ui/types/events';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

type PickerProps = {
  label: string;
  store: BooleanStore;
  imgStyle: string;
};

const Picker = observer(({ label, store, imgStyle }: PickerProps) => {
  const toggleStore = React.useCallback(() => {
    store.value = !store.value;
  }, [store]);

  return (
    <div className={styles.inputRow}>
      <div onClick={toggleStore}>
        <div className={imgStyle}/>
      </div>
      <div className={styles.inputLabel} onClick={toggleStore}>
        {label}
      </div>
      <CheckboxInput store={store}/>
    </div>
  );
});

type BaseToppingProps = {
  store: ToppingStore;
};

const BaseTopping = observer(({ store }: BaseToppingProps) => {
  const history = useHistory();
  const handleOk = React.useCallback((event: ButtonClickEvent) => {
    event.stopPropagation();
    store.commitWorkspace();
    if (sessionStorage.getItem('size') === 'Small' && store.arrayValue.length < 5) {
      sessionStorage.setItem('toppings', store.arrayValue.join(', '));
      history.push('/custom');
    } else if (sessionStorage.getItem('size') === 'Medium' && store.arrayValue.length < 7) {
      sessionStorage.setItem('toppings', store.arrayValue.join(', '));
      history.push('/custom');
    } else if (sessionStorage.getItem('size') === 'Large' && store.arrayValue.length < 9) {
      sessionStorage.setItem('toppings', store.arrayValue.join(', '));
      history.push('/custom');
    } else {
      alert(`Your pizza size is ${sessionStorage.getItem('size')} so pick less toppings!`);
    }
  }, [store, history]);

  return (
    <div className={styles.container}>
      <div>
        <h1>{text.header()}</h1>
        <p>You can have only less than 5 toppings for a small pizza</p>
        <p>You can have only less than 7 toppings for a medium pizza</p>
        <p>You can have only less than 9 toppings for a large pizza</p>
        <div className={styles.pickerContainer}>
          <Picker
            label={text.bacon()}
            store={store.workspace[Ingredients.BACON]}
            imgStyle={styles.bacon}
          />
          <Picker
            label={text.blackOlives()}
            store={store.workspace[Ingredients.BLACK_OLIVES]}
            imgStyle={styles.blackOlive}
          />
          <Picker
            label={text.extraCheese()}
            store={store.workspace[Ingredients.EXTRA_CHEESE]}
            imgStyle={styles.cheese}
          />
          <Picker
            label={text.greenPeppers()}
            store={store.workspace[Ingredients.GREEN_PEPPERS]}
            imgStyle={styles.greenPepper}
          />
          <Picker
            label={text.mushrooms()}
            store={store.workspace[Ingredients.MUSHROOMS]}
            imgStyle={styles.mushroom}
          />
          <Picker
            label={text.onions()}
            store={store.workspace[Ingredients.ONIONS]}
            imgStyle={styles.onion}
          />
          <Picker
            label={text.pepperoni()}
            store={store.workspace[Ingredients.PEPPERONI]}
            imgStyle={styles.pepperoni}
          />
          <Picker
            label={text.pineapple()}
            store={store.workspace[Ingredients.PINEAPPLE]}
            imgStyle={styles.pineapple}
          />
          <Picker
            label={text.sausage()}
            store={store.workspace[Ingredients.SAUSAGE]}
            imgStyle={styles.sausage}
          />
          <Picker
            label={text.spinach()}
            store={store.workspace[Ingredients.SPINACH]}
            imgStyle={styles.spinach}
          />
        </div>
        <Button
          onClick={handleOk}
          color={'primary'}
          variant='contained'
          fullWidth
        >OK</Button>
      </div>
    </div>
  );
});

export const Topping = observer(() => {
  const [store] = React.useState(new ToppingStore());
  return <BaseTopping store={store}/>;
});
