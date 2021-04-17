import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js"
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import AboutMe from './Components/AboutMe';
// import Blogs from './Components/Blogs';
import Experiences from './Components/Experiences';
import Projects from './Components/Projects';
import Technology from './Components/Technology';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Particles
        className="particle-canvas"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area:900
              }
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color:"#f9ab00"
              }
            }
          }
        }}
      />
      <Navbar />
      <Header />
      <AboutMe />
      <Technology/>
      <Experiences />
      <Projects />
      <Contact />
      <Footer/>
    </>
  );
}

export default App;
