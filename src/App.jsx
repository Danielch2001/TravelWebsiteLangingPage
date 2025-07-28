import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Stays from "./pages/Stays";
import Flights from "./pages/Flights";
import Packages from "./pages/Packages";
import SignUp from "./pages/SignUp";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stays" element={<Stays />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>    
      <Footer />
    </Router>
  );
}
