// Components
// import Header from "./components/Header";
import LateralNavbar from "./components/LateralNavbar";
import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/Projects/index.tsx";
import Skills from "./components/Skills";
import Experiences from "./components/Experiences";
import Message from "./components/Message";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <div className="lateralMenu">{/* <LateralNavbar /> */}</div>
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
