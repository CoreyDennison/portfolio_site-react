import React, { Component} from 'react';
import SimpleReactLightbox from 'simple-react-lightbox';
import JOCImages  from './JOCGallery';
import SBAImages from './SBAGallery';
import MSAImages from './MSAGallery';
import OTBImages from './OTBGallery';
import OTB2Images from './OTB2Gallery';
import MMImages from './MMGallery';
import Fade from 'react-reveal/Fade';
import './style.css';
import ReactGA from 'react-ga';

class Projects extends Component {

  constructor(){
    super()
    this.state = {
      title: 'Projects',
      setVisible: true,
      showGallery: false,
      backArrow: false,
      projectTitle: '',
      projectDescrip: '',
      projectDescrip2: '',
      jocVisible: false,
      sbaVisible: false,
      msaVisible: false,
      otbVisible: false,
      mmVisible: false
    }
  }

  openProject1() {
    this.setState({
      title: '',
      projectTitle: 'Joy Of Chá website',
      setVisible: false,
      showGallery: true,
      backArrow: true,
      jocVisible: true
    }) 
  }

  openedJOC() {
    ReactGA.event({
      category: "JOC",
      action: "Opened Joy Of Chá Project"
    })
  }

  openProject2() {
    this.setState({
      title: '',
      projectTitle: 'Spotify artist battle',
      setVisible: false,
      backArrow: true,
      sbaVisible: true
    }) 
  }

  openedSBA() {
    ReactGA.event({
      category: "SBA",
      action: "Opened Spotify Battle App project"
    })
  }

  openProject3() {

    this.setState({
      title: '',
      projectTitle: 'Movie API',
      setVisible: false,
      backArrow: true,
      msaVisible: true
    }) 
  }

  openedMSA() {
    ReactGA.event({
      category: "MSA",
      action: "Opened Movie Search React API App project"
    })
  }

  openProject4() {
    this.setState({
      title: '',
      projectTitle: 'Over The Bump mobile app',
      setVisible: false,
      backArrow: true,
      otbVisible: true,
      otb2Visible: true
    }) 
  }

  openedOTB() {
    ReactGA.event({
      category: "OTB",
      action: "Opened Over The Bump project"
    })
  }

  openProject5() {
    this.setState({
      title: '',
      projectTitle: 'Mac Motors',
      setVisible: false,
      backArrow: true,
      mmVisible: true
    }) 
  }

  openedMM() {
    ReactGA.event({
      category: "MM",
      action: "Opened Mac Motors Database project"
    })
  }

  openProjects(){
    document.title='Corey Dennison';
    this.setState({
      title: 'Projects',
      projectTitle: '',
      setVisible: true,
      showGallery: false,
      backArrow: false,
      jocVisible: false,
      sbaVisible: false,
      msaVisible: false,
      otbVisible: false,
      otb2Visible: false,
      mmVisible: false
    })
  }

  render(){

    return (
      <Fade>
      <div id="projectStyles">
        <h3 style={{display: this.state.backArrow ? null : 'none'}} onClick={() => this.openProjects()}>&larr; <span>Projects</span></h3>
        <h2>{this.state.title}</h2>
        <h2>{ this.state.projectTitle }</h2>
        <div className = 'projects' style={{display: this.state.setVisible ? null : 'none'}}>

          <div className="joc_con" onClick={() => this.openProject1() + this.openedJOC()}> 
            <img src="./images/joc.jpg" width="100%" height="100%" alt="Joy Of Chá project"/>         
            <p>The Joy Of Chá</p> 
          </div>

          <div className="spotify_con" onClick={() => this.openProject2() + this.openedSBA()}>
          <img src="./images/artist.jpg" width="100%" height="100%" alt="Spotify Artist Battle project"/> 
            <p>Spotify Artist Battle</p>
          </div>

          <div className="movie_con" onClick={() => this.openProject3() + this.openedMSA()}>
          <img src="./images/display.jpg" width="100%" height="100%" alt="Movie API React App project"/> 
            <p>Movie Search React App</p>
          </div>

          <div className="otb_con" onClick={() => this.openProject4() + this.openedOTB()}>
          <img src="./images/otb.jpg" width="100%" height="100%" alt="Over The Bump mobile app project"/> 
            <p>Over The Bump Mobile App</p>
          </div>

          <div className="mm_con" onClick={() => this.openProject5() + this.openedMM()}>
          <img src="./images/mm.jpg" width="100%" height="100%" alt="Mac Moters Database project"/> 
            <p>Mac Motors Database</p>
          </div>

        </div>

        <div id="projectPage">

          <SimpleReactLightbox>
            { this.state.jocVisible ? <JOCImages/> : null }
            { this.state.sbaVisible ? <SBAImages /> : null }
            { this.state.msaVisible ? <MSAImages /> : null }
            { this.state.otbVisible ? <OTBImages /> : null }
            { this.state.otb2Visible ? <OTB2Images /> : null }
            { this.state.mmVisible ? <MMImages /> : null }
          </SimpleReactLightbox>

        </div>

      </div>
      </Fade>
    )
  }
}

export default Projects;
