import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { counter, todoApp } from './redux/reducer';

export const store = createStore(counter, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const render = () => {
  ReactDOM.render(
    <App />, 
    document.getElementById('root')
  );
}


store.subscribe(render);
render();