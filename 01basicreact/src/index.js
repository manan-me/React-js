import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>      
    <App />
  </React.StrictMode>
);
// it works without strict mode its only for development purposes to hanle issues
