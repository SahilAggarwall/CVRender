import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/CSS_FILE.css';
import './CSS/responsive.css';
import App from './App';
// import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
// import Experience from './Experience.js';
// import About from './About.js';
// import Skills from './Skills.js';
// import Contact from './Contact.js';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <About />
//   },
//   {
//     path: "/About",
//     element: <About />,
//   },
//   {
//     path: "/Experience",
//     element: <Experience />,
//   },
//   {
//     path: "/Skills",
//     element: <Skills />,
//   },
//   {
//     path: "/Contact",
//     element: <Contact />,
//   },
// ]);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
