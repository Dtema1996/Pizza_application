import { observable } from 'mobx';

export class PizzaCrust {
  @observable.ref
  crust: string;

  constructor(crust: string) {
    this.crust = crust;
  }

  setCrust = (crust: string) => {
    this.crust = crust;
  };
}