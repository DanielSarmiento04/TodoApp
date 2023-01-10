import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

function Texto()
{
  return (
          <p>Texto</p>
  );
}

root.render(
  <React.StrictMode>
    <Texto />
    <App />
  </React.StrictMode>
);

