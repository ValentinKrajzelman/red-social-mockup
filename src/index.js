//este es el punto de entrada a la pagina de react
//ademas es donde inicializamos redux con createstore 
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { reducers } from './reducers';
import App from './App';
import './index.css';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  //provider nos permite acceder al state de redux desde cualquier lugar de la aplicacion gracias a que lo ponemos aca en el inicio de la aplicacion
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
