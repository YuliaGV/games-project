import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import './index.css'

import NotFoundPage from './pages/NotFoundPage.tsx';
import Home from './pages/Home.tsx';

import Hangman from './pages/Hangman/Hangman.tsx';
import NavBar from './components/NavBar.tsx';


const Root: React.FC = () => (
  <div>
    <NavBar />
    <Outlet />
  </div>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/hangman',
        element: <Hangman />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      }
      
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
        <RouterProvider router={router} />
    
  </React.StrictMode>,
);
