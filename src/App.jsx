import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './Components/Header/Navbar';
import Hero from './NavbarComponents/Hero';
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <main>
      <Outlet />
      </main>
    </>
  );
}

export default App;
