// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import React from 'react';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';

import Nav from './components/nav/Nav';
import AboutMe from './pages/aboutme/AboutMe';
import AllProjects from './pages/allprojects/AllProjects';
import Footer from './components/footer/Footer';
import Technologies from './pages/technologies/Technologies';
import Projects from './pages/projects/Projects';
import Education from './pages/education/Education';
import Contact from './components/contact/Contact';
import Project from './pages/project/Project';


const App: React.FC = () => {

  const Layout = () => {
    return (
      <> 
        <Nav />
        <Outlet />
        <Contact/>
        <Footer />
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: '/mariamonchot/', 
      element: <Layout />,
      children: [
        {
          path: '/mariamonchot/',
          element: 
            <>
              <AboutMe/>
        
              <Technologies/>

              <Projects/>

              <Education/>
            </>
        },
        {
          path: '/mariamonchot/project' ,
          element: <Project />
        },
        {
          path: '/mariamonchot/allprojects',
          element: <AllProjects/>
        }
      ]
    }
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;