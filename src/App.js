import LandingPage from "./Components/LandingPage";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from "./Components/NavBar";
import SideBar from "./Components/SideBar";



function App() {
  return (
    <div className="App">

      <div>
        <NavBar />
      </div>
      <div>
        <LandingPage />
      </div>
      <div>
        <SideBar />
      </div>

    </div>
  );
}

export default App;
