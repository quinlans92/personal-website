import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './Components/NavBar';
import Socials from './Components/Socials';
import Contact from './Components/Contact';
import About from './Components/About';
import Projects from './Components/Projects';
import projectone from './images/projectOne.png';
import projectTwo from './images/projectTwo.png';
import projectThree from './images/projectThree.png';
import SingleProject from './Components/SingleProject';

function importAll(r) {
  let videos = {};
  r.keys().forEach((item, index) => {
    videos[item.replace('./', '')] = r(item);
  });
  return videos;
}

const videos = importAll(require.context('./videos', false, /\.mp4$/));


const projects = [
  {
    id: 1,
    image: projectone,
    features: "this is a cool project"
  },
  {
    id: 2,
    Project: "   Kids Weather App",
    image: projectTwo,
    video: videos['AppDemo.mp4'], // Dynamically import video

    features: ["p5.js", "Use of APIs to fetch real time weather information", "JSON data", "text to speech", "voice recognition", "graphics"],


  },
  {
    id: 3,
    Project: "Hello",
    image: projectThree,
    features: "this is a cool project"
  }


]



function App() {
  const [samsProjects, setProjects] = useState(projects);


  return (
    <Router>
      <div className="App">


        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/Projects" element={<Projects projects={samsProjects} />} />
          <Route path="/projects/:projectID" element={<SingleProject projects={samsProjects} />} />
        </Routes>
      </div>
      <Socials />
      <NavBar />
    </Router>
  );
}

export default App;

