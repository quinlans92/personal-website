import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './Components/NavBar';
import SideBar from './Components/SideBar';
import Contact from './Components/Contact';
import About from './Components/About';
import Projects from './Components/Projects';
import projectone from './images/projectOne.png';
import projectTwo from './images/projectTwo.png';
import projectThree from './images/projectThree.png';
import SingleProject from './Components/SingleProject';


const projects = [
  {
    id: 1,
    Project: "Motion Mock Up",
    image: projectone,
    desc: "this is a cool project"
  },
  {
    id: 2,
    Project: "KidsWeatherApp",
    image: projectTwo,
    desc: "this is a cool project"
  },
  {
    id: 3,
    Project: "Hello",
    image: projectThree,
    desc: "this is a cool project"
  }


]



function App() {
  const [samsProjects, setProjects] = useState(projects);


  return (
    <Router>
      <div className="App">
        <NavBar />
        <SideBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/Projects" element={<Projects projects={samsProjects} />} />
          <Route path="/projects/:projectID" element={<SingleProject projects={samsProjects} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

