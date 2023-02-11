import React from 'react'
import Root from './routes/index'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage'
import Contact from './pages/Contact'
import About from './pages/About'
import Experience from './pages/Experience'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'experience',
        element: <Experience />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
