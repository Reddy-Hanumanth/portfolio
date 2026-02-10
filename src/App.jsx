import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './Components/Header/Navbar';
function App() {
  return (
    <>
      <Navbar />
      <main>
      <Outlet />
      </main>
    </>
  );
}

export default App;
