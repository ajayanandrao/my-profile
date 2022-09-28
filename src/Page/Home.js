import React from 'react'
import Navbar from './Navbar'
import './Home.scss';
import Two from './Two';
import Three from './Three';
import Four from './Four';
import Footer from './Footer';
import { motion } from 'framer-motion';

const Home = () => {


  

  return (
    <>

      <div className="page-one" id="one">
        <div className="black">
        <Navbar />

        <div className="out ">
          <div className="h">
            <div className="text ">
              <span className="hello-text">
                Hello!
              </span>
              <div className='animattion-div'>
                I'm
                <div className="text-amination">
                <h2> AJAY ANANDRAO</h2>
                </div>
                Frontend developer
                
                </div>

            </div>


            <div className="circle-div-center animattion-div">
              <div className="Circle-one">
                <div className=" Circle-outer-one">
                  <div className="Circle-outer-margin">
                    <div className="Circle-outer-card-one">
                      <div className="Circle-outer-card-two">
                        <div className="Circle-outer-card-two-img">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            


            <div className="mouse-container">
              <a href="#Section-2">
                <div className='mouse' id='c'>
                  <div className="dot" id='dot'></div>
                </div></a>
            </div>
            


          </div>
        </div>
        </div>
      </div>
      <Two />
      <Three />
      <Four />
      <Footer />
    </>
  )
}

export default Home