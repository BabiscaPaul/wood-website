import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import PozeLemne from "./Pages/PozeLemne"
import PretLemne from './Pages/PretLemne'
import InformatiiUtile from './Pages/InformatiiUtile'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/', 
    element: <Home />,
  },
  
  {
    path: '/contact', 
    element: <Contact />
  }, 

  {
    path: '/poze', 
    element: <PozeLemne />,
  }, 

  {
    path: '/pret', 
    element: <PretLemne />,
  }, 

  {
    path: '/info', 
    element: <InformatiiUtile />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
