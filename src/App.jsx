import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './Components/Header/Navbar';
import Footer from './NavbarComponents/Footer';
function App() {
  return (
    <>
      <Navbar />
      <main>
      <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
