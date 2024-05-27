// Components
import Header from './components/Header/index';
import LateralNavbar from './components/LateralNavbar/index';
import Intro from './components/Intro/index';
import About from './components/About/index';
import Projects from './components/Projects/index';
import Skills from './components/Skills/index';
import Experiences from './components/Experiences/index';
import Message from './components/Message/index';
import Footer from './components/Footer/index';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <LateralNavbar />
      {/* <div className='introAboutContainer'> */}
        <Intro />
        <About />
      {/* </div> */}
      <Projects />
      <Skills  />
      <Experiences />
      <Message />
      <Footer />
    </>
  )
}

export default App;
