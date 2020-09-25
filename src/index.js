import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
 
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import manageTodo from './reducers/manageTodo';

let store = createStore(manageTodo);
 
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);