import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import store, {persistor} from './components/store'
import 'bootstrap/dist/css/bootstrap.css'
import { PersistGate } from 'redux-persist/integration/react'
ReactDOM.render(
  <React.StrictMode>
    <PersistGate loading={null} persistor={persistor}>
    <Provider store={store}>
    <App />
    </Provider>
    </PersistGate>
  </React.StrictMode>,
  document.getElementById('root')
);


