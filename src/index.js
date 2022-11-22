import React from 'react';
import ReactDOM from 'react-dom/client';
//import '../styles/index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import ConAmibo from './Context/ConAmibo';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


  <React.StrictMode>
      <ConAmibo>
        <RouterProvider router={router} />
      </ConAmibo>
  </React.StrictMode>
);

reportWebVitals();
