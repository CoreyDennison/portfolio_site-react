import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import Footer from './Components/tFooter/Footer';

class App extends Component {

  render(){
    return(
      <div id="components">
        <Header/>,
        <Projects/>,
        <Skills/>,
        <Footer/>
      </div>
    )
  }
}

export default App;
