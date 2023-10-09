import React from 'react'
import Services from './components/Services'
import Carousel from './components/Carousel'
import Portfolio from './components/Portfolio'
import CrewAtWork from './components/CrewAtWork'
import JoinUs from './components/JoinUs'
import Landing from './components/Landing'
import { Element } from 'react-scroll'
import About from './components/About'
import VideoSlide from './components/VideoSlide'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <Element name="home"><Landing/></Element>
      <Element name="about-us"><About/></Element>
      {/* <VideoSlider/> */}
      <VideoSlide/>
      <Carousel/>
      <Element name="portfolio"><Portfolio/></Element>
      <Services/>
      <CrewAtWork/>
      <Element name="careers"><JoinUs/></Element>
      <Element name="contact-us"><ContactUs/></Element>
      
      <Footer/>
      


    </div>
  )
}

export default App