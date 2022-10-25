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

  <div className="container top">
    <div className="container-fluid" id="section2">

      <div className="row justify-content-center">
      

        <div className="Experience-page-card-Left">
          <div className="Experience-card3">
            <button className="btn btn-glass page-card-x-btn-Exp-one" onClick={off}>X</button>
            <div className="Experience-Card-Chailed">
              <p className="div-center"> Frontend developer</p>
              <div className="ex-inner-left-one">

                <div className="col-6">
                  <div className="ex-icon">
                    <i className="material-icons">verified</i>HTML<br/>Advanced
                  </div>
                  <br/>
                  <div className="ex-icon">
                    <i className="material-icons">verified</i>CSS<br/>Advanced
                  </div>
                  <br/>
                  <div className="ex-icon">
                    <i className="material-icons">verified</i>JavaScript<br/>Excellent
                  </div>
                </div>

                <div className="col-6">
                  <div className="ex-icon">
                    <i className="material-icons">verified</i>Bootstrap<br/>Excellent
                  </div>
                  <br/>
                  <div className="ex-icon">
                    <i className="material-icons">verified</i>Sass<br/>Excellent
                  </div>
                  <br/>
                  <div className="ex-icon">
                    <i className="material-icons">verified</i>React<br/>Intermediate
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="Experience-page-card-Left">

          <div className="Experience-card3">
            <button className="btn btn-glass page-card-x-btn-Exp" onClick={off}>X</button>
            <div className="Experience-Card-Chailed">

              <p className="div-center"> Backend developer</p>
              <div className="ex-inner-left-one">

                <div className="col-6">
                  <div className="ex-icon">
                    <i className="material-icons">verified</i>PHP <br/>Intermediate
                  </div>
                  <br/>
                  <div className="ex-icon">
                    <i className="material-icons">verified</i>Mysqli <br/>Intermediate
                  </div>
                  <br/>
                  <div className="ex-icon">
                    <i className="material-icons">verified</i>python <br/>Excellent
                  </div>
                </div>

                <div className="col-6">

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