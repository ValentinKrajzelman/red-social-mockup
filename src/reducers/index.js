import { combineReducers } from 'redux';

import posts from './posts';

export const reducers = combineReducers({ posts }); //posts es un valor del state que podemos llamar en cualquier punto de la app
