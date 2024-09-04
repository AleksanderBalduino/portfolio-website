/* React */
import React from 'react'
import ReactDOM from 'react-dom/client'

/* React Router */
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

/* Routes */
import { HomePage } from './routes/Home/HomePage.tsx';
import { Projetos } from './routes/Projetos/Projetos.tsx';
import { Contato } from './routes/Contato/Contato.tsx';
import { ErrorPage } from './routes/Error/ErrorPage.tsx';

/* Components */
import { App } from './App.tsx'

/* Animate CSS */
// import 'animate.css';

/* CSS */
import './index.css'

const router = createBrowserRouter([
    { 
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { path: '/', element: <HomePage /> },
            { path: '/projetos', element: <Projetos /> },
            { path: '/contato', element: <Contato /> },
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)