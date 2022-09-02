import React from 'react'
import Navbar from './Navbar'
import './Home.scss';
import Two from './Two';
import Three from './Three';
import Four from './Four';
import Footer from './Footer';

const Home = () => {


  window.onscroll = function () { myFunction() };
  function myFunction() {
    if (document.documentElement.scrollTop > 350) {
      document.getElementById("myImg").className = "slideUp";
    }
  }

  return (
    <>

      <div className="page-one" id="one">
        <Navbar />

        <div className="out animattion-div">
          <div className="h">
            <div className="text">
              Hello, I'm
              <h2> AJAY ANANDRAO</h2>
              Frontend developer
            </div>

            
            
            <div className="circle-div-center">
              <div className="Circle-one">
              <div className=" Circle-outer-one">
                <div className="Circle-outer-margin">
                  <div className="Circle-outer-card-one">
                    <div className="Circle-outer-card-two">
                      <div className="Circle-outer-card-two-img"></div>
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
      <Two />
      <Three />
      <Four />
      <Footer />
    </>
  )
}

export default Home