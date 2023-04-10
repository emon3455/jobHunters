import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Statistics from './Components/Statistics/Statistics';
import Appliedjob from './Components/AppliedJob/Appliedjob';
import Blogs from './Components/Blogs/Blogs';
import Error from './Components/Error/Error';
import { loadData } from './Loaders';
import SingleJob from './Components/Home/SingleJob';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <Error></Error>,
    loader: loadData,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:"/:singlejobID",
        element: <SingleJob></SingleJob>,
        loader: ({params})=> fetch("job.json")
        // `https://emon3455.github.io/demo-picture/jobs/${params.singlejobID}.json?fbclid=IwAR2swsZH_1Sj2LX7XJWpOVoBiJFTOPrGzbkz0DwpTyepTgnKakppm8A8pKM`
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "/appliedJob",
        element: <Appliedjob></Appliedjob>
      },
      {
        path: "/blog",
        element: <Blogs></Blogs>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
