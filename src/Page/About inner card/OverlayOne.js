import React from 'react'
import './OverlayOne.scss';
import { motion } from 'framer-motion';

const Over = () => {
  
    const overlay = {
        position: "fixed",
        display: "none",
        width:"100%",
        height:"100%",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        backgroundColor: "rgba(0,0,0,0.4)",
        zIndex:"2",
        cursor: "context-menu",
      };
      const text = {
      position: "relative",
      top: "50%",
      left: "50%",
      color: "white",
      transform: "translate(-50%,-50%)",
      backgroundColor: "none",
      };
     

    function On() {
        document.getElementById("overlay").style.display = "block";
      }
      function off() {
        document.getElementById("overlay").style.display = "none";
      }
  
    return (
    <>
    {/* <button className='btn btn-primary' onClick={On}>On</button> */}
    <div id="overlay" style={overlay}>
<div id="text" style={text}>


<div className='overlay-center-container'>

    <div className='card-right-container'>
        <div className='x btn-glass' onClick={off}>X</div>
        
        <div className="card-text-flex">
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
    <div className='card-right-container'>
    <div className='x-2 btn-glass' onClick={off}>X</div>
    <div className="card-text-flex">
    
    
    <div className="col-6">
                  <div className="ex-icon">
                    <i className="material-icons bg-1">verified</i>PHP <br/>Intermediate
                  </div>
                  <br/>
                  <div className="ex-icon">
                    <i className="material-icons bg-1">verified</i>Mysqli <br/>Intermediate
                  </div>
                  <br/>
                  <div className="ex-icon">
                    <i className="material-icons bg-1">verified</i>python <br/>Excellent
                  </div>
                </div>
                <div className="start">
                <div className="ex-icon">
                    <i className="material-icons bg-1">verified</i>Firebase <br/>Intermediate
                  </div>
                </div>
    </div>
    </div>
</div>

</div>
</div>
    
    </>
  )
}

export default Over