// Components
import Header from './components/Header';
import LateralNavbar from './components/LateralNavbar';
import Intro from './components/Intro';
import About from './components/About';
import Projects from './components/Projects/index.tsx';
import Skills from './components/Skills';
import Experiences from './components/Experiences';
import Message from './components/Message';
import Footer from './components/Footer';

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
