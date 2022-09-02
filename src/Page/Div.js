import React from 'react'
import './Div.scss';
import img from '../img/aj.jpg';

const Div = () => {
  // ================================================================== Scrolled Page ===================
 
  const overlay = {
    position: "fixed",
    display: "none",
    width:"100%",
    height:"100%",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    backgroundColorColor: "rgba(0,0,0,0.5)",
    zIndex:"2",
    cursor: "context-menu",
  };
  const text = {
    position: "absolute",
  top: "50%",
  left: "50%",
  color: "white",
  transform: "translate(-50%,-50%)",
  };
 
  function On() {
    document.getElementById("overlay").style.display = "block";
  }
  function off() {
    document.getElementById("overlay").style.display = "none";
  }
  // ================================================================= End ==============================

  return (
    <>
    <button className='btn btn-primary' onClick={On}>ok</button>
    This is background
   
<div id="overlay">
<div id="text">

  <div class="container top">
    <div class="container-fluid" id="section2">

      <div class="row justify-content-center">
      

        <div class="Experience-page-card-Left">
          <div class="Experience-card3">
            <button class="btn btn-glass page-card-x-btn-Exp-one" onClick={off}>X</button>
            <div class="Experience-Card-Chailed">
              <p class="div-center"> Frontend developer</p>
              <div class="ex-inner-left-one">

                <div class="col-6">
                  <div class="ex-icon">
                    <i class="material-icons">verified</i>HTML<br/>Advanced
                  </div>
                  <br/>
                  <div class="ex-icon">
                    <i class="material-icons">verified</i>CSS<br/>Advanced
                  </div>
                  <br/>
                  <div class="ex-icon">
                    <i class="material-icons">verified</i>JavaScript<br/>Excellent
                  </div>
                </div>

                <div class="col-6">
                  <div class="ex-icon">
                    <i class="material-icons">verified</i>Bootstrap<br/>Excellent
                  </div>
                  <br/>
                  <div class="ex-icon">
                    <i class="material-icons">verified</i>Sass<br/>Excellent
                  </div>
                  <br/>
                  <div class="ex-icon">
                    <i class="material-icons">verified</i>React<br/>Intermediate
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="Experience-page-card-Left">

          <div class="Experience-card3">
            <button class="btn btn-glass page-card-x-btn-Exp" onClick={off}>X</button>
            <div class="Experience-Card-Chailed">

              <p class="div-center"> Backend developer</p>
              <div class="ex-inner-left-one">

                <div class="col-6">
                  <div class="ex-icon">
                    <i class="material-icons">verified</i>PHP <br/>Intermediate
                  </div>
                  <br/>
                  <div class="ex-icon">
                    <i class="material-icons">verified</i>Mysqli <br/>Intermediate
                  </div>
                  <br/>
                  <div class="ex-icon">
                    <i class="material-icons">verified</i>python <br/>Excellent
                  </div>
                </div>

                <div class="col-6">

                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</div></div>

    </>
  )
}

export default Div