import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './NavbarComponents/About'
import Contact from './NavbarComponents/Contact';
import Projects from './NavbarComponents/projects';
import Home from './Home';
// import Hero from './NavbarComponents/Hero';

const router = createBrowserRouter(
  [
  {
    path:'/',
    element:<App/>,
    children:[
      {
        index: true,
        element:<Home/>
      },
      {
        path:'about',
        element:<About/>
        },
      {
        path:'contact',
        element:<Contact/>
      },
      {
        path: 'projects',
        element: <Projects/>
      }
    ]
    
  }
]
)

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(
  <React.StrictMode>
     <RouterProvider router={router}/>
  </React.StrictMode>
);

reportWebVitals();



// createRoutesFromElements( //import createRoutesFromElements,Route, BrowserRouter,
//     <Route path='/' element={<App/>}>,
//     <Route path='/About' element={<About/>}/>,
//     <Route path='/Contact' element={<Contact/>}/>,
//     <Route path='/Projects' element={<Projects/>}/>,
//     <Route path='/Resume' element={<Resume/>}/>
//     </Route>
//   )