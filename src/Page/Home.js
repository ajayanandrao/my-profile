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
                <motion.div 
                transition={{duration:2}}
                initial={{opacity:0}}
                animate={{opacity:1}}>Hello!</motion.div>
              </span>
              <div className='animattion-div'>
               <motion.div 
               transition={{delay:2, duration:1.5}}
               initial={{x:-200, opacity:0}}
               animate={{x:0, opacity:1}}>I am</motion.div>

                <div className="text-amination">
                <motion.h2 className='myname'
                transition={{duration:1.9, delay:2.5}}
                initial={{x:-200, opacity:0}}
                animate={{x:0, opacity:1}}> AJAY ANANDRAO</motion.h2>
                </div>
                <motion.div 
                transition={{delay:4, duration:1.5}}
                initial={{opacity:0}}
                animate={{opacity:1}}>Frontend developer </motion.div>
                
                </div>

            </div>


            <motion.div 
            transition={{duration:1.5, delay:2.5}}
            initial={{x:-200, opacity:0}}
            animate={{x:0, opacity:1}} className="circle-div-center animattion-div">
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
            </motion.div>
            


            <motion.div
            transition={{delay:4, duration:1.5}}
            initial={{opacity:0}}
            animate={{opacity:1}} className="mouse-container">
              <a href="#Section-2">
                <div className='mouse' id='c'>
                  <div className="dot" id='dot'></div>
                </div></a>
            </motion.div>
            


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