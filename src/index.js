/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import reportWebVitals from './reportWebVitals';
import HomePage from './HomePage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import President from './President';
import Home from './Home';
import ComingSoon from './ComingSoon';


const router = createBrowserRouter([{
  path: '/',
  element: <HomePage />,
  children: [
    {
      path: '/president',
      element: <President />
    },
    {
      path: '/home',
      element: <Home/>
    },
    {
      path: '/comingsoon',
      element: <ComingSoon/>
    }
  ]
},
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


reportWebVitals();
