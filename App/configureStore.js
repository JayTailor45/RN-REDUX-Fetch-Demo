import {applyMiddleware, createStore} from "redux";

import app from './reducers/index';

import thunk from 'redux-thunk';

export default function configureStore() {
  return createStore(app, applyMiddleware(thunk));
}