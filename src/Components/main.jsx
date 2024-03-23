import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from '../Pages/Home.jsx'
import Contact from '../Pages/Contact.jsx'
import PozeLemne from "../Pages/PozeLemne.jsx"
import PretLemne from '../Pages/PretLemne.jsx'
import InformatiiUtile from '../Pages/InformatiiUtile.jsx'
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
