import React from 'react';
import {Provider} from 'react-redux'
import configStore from './App/configureStore'
import App from './App/app'

const store = configStore()

const rnredux = () => (
    <Provider store={store}>
      <App/>
    </Provider>
);

export default rnredux
