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
import weatherAppDevices from './images/WeatherAppDevised.png';
import brainstorm from './images/brainstorm.png';
import weatherSkecth from './images/weatherAppSketch.jpg'
import weatherSkecthTwo from './images/weatherAppSkecthTwo.jpg';
import bwMockUp from './images/bwMockUp.png';
import colorPalWeather from './images/colorPallete.png';
import fontKidApp from './images/fonts.png';
import weatherAppPic2 from './images/WeatherAppPic2.png';

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
    dt: ["8 / 4 / 2022"],
    deviceImg: weatherAppDevices,
    sketch: [weatherSkecth, weatherSkecthTwo],
    bwMockUp: bwMockUp,
    colorPallete: colorPalWeather,
    colorPalleteDes: ['The rainbow color pallete theme was inspired by my research of successful kids apps that utilize vibrant colors, I have chosen a joyful range of rainbow hues to create an engaging and imaginative environment. By embracing the trend of colorful visuals in childrens apps, my palette aims to capture young users attention, facilitate easy navigation, and ensure a delightful and immersive user experience.', 'I decided to go with color pallete number two because I had envisioned from the begining how I would use all the colors from the rainbow for each letter of the title/logo.', ''],
    brainstorming: brainstorm,
    font: fontKidApp,
    finalMocup: WeatherAppPic,
    finalMockUpDesc: ['This was my final mockup with color, character design and features complete, this served as the final blueprint for bringing my App to life. I made this mockup in illustrator so that I could later export the character, clothes and title to OpenProcessing.'],
    fontDesc: ['I selected these fun and bubbly fonts to infuse my project with a sense of playfulness and charm. These font selections were made with careful consideration, ensuring that my design had youthful energy and a lighthearted atmosphere', 'After incorporating my chosen color pallete to font number four,I saw the text come alive, capturing the very essence of joy and creativity that I had envisioned for my project. With this alignment, I confidently finalized my font choice for this App.'],
    ProblemsToSolve: ['Integration with APIs: I was required to find and integrate suitable APIs to fetch real-time weather data reliably and accurately.', 'Data Processing and Presentation: I was required to process the fetched data and present data in a user-friendly and visually appealing manner', 'Voice Interaction: Implementing speech recognition required me to learn new skills and solve challenges related to integrating the technology', 'UI Design and Interaction:I was required to design a fun UI that was very intuitive and kid friendly and come up with some engaging features to enhance the experience', 'Geo Location Accuracy: I was required to learn a new skill and integrating it smoothly into the app addressing challenges as they arise.'],
    objective: ["Working as a member of a team I was required to research, previsualise and produce a motion graphics mockup of an application, based on a client’s brief. The mockup must include the core functionality of the application and show navigation and interactivity of its different sections and menus and any popup windows."],
    category: ["UI Design, ", "Motion Graphics"],
    Project: "Motion Mock Up",
    image: ThreadLairPic,
    video: videos['ThreadLair.mp4'],
    features: ["p5.js", "Use of APIs to fetch real time weather information", "JSON data", "text to speech", "voice recognition", "graphics"],
    Software: ["openprocessing", "weekly reprt", "scheduling", "planning", "trello", "graphics"],
    isCodeProject: false, // Not a code project


  },
  {
    id: 2,
    dt: ["8 / 4 / 2022"],
    deviceImg: weatherAppDevices,
    sketch: [weatherSkecth, weatherSkecthTwo],
    bwMockUp: bwMockUp,
    colorPallete: colorPalWeather,
    colorPalleteDes: ['The rainbow color pallete theme was inspired by my research of successful kids apps that utilize vibrant colors, I have chosen a joyful range of rainbow hues to create an engaging and imaginative environment. By embracing the trend of colorful visuals in childrens apps, my palette aims to capture young users attention, facilitate easy navigation, and ensure a delightful and immersive user experience.', 'I decided to go with color pallete number two because I had envisioned from the begining how I would use all the colors from the rainbow for each letter of the title/logo.'],
    brainstorming: brainstorm,
    font: fontKidApp,
    finalMocup: weatherAppPic2,
    finalMockUpDesc: ['This was my final mockup with color, character design and features complete, this served as the final blueprint for bringing my App to life. I made this mockup in illustrator so that I could later export the character, clothes and title to OpenProcessing.', 'With the design phase now concluded, I was ready to translate my creative vision into a fully interactive app, aligning seamlessly with the projects designated objectives. Using p5.js framework, I embraced the exciting challenge of transforming my static designs into a dynamic, user-friendly experience. This phase demanded rapid upskilling as I ventured into uncharted territory, integrating advanced features such as geolocation services, voice recognition, and weather APIs. I welcome you to watch the demo of the App fully finished and invite you to view my code and explore the App through the below video and link.'],
    fontDesc: ['I selected these fun and bubbly fonts to infuse my project with a sense of playfulness and charm. These font selections were made with careful consideration, ensuring that my design had youthful energy and a lighthearted atmosphere.', 'After incorporating my chosen color pallete to font number four,I saw the text come alive, capturing the very essence of joy and creativity that I had envisioned for my project. With this alignment, I confidently finalized my font choice for this App.'],
    ProblemsToSolve: ['INTEGRATION WITH APIs: I was required to find and integrate suitable APIs to fetch real-time weather data reliably and accurately.', 'DATA PROCESSING AND PRESENTAION: I was required to process the fetched data and present data in a user-friendly and visually appealing manner', 'VOICE INTERACTION: Implementing speech recognition required me to learn new skills and solve challenges related to integrating the technology', 'UI DESIGN AND INTERACTION:I was required to design a fun UI that was very intuitive and kid friendly and come up with some engaging features to enhance the experience', 'GEO LOCATION ACCURACY: I was required to learn a new skill and integrating it smoothly into the app addressing challenges as they arise.'],
    objective: ["Design and develop an interactive experience that demonstrates programming, visualization combined with supporting hardware that facilitates user interaction or input and it must be based around Motion Tracking & Movement, Generative & Interactive Art or Real-Time Data Visualisation"],
    category: ["UI Design, ", "Graphic Design, ", "App Development"],
    Project: "   Kids Weather App",
    image: WeatherAppPic,
    video: videos['AppDemo.mp4'], // Dynamically import video
    features: ["p5.js", "Real Time Weather Information", "JSON data", "Text to Speech", "Voice Recognition", "Geo-Location accuracy"],
    Software: ["openprocessing", "Adobe illustrator", "OpenWeather API", "P5 Library"],
    isCodeProject: true, // Not a code project


  },
  {
    id: 3,
    dt: ["8 / 4 / 2022"],
    deviceImg: ThreadLairPic,
    sketch: [weatherSkecth, weatherSkecthTwo],
    bwMockUp: bwMockUp,
    colorPallete: colorPalWeather,
    colorPalleteDes: ['The rainbow color pallete theme was inspired by my research of successful kids apps that utilize vibrant colors, I have chosen a joyful range of rainbow hues to create an engaging and imaginative environment. By embracing the trend of colorful visuals in childrens apps, my palette aims to capture young users attention, facilitate easy navigation, and ensure a delightful and immersive user experience.', 'I decided to go with color pallete number two because I had envisioned from the begining how I would use all the colors from the rainbow for each letter of the title/logo.'],
    brainstorming: brainstorm,
    font: fontKidApp,
    finalMocup: WeatherAppPic,
    fontDesc: ['I selected these fun and bubbly fonts to infuse my project with a sense of playfulness and charm. These font selections were made with careful consideration, ensuring that my design had youthful energy and a lighthearted atmosphere', 'After incorporating my chosen color pallete to font number four,I saw the text come alive, capturing the very essence of joy and creativity that I had envisioned for my project. With this alignment, I confidently finalized my font choice for this App.'],
    ProblemsToSolve: ['Integration with APIs: I was required to find and integrate suitable APIs to fetch real-time weather data reliably and accurately.', 'Data Processing and Presentation: I was required to process the fetched data and present data in a user-friendly and visually appealing manner', 'Voice Interaction: Implementing speech recognition required me to learn new skills and solve challenges related to integrating the technology', 'UI Design and Interaction:I was required to design a fun UI that was very intuitive and kid friendly and come up with some engaging features to enhance the experience', 'Geo Location Accuracy: I was required to learn a new skill and integrating it smoothly into the app addressing challenges as they arise.'],
    objective: ["Create CRUD recipe list React Application that allows me to log my favourite recipies. The details should, at a minimun, include the recipe title, a list of ingredients and the cooking/baking."],
    category: ["UI Design, ", "Web Development, ", "App Development"],
    Project: " React Recipe App",
    image: ReactRecipePic,
    video: videos['ReactRecipe.mp4'], // Dynamically import video
    features: ["p5.js", "Use of APIs to fetch real time weather information", "JSON data", "text to speech", "voice recognition", "graphics"],
    Software: ["openprocessing", "weekly reprt", "scheduling", "planning", "trello", "graphics"],
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

