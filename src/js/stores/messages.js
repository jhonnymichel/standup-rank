import { observable, action } from 'mobx';

class Store {
  @observable message = 'Teste';
  @action changeMessage(message) {
    this.message = message;
  }
}

export default new Store();