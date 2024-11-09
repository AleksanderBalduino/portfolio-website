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

/* CSS */
import './index.css'

const router = createBrowserRouter([
    { 
        path: '/portfolio-website/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { path: '/portfolio-website/', element: <HomePage /> },
            { path: '/portfolio-website/projetos', element: <Projetos /> },
            { path: '/portfolio-website/contato', element: <Contato /> },
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)