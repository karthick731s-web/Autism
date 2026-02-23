import './App.css'
import { createHashRouter, RouterProvider } from 'react-router-dom'

// Pages / Components
import { Login } from './component/Login.jsx'
import { Register } from './component/Register.jsx'
import { Header } from './component/Header.jsx'
import { Hero } from './component/Hero.jsx'
import { Menu } from './component/Menu.jsx'
import { Footer } from './component/Footer.jsx'
import { Assessmentsite } from './component/Assessmentsite.jsx'
import { About } from './component/About.jsx'
import { Education } from './component/Education.jsx'
import { Emotion } from './component/Emotion.jsx'
import { StrengthRadar } from './component/StrengthRadar.jsx'
import { SupportTools } from './component/SupportTools.jsx'


// ================= HOME PAGE =================
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace("#", "");
      const section = document.getElementById(sectionId);

      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 200);
      }
    }
  }, [location]);

  return (
    <>
      <Header />
      <Hero />
      <Menu />
      <About />
      <Footer />
    </>
  );
};


// ================= ROUTER =================
const router = createHashRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/assessment",
    element: <Assessmentsite />
  },
    {
    path: "/Education",
    element: <Education />
  },
  {
    path: "/Emotion",
    element: <Emotion />
  },
  {
    path: "/StrengthRadar",
    element: <StrengthRadar />
  },
  {
    path: "/SupportTools",
    element: <SupportTools />
  }
])


// ================= APP ROOT =================
const App = () => {
  return <RouterProvider router={router} />
}

export default App