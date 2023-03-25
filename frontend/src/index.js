import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'antd/dist/reset.css';
import { StateProvider } from './StateProvider';
import reducer, { initialState } from './Reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <StateProvider initialState={initialState} reducer={reducer}>
  
        <App />

  </StateProvider>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);


