import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css';

// ✅ Log the password from environment variable
console.log("Password from env:", import.meta.env.VITE_APP_PASSWORD);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
