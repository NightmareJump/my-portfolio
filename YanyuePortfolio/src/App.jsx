import { useState } from 'react'
import './App.css'
import { NavBar } from './components/navBar.jsx'
import { Banner} from './components/Banner.jsx'
import MyTimeline from './components/MyTimeline.jsx';
import ProjectCard from './components/ProjectCard.jsx';
import Skills from './components/Skills.jsx';
import ContactMe from './components/ContactMe.jsx'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Element } from 'react-scroll';

function App() {
  return (
    <div className="App">
      <NavBar />

      <Element name="home">
        <Banner />
      </Element>

      <Element name="skills">
        <Skills />
      </Element>

      <Element name="experience">
        <MyTimeline />
      </Element>

      <Element name="projects">
        <ProjectCard />
      </Element>

      <Element name="contact">
        <ContactMe />
      </Element>
    </div>
  );
}

export default App;
