import { createStore, applyMiddleware } from 'redux';
import todos  from './reducers/index';
// import promise from 'redux-promise';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
// import { loadState, saveState } from  './localStorage'; 
// import throttle from 'lodash/throttle';

// const logger = (store) => (next) => {
//   if (!console.group) {
//     return next;
//   }

//   return (action) => {
//     console.group(action.type);
//     console.log('%c prev state', 'color: gray', store.getState());
//     console.log('%c action', 'color: blue', action);
//     const returnValue = next(action);
//     console.log('%c next state', 'color: green');
//     console.groupEnd(action.type);
//     return returnValue;
//   };
// };

// const promise = (store) => (next) => (action) => {
//   if (typeof action.then === 'function'){
//     return action.then(next);
//   }
//   return next(action);
// };

// const wrapDispatchWithMiddlewares = (store, middlewares) =>{
//   middlewares.slice().reverse().forEach(middleware =>
//     store.dispatch = middleware(store)(store.dispatch)
//   );
// };



const configureStore = () => {
  // const presistedState = loadState();
  const middlewares = [thunk];

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }


  // store.subscribe(throttle(() => {
  //   saveState({
  //     todos: store.getState().todos
  //   });
  // }, 1000));

  return createStore(
    todos,
    // presistedState,
    applyMiddleware(...middlewares)
  );
};

export default configureStore
