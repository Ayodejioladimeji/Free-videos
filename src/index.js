import React from 'react';
import ReactDOM from 'react-dom';
import './components/Nav/Nav.css';
import App from './App';
import { AppProvider } from './components/Nav/context';
ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
