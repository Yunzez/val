import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Celebration from './pages/Celebration';
import { ThemeStyles } from './style';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/celebration', element: <Celebration /> },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeStyles />
    <RouterProvider router={router} />
  </React.StrictMode>
);
