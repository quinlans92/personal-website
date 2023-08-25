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
import WeatherAppPic from './images/WeatherAppPic.png';
import ThreadLairPic from './images/ThreadLairPic.png';
import ReactRecipePic from './images/ReactRecipePic.png'
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
    dt: ["8 / 4 / 22"],
    category: ["UI Design, ", "Motion Graphics"],
    Project: "Motion Mock Up",
    image: ThreadLairPic,
    video: videos['ThreadLair.mp4'],
    features: ["p5.js", "Use of APIs to fetch real time weather information", "JSON data", "text to speech", "voice recognition", "graphics"],
    Process: ["openprocessing", "weekly reprt", "scheduling", "planning", "trello", "graphics"],
    isCodeProject: false, // Not a code project


  },
  {
    id: 2,
    dt: ["8 / 4 / 22"],
    category: ["UI Design, ", "Graphic Design, ", "App Development"],
    Project: "   Kids Weather App",
    image: WeatherAppPic,
    video: videos['AppDemo.mp4'], // Dynamically import video
    features: ["p5.js", "Use of APIs to fetch real time weather information", "JSON data", "text to speech", "voice recognition", "graphics"],
    Process: ["openprocessing", "weekly reprt", "scheduling", "planning", "trello", "graphics"],
    isCodeProject: true, // Not a code project


  },
  {
    id: 3,
    dt: ["8 / 4 / 22"],
    category: ["UI Design, ", "Web Development, ", "App Development"],
    Project: " React Recipe App",
    image: ReactRecipePic,
    video: videos['ReactRecipe.mp4'], // Dynamically import video
    features: ["p5.js", "Use of APIs to fetch real time weather information", "JSON data", "text to speech", "voice recognition", "graphics"],
    Process: ["openprocessing", "weekly reprt", "scheduling", "planning", "trello", "graphics"],
    isCodeProject: true, // Not a code project

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

