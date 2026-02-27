import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './app/store'
import './index.css'
import Index from './pages/Index.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import JuegosVista from './pages/juego/JuegosVista'
import DetalleJuegoVista from './pages/juego/DetalleJuegoVista.jsx'
import AppLayout from './layouts/AppLayout.jsx'
import idLoader from './idLoader.js'
import TagsVista from './pages/tag/TagsVista.jsx'
import DetalleTagsVista from './pages/tag/DetalleTagsVista.jsx'
import PublishersVista from './pages/publisher/PublishersVista.jsx'
import DetallePublisherVista from './pages/publisher/DetallePublisherVista.jsx'
import PlataformaVista from './pages/plataforma/PlataformaVista.jsx'
import DetallePlataformaVista from './pages/plataforma/DetallePlataformaVista.jsx'
import EventosVista from './pages/eventos/EventosVista.jsx'
import FavoritosVista from './pages/favoritos/FavoritosVista.jsx'

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
        loader: idLoader
      },
      {
        path: "/tags",
        Component: TagsVista
      },

      {
        path: "/tags/:id",
        Component: DetalleTagsVista,
        loader: idLoader
      },
      {
        path: "/publisher",
        Component: PublishersVista
      },

      {
        path: "/publisher/:id",
        Component: DetallePublisherVista,
        loader: idLoader
      },
      {
        path: "/plataforma",
        Component: PlataformaVista
      },

      {
        path: "/plataforma/:id",
        Component: DetallePlataformaVista,
        loader: idLoader
      },

      {
        path: "/eventos",
        Component: EventosVista,
      },


      {
        path: "/favoritos",
        Component: FavoritosVista,
      },

    ]

  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
)
