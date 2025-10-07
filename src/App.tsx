// Components
import Intro from "./components/Intro";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experiences from "./components/Experiences";
import Message from "./components/Message";
import Footer from "./components/Footer";

import useAOS from "./hooks/useAOS";

function App() {
  useAOS();

  return (
    <div className="App">
      <div className="main">
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
