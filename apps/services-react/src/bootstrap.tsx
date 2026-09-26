import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '@design-tokens/core/css';
import '@design-tokens/core/components.css';
import './index.css';

const root = document.getElementById('root');
if (!root) {
  throw new Error('Root element not found');
}

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
