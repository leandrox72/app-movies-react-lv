import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { MainPage, MoviePage, SearchPage } from './pages/index.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:'/',
    element: <MainPage />,
    errorElement: <div>404 Not Found</div>
  },
  {
    path: '/movie/:movieId',
    element: <MoviePage />,
    errorElement: <div>404 Not Found</div>
  },
  {
    path: '/search',
    element: <SearchPage />,
    errorElement: <div>404 Not Found</div>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
