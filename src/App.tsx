import React, { createRef } from 'react'
import Root from './routes/index'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage'
import Contact from './pages/Contact'
import About from './pages/About'
import Experience from './pages/Experience'
import { CssBaseline, ThemeProvider } from '@mui/material'
import mainTheme from './themes/main'
import Home from './pages/Home'
import FacebookLogin from './pages/FacebookLogin'

export const routes = [
  { path: '/', name: 'Home', element: <Home />, nodeRef: createRef<HTMLDivElement>() },
  { path: '/about', name: 'About', element: <About />, nodeRef: createRef<HTMLDivElement>() },
  {
    path: '/experience',
    name: 'Experience',
    element: <Experience />,
    nodeRef: createRef<HTMLDivElement>(),
  },
  {
    path: '/contact',
    name: 'Contact',
    element: <Contact />,
    nodeRef: createRef<HTMLDivElement>(),
  },
  {
    path: '/facebook/oauth',
    name: 'Facebook Auth',
    element: <FacebookLogin />,
    nodeRef: createRef<HTMLDivElement>(),
  },
]
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: routes.map((route) => ({
      index: route.path === '/',
      path: route.path === '/' ? undefined : route.path,
      element: route.element,
    })),
  },
])

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
