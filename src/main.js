import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Celebration from './pages/Celebration';
import { ThemeStyles } from './style';
const router = createBrowserRouter([
    { path: '/', element: _jsx(App, {}) },
    { path: '/celebration', element: _jsx(Celebration, {}) }
], {
    basename: import.meta.env.BASE_URL
});
ReactDOM.createRoot(document.getElementById('root')).render(_jsxs(React.StrictMode, { children: [_jsx(ThemeStyles, {}), _jsx(RouterProvider, { router: router })] }));
