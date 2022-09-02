import React from 'react'
import './OverlayTwo.scss';

const OverlayThree = () => {
    const overlaySec = {
        position: "fixed",
        display: "none",
        width: "100%",
        height: "100%",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        backgroundColor: "rgba(0,0,0,0.4)",
        zIndex: "2",
        cursor: "context-menu",
    };
    const text = {
        position: "absolute",
        top: "50%",
        left: "50%",
        color: "white",
        transform: "translate(-50%,-50%)",
        backgroundColor: "none",
    };

    function On() {
        document.getElementById("overlayThree").style.display = "block";
    }
    function offTh() {
        document.getElementById("overlayThree").style.display = "none";
    }

  return (
    <>
    
    <div id="overlayThree" style={overlaySec}>
                <div id="text" style={text}>

                <div className='overlay-center-container'>
                    <div className='overlayTwo-container'>
                        <div className='xx btn-glass' onClick={offTh}>X</div>
                        <br />
                        <span className="Experience-page-two-span">
                            <span className="about-inner-text">
                                <h3>Visual Designer</h3>
                                Service with more than 2 years of <br />experience.  Providing quality work to clients <br /> and companies.
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



                    </div></div>

                </div>
            </div>
    
    </>

  )
}

export default OverlayThree