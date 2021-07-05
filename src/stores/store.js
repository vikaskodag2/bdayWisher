import { observable, action } from 'mobx';

class Store {
  @observable date = new Date();

  @action
  setDate = _date => {
    this.date = _date;
  };
}

export default Store;
