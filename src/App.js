import React, { useEffect } from 'react';
import Header from './Components/Header/Header';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import Footer from './Components/tFooter/Footer';
import ReactGA from 'react-ga';

{/* FUTURE ME: FIGURE OUT HOW TO USE GOOGLE ANALYTICS WITH REACT */}

function App() {

  useEffect(() => {
    ReactGA.initialize('UA-170318875-2')
    ReactGA.pageview("/home")
  }, [])

    return(
      <div id="components">
        <Header/>
        <Projects/>
        <Skills/>
        <Footer/>
      </div>
    )
  }


export default App;
