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
import JobDetails from './component/JobDetails/JobDetails';
import ErrorPage from './component/ErrorPage/ErrorPage';
import AppliedJobs from './component/AppliedJobs/AppliedJobs';
import { apply } from './loders/applyjobsdata';
import Blog from './component/Blog/Blog';


const router = createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:'statistics',
        element:<Statistics></Statistics>
      },

      {
        path: '/',
        element:<Home></Home>,
        loader:()=> fetch(`/featuredjobs.json`)

      },
      {
        path: '/jobdetails/:id',
        element:<JobDetails></JobDetails>,
        loader:({params})=> fetch(`/featuredjobs.json`)
      },
      {
        path: '/AppliedJobs',
        element:<AppliedJobs></AppliedJobs>,
        loader: apply
      },
      {
        path: '/blog',
        element:<Blog></Blog>
      },
      
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
