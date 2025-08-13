import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from './Pages/Home/Home.jsx';

import AOS from "aos";
import "aos/dist/aos.css";
 AOS.init();
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
   
    
  </StrictMode>,
)
