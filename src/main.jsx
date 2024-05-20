import React from 'react'
import Routes from './Routes/Routes';
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";
import Error from './Error/Error';
import Home from './Home/Home';
import { HelmetProvider } from 'react-helmet-async';
import Menu from './Menu/Menu';
import Order from './Order/Order';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Routes></Routes>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>
      },
      {
        path: '/order',
        element: <Order></Order>
      }

    ],

  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>,
)
