import { Dispatcher } from './Dispatcher';

const state = {
  count: 0
};

const listeners = [];

const Store = {
  getState() {
    return state;
  },
  
  subscribe(listener) {
    listeners.push(listener);
  },

  dispatch(action) {
    switch(action.type) {
      case 'INCREMENT':
        state.count += 1;
        break;
      default:
        break;
    }
    listeners.forEach(listener => listener());
  }
};

Dispatcher.register(Store.dispatch.bind(Store));
export default Store;