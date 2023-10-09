import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//======= bootstrap =======
import 'bootstrap/dist/css/bootstrap.min.css';
//============= React Router ==============
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home'
import Service from './pages/Service';
import About from './pages/About';
import Contact from './pages/Contact';
import Visionaid from './pages/works/Visionaid';
import MenFashion from './pages/works/MenFashion';
import AudiRS from './pages/works/AudiRS';
import OpenRun from './pages/works/OpenRun';
import DogChow from './pages/works/DogChow';
import HeadPhones from './pages/works/HeadPhones';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>errorElement 1</h1>,
  },
  {
    path: "/service",
    element: <Service />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/visionaid",
    element: <Visionaid />,
  },
  {
    path: "/men-fashion",
    element: <MenFashion />,
  },
  {
    path: "/audi-rs",
    element: <AudiRS />,
  },
  {
    path: "/open-run",
    element: <OpenRun />,
  },
  {
    path: "/dog-chow",
    element: <DogChow />,
  },
  {
    path: "/headphones",
    element: <HeadPhones />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

serviceWorkerRegistration.register();