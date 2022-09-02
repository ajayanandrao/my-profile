import React from 'react'
import './Four.scss';
import ajay from '../img/aj.jpg';
import abhi from '../img/ab.jpg';
import shubham from '../img/su.png';


const Four = () => {
  return (
    <>
    <div className="page-four" id="Section-4">

<span className="page-four-span">
  <span className="span-display-block">
    <h2>Testimonials</h2>
    what our clients are saying about us.   
  </span>
  
  <div className="container animate-bg">
    <div className="row">
        <div className="col-lg-4">
            <div className="card">
                <div className="face front-face"> 
                
                <img src={ajay} alt="" className="profile"/>

                    <div className="pt-3 text-uppercase name"> Ajay Anandrao </div>
                    <div className="designation">Frontend Developer</div>
                </div>
                <div className="face back-face"> <span className="fas fa-quote-left"></span>
                    <div className="testimonial"> I made back the purchase price in just 48 hours! Thank you for making it pain less, pleasant. The service was execellent. I will refer everyone I know. </div> <span className="fas fa-quote-right"></span>
                </div>
            </div>
        </div>
        <div className="col-lg-4">
            <div className="card">
                <div className="face front-face"> 

                <img src={abhi} alt="" className="profile"/>
                
                    <div className="pt-3 text-uppercase name"> Abhijeet Anandrao </div>
                    <div className="designation">Android Developer</div>
                </div>
                <div className="face back-face"> <span className="fas fa-quote-left"></span>
                    <div className="testimonial"> Really good, you have saved our business! I made back the purchase price in just 48 hours! man, this thing is getting better and better as I learn more about it. </div> <span className="fas fa-quote-right"></span>
                </div>
            </div>
        </div>
        <div className="col-lg-4">
            <div className="card">
                <div className="face front-face"> 
                <img src={shubham} alt="" className="profile"/>
                    <div className="pt-3 text-uppercase name"> Subham Kaninde </div>
                    <div className="designation">Finance Director</div>
                </div>
                <div className="face back-face"> <span className="fas fa-quote-left"></span>
                    <div className="testimonial"> Account keeper is the most valuable business research we have EVER purchased. Without electrician, we would ahave gone bankrupt by now. </div> <span className="fas fa-quote-right"></span>
                </div>
            </div>
        </div>
    </div>

</div>

</span>
<div className="sl"></div>
</div>

    </>
  )
}

export default Four