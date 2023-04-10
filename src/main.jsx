import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  json,
  RouterProvider,
} from "react-router-dom";
import Statistics from './component/Statistics/Statistics';
import Home from './component/Home/Home';


const router = createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    children:[
      {
        path:'statistics',
        element:<Statistics></Statistics>
      },

      {
        path: '/',
        element:<Home></Home>,
        loader:({params})=> fetch(`/featuredjobs.json`)

      }
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
