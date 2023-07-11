import LandingPage from "./Components/LandingPage";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from "./Components/NavBar";
import SideBar from "./Components/SideBar";
import { useEffect } from "react";
import Contact from "./Components/Contact";
import About from "./Components/About";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";



function App() {


  return (
    <Router>
      <div className="App">
        <NavBar />
        <SideBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
