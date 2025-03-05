import { useState } from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Layout from './Pages/Layout';
import Docs from './Pages/Docs';
import Home from './Pages/Home';



const router = createBrowserRouter([{
  path: '/',
  element: <Layout />,
  children: [
    {path: '', element: <Home />},
    {path: 'docs', element: <Docs />},
  ]
}]);


function App() {
  return <RouterProvider  router={router}/>;
}

export default App
