import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Index from './pages/Index.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import JuegosVista from './pages/JuegosVista.jsx'
import DetalleJuegoVista from './pages/DetalleJuegoVista.jsx'
import AppLayout from './layouts/AppLayout.jsx'
import loader from './pages/DetalleJuegoVistaLoader.jsx'

const router = createBrowserRouter([

  {

    Component: AppLayout,

    // errorElement: <h1>Error</h1>,

    children: [
      {
        path: "/",
        Component: Index
      },

      {
        path: "/games",
        Component: JuegosVista
      },

      {
        path: "/games/:id",
        Component: DetalleJuegoVista,
        loader: loader


      }

    ]

  }

])

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,

)
