import React from 'react';
 import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from 'react-redux'
import Store from './Store/Store';
import {PersistGate} from 'redux-persist/integration/react'
import persistStore from 'redux-persist/es/persistStore'

const persistedStore = persistStore(Store)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
   <Provider store={Store}>
    <PersistGate loading={<div>...loading</div>}  persistor={persistedStore}>
      <App/>
    </PersistGate>
   </Provider>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))