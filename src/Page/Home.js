import React from 'react'
import Navbar from './Navbar'
import './Home.scss';
import Two from './Two';
import Three from './Three';
import Four from './Four';
import Footer from './Footer';

const Home = () => {
  return (
    <>
    
    <div className="page-one" id="one">
      <Navbar />
  
        <div className="out d">
          <div className="h">
            <div className="text">
              hello, I'm
              <h2> AJAY ANANDRAO</h2>
              Frontend developer

            </div>

            <div className="text"><div className="Circle-one">
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

            <div className="text">
              <div className="container div-center">
                <a href="#Section-2">
                  <div className="down-arro">
                    {/* <img src="./icon/icon/svg/downWhite.svg" width="30px" id="f" alt=""> */}
                  </div>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
<Two/>
<Three/>
<Four/>
<Footer/>
    </>
  )
}

export default Home