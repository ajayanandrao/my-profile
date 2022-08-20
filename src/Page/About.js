import React from 'react'
import './About.scss';
import Footer from './Footer';
import Navbar from './Navbar';

const About = () => {
  return (
    <>
    
    <div className="About-bg" id="one"> 
        <Navbar/>
       <span className='about-title'><h3>About me</h3></span>

<div id="overlay" >
  <div id="text">
    
<div className="product-card">
  <button className="btn btn-glass page-card-x-btn">X</button>
  
  <br/>
  <span className="Experience-page-two-span">
<span className="about-inner-text"> 
  <h3>Product Designer</h3>
  Service with more than 2 years of <br/>experience.  Providing quality work to clients <br/> and companies.
</span>
</span>
<div className="product-card-text">
<div className="col-11">
<div className="ex-icon">
   <i className="material-icons">check</i>I develop the user interface
</div>

<div className="ex-icon">
   <i className="material-icons">check</i>Web page development
</div>
<div className="ex-icon">
   <i className="material-icons">check</i>I create ux element interactions.
</div>
<div className="ex-icon">
<i className="material-icons">check</i>I position you company brand.
</div>
<div className="ex-icon">
<i className="material-icons">check</i>Design and mackups of products for companies.
</div>
</div>
</div>

</div>
</div>
  
</div>

<div >
</div>

        <div className="container">
            <div className="container-fluid" id="section2">
                <div className="row justify-content-center" >
                  
                    
                    <div className="About-page-card-Left">
                        <div className="about-card3"> 
                          
    
                        </div>
                    </div>
                      
                <div className="About-card-home2">
                    
                    <span className="flex" >
                      <div  id="Experience"></div>
                        
                        <div className="About-inner-card1-Pro ">
                            <span className="about-inner-img"><i className="material-icons">shopping_bag</i></span>
                            <span className="about-inner-text">
                            Product </span>   
                        </div>
                        <div className="About-inner-card1-Pro ">
                            <span className="about-inner-img"><i className="material-icons">shopping_bag</i></span>
                            <span className="about-inner-text">
                            Product </span>   
                        </div>
                        <div className="About-inner-card1-Pro ">
                            <span className="about-inner-img"><i className="material-icons">shopping_bag</i></span>
                            <span className="about-inner-text">
                            Product </span>   
                        </div>
                        
         

                        <div  id="includedContent"></div>
                    </span>
                          Frontend developer, I create web pages with UI / UX user interface, ihave years of experience and many clients are happy with the projects carried out. <p> </p>  
                          <a href="./resume ajay.pdf" download=""><button  className="btn btn-glass" >Download CV</button></a> 
                          <a href="./Contact.html"><button className="btn btn-glass m-2" >Contact me</button></a>
                          
                    </div>
                </div>    
              </div>
             
        </div>
        <br/>
</div>
<Footer/>
    </>
  )
}

export default About