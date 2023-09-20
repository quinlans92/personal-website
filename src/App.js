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
import ReactRecipePic from './images/ReactRecipePic.png';
import SingleProject from './Components/SingleProject';
import weatherAppDevices from './images/WeatherAppDevised.png';
import brainstorm from './images/brainstorm.png';
import weatherSkecth from './images/weatherAppSketch.jpg'
import weatherSkecthTwo from './images/weatherAppSkecthTwo.jpg';
import bwMockUp from './images/bwMockUp.png';
import colorPalWeather from './images/colorPallete.png';
import fontKidApp from './images/fonts.png';
import weatherAppPic2 from './images/WeatherAppPic2.png';
import aiSw from './images/aiSw.png';
import opSw from './images/opSw.png';
import owSw from './images/owSw.png';
import RecipeDevices from './images/RecipeDevices.png';
import appSketch from './images/appSketch.png';
import singleRecipeSketch from './images/singleRecipeSketch.png';
import editSketch from './images/editSketch.png';
import newRecipeSketch from './images/newRecipeSketch.png';
import appMockUp from './images/appMockUp.png';
import singleRecipeMockUp from './images/singleRecipeMocoup.png';
import editMockUp from './images/editMockUp.png';
import newRecipeMockUp from './images/newMockUp.png';
import aboutMockUp from './images/aboutMockUp.png';
import userFlowChart from './images/UserFlowChart.png';
import logo from './images/logo.png';
import logoSketch from './images/samLogoSketch.png';
import colorPalleteRecipe from './images/colorPalleteRecipe.png';
import fotorSw from './images/fotorSw.png';
import GithubSw from './images/GithubSw.png';
import FigmaSw from './images/FigmaSw.png';
import vsCode from './images/vsCode.png';
import individualLanding from './images/individualLanding.png';
import tlHomeSketch from './images/tlHomeSketch.png';
import landingMenuSketch from './images/landingMenuSketch.png';
import forHerSketch from './images/forHerSketch.png';
import cartSketch from './images/cartSketch.png';
import sketchCart from './images/sketchCart.png';
import motionMockUpCp from './images/motionMockUpCp.png';
import MotionMockUpDevice from './images/MotionMockUpDevice.png';
import MotionFonts from './images/MotionFonts.png';
import menuMm from './images/menuMm.png';
import menuBgMm from './images/menuBgMm.png';
import forHimMm from './images/forHimMm.png';
import forHerMm from './images/forHerMm.png';
import cartMm from './images/cartMm.png';
import cartSummaryMm from './images/cartSummaryMm.png';
import aeSw from './images/aeSw.png';
import psSw from './images/psSw.png';
import MotionMuBrainstorming from './images/MotionMuBrainstorming.jpg';
import creativeBrief1 from './images/creativeBrief1.jpg';
import creativeBrief2 from './images/creativeBrief2.jpg';
import creativeBrief3 from './images/creativeBrief3.jpg';
import projectMap from './images/projectMap.png';
import infoGraphic from './images/infoGraphic.jpg';
import infoTitle from './images/infoTitle.png';
import SouthParkBrainstorming from './images/SouthParkBrainstorming.jpg';
import roadMap from './images/roadMap.png';
import writersRoom from './images/writersRoom.png';
import animationTeam from './images/animationTeam.png';
import avoidingJudge from './images/avoidingJudge.png';
import soundBooth from './images/soundBooth.png';
import editing from './images/editing.png';
import dayToAir from './images/dayToAir.png';
import Complete from './images/Complete.png';
import Delivery from './images/Delivery.png';
import cartmanColorPalette from './images/cartmanColorPalette.png';




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
    dt: ["April 2022"],
    deviceImg: MotionMockUpDevice,
    sketch: [individualLanding, tlHomeSketch, landingMenuSketch, forHerSketch, cartSketch, sketchCart],
    bwMockUp: "",
    colorPallete: motionMockUpCp,
    colorPalleteDes: ['We chose a color palette of black, white and grey because our research findings recognized a high precentage of leading fashion websites adopted this same minimalistic designs approach. This sleek and clean aesthetic not only resonates with contemporary trends but also enhances the user experience by creating a visually appealing and uncluttered environment. These neutral tones allow the imagery and content to take center stage, ensuring a seamless and engaging browsing experience for users.'],
    brainstorming: MotionMuBrainstorming,
    creativeBrief: [creativeBrief1, creativeBrief2, creativeBrief3],
    projectMap: projectMap,
    font: MotionFonts,
    finalMocup: [ThreadLairPic, menuMm, menuBgMm, forHimMm, forHerMm, cartMm, cartSummaryMm],
    finalMockUpDesc: ["These were our final mockups, ready to be taken into AfterEffects to be animated into a motion mockup. My contributions to the overall process of this team effort began early in the process when I set up our project management system using Trello, streamlining our workflow. I contributed to every opportunity and was happy to go above and beyond for our team's success. I created the ForHer page digital mockup, collecting and resizing images while adapting dimensions for the website and I helped design the slide in add to cart pages. Furthermore, my motion graphic skills came into play as I animated different elements of the mockups. I contributed to the animating of the For Him page, hearts, add-to-cart slide-in images, the home page, and the cart.",
      "Throughout the design process, I gleaned invaluable insights.I discovered the importance of striking a balance between creativity and practicality, ensuring that our design choices adhered to fundamental principles.Effective teamwork, I realized, hinges on clear communication and frequent review stages, especially in the project's early phases. Collaborating with like-minded and creative teammates broadened my horizons, introducing me to new techniques and design methods that I have since incorporated into my personal projects.",
      "In hindsight, I acknowledge the need for greater advocacy for my ideas and a more proactive approach to time management. I recognize the value of allocating sufficient time for unforeseen challenges rather than overcommitting to familiar tasks."],
    fontDesc: ["We ultimately chose Font Number 3, Fahkwang, for its clean and modern look, which resonated with our design vision. Our decision was influenced by Font Number 2, where we particularly admired the capital letter effects. We decided to incorporate this distinct feature into Fahkwang to create a harmonious and unique font that aligned perfectly with our concept. From the outset of our design sketches, we established the emphasis on the letters 'T' and 'L', a choice that added a distinctive touch to our typography. The subtle alterations made to the Fahkwang font brought it to life in the exact way we had envisioned, enhancing the overall aesthetic of our project."],
    ProblemsToSolve: ["TEAM COORDINATION: Effectively coordinating communication and time management", 'TEAM DYNAMICS: Identify team members weaknesses and address them with stratagies, identify team members strenghts and utilize them.', "VISUAL PLANNING: Develop a clear and engaging concept for the motion mockup that effectively communicates the website's purpose, user experience, and branding", "MOTION GRAPHICS: Working in Adobe After Effects and ensuring smooth transitions and interactions that will imitate the user experience of a clothing website", "DESIGN CONSISTENCY: Working on a team and ensuring all team members have consistent design with each other", "FEEDBACK AND ITERATIONS: Team members being open to feedback and prepared to iterate their work accordingly"],
    objective: ["Working as a member of a team I was required to research, previsualise and produce a motion graphics mockup of a clothing website, based on a client’s brief. The mockup must include the core functionality of the application and show navigation and interactivity of its different sections and menus and any popup windows."],
    category: ["UI Design, ", "Motion Graphics"],
    Project: "Motion Mock Up",
    image: ThreadLairPic,
    video: videos['ThreadLair.mp4'],
    features: ["Digital Mockup Creation", "graphics", "Motion Graphics", "Teamwork", "Project Management"],
    Software: [aeSw, psSw],
    isCodeProject: false, // Not a code project
    hasCreativeBrief: true,
    hasProjectMap: true,
    projectType: 'Brainstorming',
    titleDesign: 'Fonts',

  },
  {
    id: 2,
    dt: ["April 2022"],
    deviceImg: weatherAppDevices,
    sketch: [weatherSkecth, weatherSkecthTwo, bwMockUp],
    bwMockUp: "",
    colorPallete: colorPalWeather,
    colorPalleteDes: ['The rainbow color pallete theme was inspired by my research of successful kids apps that utilize vibrant colors, I have chosen a joyful range of rainbow hues to create an engaging and imaginative environment. By embracing the trend of colorful visuals in childrens apps, my palette aims to capture young users attention, facilitate easy navigation, and ensure a delightful and immersive user experience.', 'I decided to go with color pallete number two because I had envisioned from the begining how I would use all the colors from the rainbow for each letter of the title/logo.'],
    brainstorming: brainstorm,
    font: fontKidApp,
    finalMocup: [weatherAppPic2],
    finalMockUpDesc: ['This was my final mockup with color, character design and features complete, this served as the final blueprint for bringing my App to life. I made this mockup in illustrator so that I could later export the character, clothes and title to OpenProcessing.', 'With the design phase now concluded, I was ready to translate my creative vision into a fully interactive app, aligning seamlessly with the projects designated objectives. Using p5.js framework, I embraced the exciting challenge of transforming my static designs into a dynamic, user-friendly experience. This phase demanded rapid upskilling as I ventured into uncharted territory, integrating advanced features such as geolocation services, voice recognition, and weather APIs. I welcome you to watch the demo of the App fully finished and invite you to view my code and explore the App through the below video and link.'],
    fontDesc: ['I selected these fun and bubbly fonts to infuse my project with a sense of playfulness and charm. These font selections were made with careful consideration, ensuring that my design had youthful energy and a lighthearted atmosphere.', 'After incorporating my chosen color pallete to font number four,I saw the text come alive, capturing the very essence of joy and creativity that I had envisioned for my project. With this alignment, I confidently finalized my font choice for this App.'],
    ProblemsToSolve: ['INTEGRATION WITH APIs: I was required to find and integrate suitable APIs to fetch real-time weather data reliably and accurately.', 'DATA PROCESSING AND DISPLAY: I was required to process the fetched data and display the data in a user-friendly and visually appealing manner', 'VOICE INTERACTION: Implementing speech recognition required me to learn new skills and solve challenges related to integrating the technology', 'UI DESIGN AND INTERACTION:I was required to design a fun UI that was very intuitive and kid friendly and come up with some engaging features to enhance the experience', 'GEO LOCATION ACCURACY: I was required to learn a new skill and integrating it smoothly into the app addressing challenges as they arise.'],
    objective: ["Design and develop an interactive experience that demonstrates programming, visualization combined with supporting hardware that facilitates user interaction or input and it must be based around Motion Tracking & Movement, Generative & Interactive Art or Real-Time Data Visualisation"],
    category: ["UI Design, ", "Graphic Design, ", "App Development"],
    Project: "   Kids Weather App",
    image: WeatherAppPic,
    video: videos['AppDemo.mp4'], // Dynamically import video
    features: ["p5.js", "Real Time Weather Information", "JSON data", "Text to Speech", "Voice Recognition", "Geo-Location accuracy"],
    Software: [aiSw, opSw, owSw],
    gitHubLink: "https://github.com/quinlans92/kidsWeatherApp_bySamantha",
    hasCreativeBrief: false,
    hasProjectMap: false,
    isCodeProject: true, // Not a code project
    projectType: 'Brainstorming',
    titleDesign: 'Fonts',


  },
  {
    id: 3,
    dt: ["May 2023"],
    deviceImg: RecipeDevices,
    sketch: [appSketch, singleRecipeSketch, editSketch, newRecipeSketch],
    bwMockUp: "",
    colorPallete: colorPalleteRecipe,
    colorPalleteDes: ['I chose color palette number one for my React recipe app for a few strategic reasons. The dark gray (#3c4040) provides a neutral and elegant background, allowing the vibrant recipe images and content to stand out. From my research I found that multiple food and recipe apps use green in their color pallete and I followed suit. As well as being backed as a popular choice by research, the green (#257C2B) I went with was also intended to represent the idea of freshness and natural ingredients in the culinary world. Meanwhile, the soft pink (#F56BB2) adds a playful touch and a touch personality to the design. The combination of this color pallete ensures readability and a modern, polished look, creating a visually pleasing and user-friendly experience. This color palette not only enhances the aesthetics of my app but also showcases my attention to detail.'],
    userFlowChart: userFlowChart,
    Logo: [logoSketch, logo],
    finalMocup: [appMockUp, singleRecipeMockUp, editMockUp, newRecipeMockUp, aboutMockUp],
    finalMockUpDesc: ['This marks the end of my design journey – the final mock-up created in Figma. I couldnt be happier with how it all came together. The harmony between my logo and chosen color scheme has lead to a distinctive and visually appealing identity to the app. The careful arrangement of features, as outlined in my user flow diagram, seamlessly translates to this mock-up. With this final mockup ready, I excitedly dived into my first ever React coding project within Visual Studio Code, consistently pushing updates to my GitHub repo as I worked on my project seeing it through to completion.'],
    fontDesc: ['To kick off my logo creation journey, I started with a sharpie. It helped me quickly sketch out the basic logo idea, just to get a feel for how it might look. Once I had a clear picture in my mind, I took to illustrator to create a digital version. In Illustrator, I fine-tuned all the lines and shapes, making it look proffesional. To keep things consistent with my initial sketch, I found a font that had a similar appearance. Then came the fun part – manipulating that font to match the original concept. Finally, I added in those eye-popping colors from my chosen palette.'],
    ProblemsToSolve: ['DATA MANAGEMENT: Managing and presenting data effectively, ensuring that recipes are well-structured and user-friendly.', 'DATA OPERATIONS: Creating, updating, editing, and deleting recipes with a focus on providing a seamless user experience', 'DATA DETAILS: Designing a clear and user-friendly layout for recipe information, including ingredients and steps.', 'UI DESIGN AND INTERACTION: Creating an engaging and intuitive interface that makes the app enjoyable to use.', 'CROSS PLATFORM COMPATIBILITY: Ensuring the app functions well on different devices and platforms.'],
    objective: [' Create a Recipe App where it is possible to Create, Read, Update, Delete and Edit a recipe. The recipe list should allow for logging of favourite recipies. The details should, at a minimun,include the recipe title, a list of ingredients and the method steps '],
    category: ["UI Design, ", "Web Development, ", "App Development"],
    Project: " React Recipe App",
    image: ReactRecipePic,
    video: videos['ReactRecipe.mp4'], // Dynamically import video
    features: ["React", "Bootstrap", "Fontawesome", "AI images"],
    Software: [fotorSw, GithubSw, FigmaSw, vsCode],
    gitHubLink: "https://github.com/quinlans92/samantha_k00263421_crude_recipe_app",
    hasCreativeBrief: false,
    hasProjectMap: false,
    isCodeProject: true, // Not a code project
    projectType: 'User Flow Diagram',
    titleDesign: 'Logo',

  },
  {
    id: 4,
    dt: ["Feb 2022"],
    deviceImg: infoTitle,
    sketch: [roadMap, writersRoom, animationTeam, avoidingJudge, soundBooth, editing, dayToAir, Complete, Delivery],
    bwMockUp: "",
    colorPallete: cartmanColorPalette,
    brainstorming: SouthParkBrainstorming,
    colorPalleteDes: ["I intentionally opted for the Cartman color scheme as the primary palette for my infographic on making an episode of a South Park, with the primary objective of enriching the user experience. These vivid shades, drawing inspiration from the iconic character, not only serve as visually captivating elements but also seamlessly resonate with the show's audacious and unconventional theme. By incorporating Cartman's colors, my intention was to instantly immerse the audience in the South Park universe, making the content more relatable and enjoyable to interact with. In the realm of UX design, it is important to construct pleasant and memorable user journey, and this color selection ensures that the audience remains captivated throughout, infusing an added layer of authenticity into the infographic's South Park narrative."],
    font: fontKidApp,
    finalMocup: [infoGraphic],
    finalMockUpDesc: ['This marks the end of my design journey – the final mock-up created in Figma. I couldnt be happier with how it all came together. The harmony between my logo and chosen color scheme has lead to a distinctive and visually appealing identity to the app. The careful arrangement of features, as outlined in my user flow diagram, seamlessly translates to this mock-up. With this final mockup ready, I excitedly dived into my first ever React coding project within Visual Studio Code, consistently pushing updates to my GitHub repo as I worked on my project seeing it through to completion.'],
    fontDesc: ['To kick off my logo creation journey, I started with a sharpie. It helped me quickly sketch out the basic logo idea, just to get a feel for how it might look. Once I had a clear picture in my mind, I took to illustrator to create a digital version. In Illustrator, I fine-tuned all the lines and shapes, making it look proffesional. To keep things consistent with my initial sketch, I found a font that had a similar appearance. Then came the fun part – manipulating that font to match the original concept. Finally, I added in those eye-popping colors from my chosen palette.'],
    ProblemsToSolve: ['DATA COMPLEXITY: Effectively condensing complex data into a clear and concise infographic while maintaining accuracy and relevance.', 'DESIGN CLUTTER: Balancing visual appeal with clarity to avoid overwhelming the viewer with excessive information or graphics.', "DATA ACCUARACY: Maintaining data accuracy and reliability throughout the design process to uphold the infographic's credibility.", 'DATA VISUALISATION: Expertly utilizing charts, graphs, and visual elements to effectively represent complex data.'],
    objective: ["Create an engaging and informative infographic that effectively communicates complex data. The infographic should employ clear visual storytelling, incorporating compelling graphics, icons, and typography to make the information visually appealing and easily understandable. The primary goal is to convey key insights and promote better understanding of your topic (to be approved by your lecturer) in a visually compelling and accessible manner."],
    category: ["Infographic, ", "Graphic Design, "],
    Project: "Infographic - Making an episode of South Park",
    image: infoGraphic,
    video: videos['ReactRecipe.mp4'], // Dynamically import video
    features: ["React", "Bootstrap", "Fontawesome", "AI images"],
    Software: [fotorSw, GithubSw, FigmaSw, vsCode],
    gitHubLink: "https://github.com/quinlans92/samantha_k00263421_crude_recipe_app",
    hasCreativeBrief: false,
    hasProjectMap: false,
    isCodeProject: true, // Not a code project
    projectType: 'Brainstorming',
    titleDesign: 'Fonts',

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

