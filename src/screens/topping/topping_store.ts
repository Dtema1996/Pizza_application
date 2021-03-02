import { computed, observable } from 'mobx';
import { BooleanStore } from '../../ui/base/generic_store/generic_store';

export enum Ingredients {
  PEPPERONI = 'Pepperoni',
  MUSHROOMS = 'Mushrooms',
  ONIONS = 'Onions',
  SAUSAGE = 'Sausage',
  BACON = 'Bacon',
  EXTRA_CHEESE = 'Extra_cheese',
  BLACK_OLIVES = 'Black_olives',
  GREEN_PEPPERS = 'Green_peppers',
  PINEAPPLE = 'Pineapple',
  SPINACH = 'Spinach',
}

export const orderedIngredients: readonly Ingredients[] = [
  Ingredients.BACON,
  Ingredients.BLACK_OLIVES,
  Ingredients.EXTRA_CHEESE,
  Ingredients.GREEN_PEPPERS,
  Ingredients.MUSHROOMS,
  Ingredients.ONIONS,
  Ingredients.PEPPERONI,
  Ingredients.PINEAPPLE,
  Ingredients.SAUSAGE,
  Ingredients.SPINACH,
];

export class ToppingStore {
  @observable.deep toppings: Record<Ingredients, boolean>;
  workspace: Record<Ingredients, BooleanStore>;

  constructor() {
    this.toppings = {
      [Ingredients.BACON]: false,
      [Ingredients.BLACK_OLIVES]: false,
      [Ingredients.EXTRA_CHEESE]: false,
      [Ingredients.GREEN_PEPPERS]: false,
      [Ingredients.MUSHROOMS]: false,
      [Ingredients.ONIONS]: false,
      [Ingredients.PEPPERONI]: false,
      [Ingredients.PINEAPPLE]: false,
      [Ingredients.SAUSAGE]: false,
      [Ingredients.SPINACH]: false,
    };

    this.workspace = {
      [Ingredients.BACON]: new BooleanStore(this.toppings[Ingredients.BACON]),
      [Ingredients.BLACK_OLIVES]: new BooleanStore(this.toppings[Ingredients.BLACK_OLIVES]),
      [Ingredients.EXTRA_CHEESE]: new BooleanStore(this.toppings[Ingredients.EXTRA_CHEESE]),
      [Ingredients.GREEN_PEPPERS]: new BooleanStore(this.toppings[Ingredients.GREEN_PEPPERS]),
      [Ingredients.MUSHROOMS]: new BooleanStore(this.toppings[Ingredients.MUSHROOMS]),
      [Ingredients.ONIONS]: new BooleanStore(this.toppings[Ingredients.ONIONS]),
      [Ingredients.PEPPERONI]: new BooleanStore(this.toppings[Ingredients.PEPPERONI]),
      [Ingredients.PINEAPPLE]: new BooleanStore(this.toppings[Ingredients.PINEAPPLE]),
      [Ingredients.SAUSAGE]: new BooleanStore(this.toppings[Ingredients.SAUSAGE]),
      [Ingredients.SPINACH]: new BooleanStore(this.toppings[Ingredients.SPINACH]),
    };
  }

  // This triggers a reload from the stored values to the workspace
  // This is best used before opening the page or whenever it needs to
  reloadWorkspace = (): void => {
    Object.entries(this.workspace).forEach(([ingredient, store]) => {
      store.value = this.toppings[ingredient as Ingredients];
    });
  };

  // This triggers a commit to the workspace from the stored values
  // Best used to saving stuff
  commitWorkspace = (): void => {
    Object.entries(this.workspace).forEach(([ingredient, store]) => {
      this.toppings[ingredient as Ingredients] = store.value;
    });
  };


  @computed get arrayValue(): Ingredients[] {
    return orderedIngredients.filter((ingredient) => this.toppings[ingredient] === true);
  }
}