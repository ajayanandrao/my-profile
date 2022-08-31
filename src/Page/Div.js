import React from 'react'
import './Div.scss';
import img from '../img/aj.jpg';

const Div = () => {
// ================================================================== Scrolled Page ===================
  window.onscroll = function() {myFunction()};
  function myFunction() {
    if (document.documentElement.scrollTop > 350) {
      document.getElementById("myImg").className = "slideUp";
    }
  }
// ================================================================= End ==============================

  return (


    <>
      {/* <div className='div'>Div</div> */}

      <div class="out animattion-div">
        <div class="h">
          <div class="text">
            hello, I'm
            <h2> AJAY ANANDRAO</h2>
            Frontend developer
          </div>
        </div>
      </div>
      {/*==========================================*/}

      <h1>The onscroll Event</h1>

<p>Scroll down this page.</p>
<p>When you have scrolled 350px from the top, an image will slide in.</p>

<hr/>
<div class="col-1">
  <img id="myImg" src={img} style={{width: '350px',}}/>
</div> 

<div class="col-2">
  Just some text..
</div>

    </>
  )
}

export default Div