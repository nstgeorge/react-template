import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/pages/Home.jsx'
import GlobalStyles from './styles/GlobalStyles.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <RouterProvider basename={import.meta.env.VITE_PAGES_DEPLOY ? '/react-template/' : '/'} router={router} />
  </React.StrictMode>,
)
