import React from 'react'
import { Link } from 'react-router-dom';
import OverlayOne from './About inner card/OverlayOne';
import './About.scss';
import Footer from './Footer';
import Navbar from './Navbar';
import cv from './cv.pdf';
import OverlayTwo from './About inner card/OverlayTwo';
import OverlayThree from './About inner card/OverlayThree';
import PropsTwo from './About inner card/PropsTwo';
import { motion } from 'framer-motion';

const About = () => {

  function On() {
    document.getElementById("overlay").style.display = "block";
  }
  function off() {
    document.getElementById("overlay").style.display = "none";
  }

  function OnSec() {
    document.getElementById("overlaySec").style.display = "block";
  }

  function OnThurd() {
    document.getElementById("overlayThree").style.display = "block";
  }
  function offThurd() {
    document.getElementById("overlayThree").style.display = "none";
  }
  // ---------------------------------------------------------------------------
  const my ={
    width:'400px',
  }

  function imgOn() {
    document.getElementById("div-on-off").style.display = "block";
    document.getElementById("img-sm").display = "none";
  }
  
  return (
    <>

      <div className="About-bg" id="one">
        <Navbar />
        <OverlayOne />
        <OverlayTwo />
        <OverlayThree />
        <PropsTwo/>
        <span className='about-title'><h3>About me</h3></span>

        <div className="container">
          <motion.div
          transition={{duration:1.7}}
          initial={{opacity:0,}}
          animate={{opacity:1,}}
          className="container-fluid" id="section2">
            <div className="row justify-content-center" >

              <div className="About-page-card-Left" onClick={() => imgOn()}>
                <div className="about-card3">

                </div>
              </div>

              <motion.div 
              transition={{duration:1.7}}
              initial={{opacity:0,}}
              animate={{opacity:1,}} className="About-card-home2">

                <span className="flex" >


                  <div className="About-inner-card1-Pro " onClick={On}>
                    <span className="about-inner-img"><i className="material-icons"> card_membership</i></span>
                    <span className="about-inner-text">
                      Experience
                    </span>
                  </div>


                  <div className="About-inner-card1-Pro " onClick={OnSec}>
                    <span className="about-inner-img"><i className="material-icons">shopping_bag</i></span>
                    <span className="about-inner-text">
                      Product </span>
                  </div>
                  <div className="About-inner-card1-Pro " onClick={OnThurd}>
                    <span className="about-inner-img"><i className="material-icons">shopping_bag</i></span>
                    <span className="about-inner-text">
                      Visual Designed </span>
                  </div>



                  <div id="includedContent"></div>
                </span>
                Frontend developer, I create web pages with UI / UX user interface, ihave years of experience and many clients are happy with the projects carried out. <p> </p>
                <a href={cv} download="cv.pdf">
                  <button className="btn btn-glass">Download CV</button>
                </a>
                <Link to="/contact/"> <button className="btn btn-glass m-2" >Contact me</button></Link>

              </motion.div>
            </div>
          </motion.div>
        </div>
        <br />
      </div>

      <Footer />
    </>
  )
}

export default About