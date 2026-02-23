import './App.css'
import { createHashRouter, RouterProvider } from 'react-router-dom'

import { Login } from './component/Login.jsx'
import { Register } from './component/Register.jsx'
import { Header } from './component/Header.jsx'
import { Hero } from './component/Hero.jsx'
import { Menu } from './component/Menu.jsx'
import { Footer } from './component/Footer.jsx'


// HOME PAGE COMPONENT
const Home = () => (
  <>
    <Header />
    <Hero />
    <Menu />
    <Footer />
  </>
)

// ROUTER CONFIG
const router = createHashRouter([
  {
    path: "/",
    element: <Login />,

  },
  {
    path: "/register",
    element: <Register />,

  },
  {
    path: "/home",
    element: <Home />,
  }
])

// APP
const App = () => {
  return <RouterProvider router={router} />
}

export default App