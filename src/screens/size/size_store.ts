import { observable } from 'mobx';

export class PizzaSize {
  @observable.ref
  size: string;

  constructor(size: string) {
    this.size = size;
  }

  setSize = (size: string) => {
    this.size = size;
  };
}