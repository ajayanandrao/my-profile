import React from 'react'
import './Two.scss';
import mobile from '../img/Component 1.png';

const Two = () => {
  return (
   <>
   <div className="Section-2-img" id="Section-2">

<div className="div" id="myImg">
  <div className="Section-try-img">

    {/* <a href="#section1" > */}
    <div className="container-fluid" id="section2">
      <div className="row justify-content-center display" >
        {/* </a> */}

        <div className="Section-2-Card-Left">
          <div className="about-card3">
            <div className="Section-2-Card-Chailed">
              <h1 className="h1mobile">
                Mobile Friendly
              </h1>
              Look amazing on every screen with a mobile-friendly version of your website.
              <a href="./ui.html"><button className="btn btn-sm btn-info btn-ui-1">More</button></a>
              <br /><br />
              <a href="./ui.html"><button className="btn btn-info btn-ui">More</button></a>
            </div>
          </div>
        </div>

        
        <div className="about-card-home2">
          <img className="mobimg" id="mobimg" src={mobile} alt="" />
        </div>
      </div>
    </div>

  </div>
</div>

</div>

   </>
  )
}

export default Two