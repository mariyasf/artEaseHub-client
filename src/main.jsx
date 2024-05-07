import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Router.jsx'
import AuthProviders from './Provider/AuthProviders.jsx'
import { ThemeProvider } from './Provider/ThemeProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>

      <AuthProviders>
        <RouterProvider router={router} />
      </AuthProviders>
      
    </ThemeProvider>

  </React.StrictMode>,
)
