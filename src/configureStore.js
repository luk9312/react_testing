import { createStore } from 'redux';
import { todoApp } from './reducers/index';
import { loadState, saveState } from  './localStorage'; 
import throttle from 'lodash/throttle';


const configureStore = () => {
  const presistedState = loadState();
  const store = createStore(
    todoApp,
    presistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  store.subscribe(throttle(() => {
    saveState({
      todos: store.getState().todos
    });
  }, 1000));

  return store;
};

export default configureStore
