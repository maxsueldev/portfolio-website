// Components
import Header from "./components/Header";
import Intro from "./components/Intro";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experiences from "./components/Experiences";
import Message from "./components/Message";
import Footer from "./components/Footer";

import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 120, // offset (in px) from the original trigger point
      delay: 200, // values from 0 to 3000, with step 50ms
      duration: 800, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  }, []);

  return (
    <div className="App">
      <div className="main">
        <Header />
        <Intro />
        <About />
        <Technologies />
        <Projects />
        <Skills />
        <Experiences />
        <Message />
        <Footer />
      </div>
    </div>
  );
}

export default App;
