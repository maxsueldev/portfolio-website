// Components
import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/Projects/index.tsx";
import Skills from "./components/Skills";
import Experiences from "./components/Experiences";
import Message from "./components/Message";
import Footer from "./components/Footer";

import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  });

  return (
    <div className="App">
      <div className="main">
        <Intro />
        <About />
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
