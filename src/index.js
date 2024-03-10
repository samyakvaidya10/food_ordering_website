import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {RouterProvider, createBrowserRouter} from 'react-router-dom' 
import Body from './Components/Body';
import ErrorComp from './Components/ErrorComp';
import Restaurant from './Components/Restaurant';
import Cart from './Components/Cart';
const root = ReactDOM.createRoot(document.getElementById('root'));

//create the router using react router dom library
const appRouter=createBrowserRouter([
  {
    path:'/',
    element:<App />,
    children:[
      {
        path:'/',
        element:<Body />
      },
      {
        path:'restaurant/:resId',
        element:<Restaurant />
      },
      {
        path:'/cart',
        element:<Cart />
      }
    ],
    errorElement:<ErrorComp />
  }
])


root.render(
  
    <RouterProvider router={appRouter} />
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
