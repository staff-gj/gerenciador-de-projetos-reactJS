import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter, RouterProvider
} from "react-router-dom";


import Home from '../src/components/pages/Home'
import Contact from '../src/components/pages/Contact';
import Company from '../src/components/pages/Company';
import NewProject from '../src/components/pages/NewProject';
import App from './App';
import Projects from './components/pages/Projects';

const router = createBrowserRouter([
  {
    path: "",
    element: <App/>
  },
  {
    path: "/home",
    element: <Home/>
  },
  {
    path: "/contact",
    element: <Contact/>
  },
  {
    path: "/company",
    element: <Company/>
  },
  {
    path: "/newproject",
    element: <NewProject/>
  },
  {
    path: "/projects",
    element: <Projects/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
