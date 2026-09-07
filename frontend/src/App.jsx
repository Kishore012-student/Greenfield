import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Navbardemo from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Projects from './pages/Projects'
import ProjectDetails from "./pages/ProjectDetails";
import Register from './pages/Register';
import About from "./pages/About";
import Contact from "./pages/Contact"
import './App.css'
import Wishlist from "./pages/Wishlist";
import Footer from "./components/Footer";
import Booking from "./pages/Booking";
import MyBookings from "./pages/MyBookings";

function App() {

  return (
    <>
      <Navbardemo />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project-details" element={<ProjectDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/my-bookings" element={<MyBookings />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
