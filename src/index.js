import React from 'react';
import reactDOM from 'react-dom/client';
import App from './App';
import './App.scss';
import UserContext from './components/state-context/UserContext';
import UserProvider from './components/state-context/UserProvider';

const root = reactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserProvider>
    <App />
  </UserProvider>
);
