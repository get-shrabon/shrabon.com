import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layout/Root/Root.jsx';
import HomePage from './Layout/Pages/HomePage/index.jsx';
import AboutPage from './Layout/Pages/AboutPage/index.jsx';
import ServicesPage from './Layout/Pages/ServicesPage/index.jsx';
import ProjectsPage from './Layout/Pages/ProjectsPage/index.jsx';
import BlogPage from './Layout/Pages/BlogPage/index.jsx';
import ContactPage from './Layout/Pages/ContactPage/index.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about-us",
        element: <AboutPage />,
      },
      {
        path: "/services",
        element: <ServicesPage />,
      },
      {
        path: "/projects",
        element: <ProjectsPage />,
      },
      {
        path: "/blog",
        element: <BlogPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
