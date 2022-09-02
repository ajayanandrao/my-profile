import React from 'react'
import './PropsTwo.scss';
import snow from '../../img/img_snow1.jpg';

const PropsTwo = () => {

const my ={
  width:'200px',
}

const imgContainer = {
  position: "fixed",
  display: "none",
  width:"100%",
  height:"100%",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",
  backgroundColor: "rgba(0,0,0,0.8)",
  zIndex:"2",
  cursor: "context-menu",
};
const inner = {
  position: "relative",
  top: "50%",
  left: "50%",
  color: "white",
  transform: "translate(-50%,-50%)",
  backgroundColor: "none",
  };

  function On() {
    document.getElementById("div-on-off").style.display = "block";
    document.getElementById("img-sm").style.display = "none";

  }

  function off() {
    document.getElementById("div-on-off").style.display = "none";
    document.getElementById("img-sm").style.display = "block";
  }

  const imageClick = () => {
   document.getElementById("img").style={my};
  }

  return (
   <>
        <div className="img-container" id='div-on-off' onClick={off} style={imgContainer}> <div style={inner}>
       
       <div className="img-inner">
       <img id="img" src={require('../../img/aj.jpg')} onClick={() => imageClick()} />
       </div>

     </div></div>
          {/* <img id="img-sm" style={{width:"100px"}} src={require('../../img/img_snow1.jpg')} onClick={() => On()} /> */}
   </>
  )
}

export default PropsTwo