import React from 'react'
import "./SectionFour.scss";
import star from "./../img/Star.png"
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";

const SectionFour = () => {
    return (
        <>
            <section className="testimonial text-center">
                <div className="container">

                    <div className="tile-div">
                        <h1 className='title'>
                            <img src={star} className='starone' alt="" />
                            Testimonial
                            <img src={star} className='star' alt="" />
                        </h1>
                    </div>
                    <div id="testimonial4" className="carousel slide testimonial4_indicators testimonial4_control_button thumb_scroll_x swipe_x" data-ride="carousel" data-pause="hover" data-interval="5000" data-duration="2000">

                        <div className="carousel-inner" role="listbox">
                            <div className="carousel-item active">
                                <div className="testimonial4_slide">
                                    <div className="circle-div">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp" className="img-circle img-responsive" alt='' />
                                    </div>
                                    <p><RiDoubleQuotesL style={{ marginBottom: "18px" }} /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam cupiditate, sint maxime exercitationem magni doloribus dolore iusto.  <RiDoubleQuotesR style={{ marginBottom: "18px" }} /></p>
                                    <div className="tile-div">
                                        <h4 className='title-name'>Maria</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="testimonial4_slide">
                                    <div className="circle-div">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20%2810%29.webp" className="img-circle img-responsive" alt='' />
                                    </div>
                                    <p><RiDoubleQuotesL style={{ marginBottom: "18px" }} /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam cupiditate, sint maxime exercitationem magni doloribus dolore iusto. <RiDoubleQuotesR style={{ marginBottom: "18px" }} /></p>
                                    <div className="tile-div">
                                        <h4 className='title-name'>Lisa Cudrow</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="testimonial4_slide">

                                    <div className="circle-div">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp" className="img-circle img-responsive" alt='' />
                                    </div>
                                    <p> <RiDoubleQuotesL style={{ marginBottom: "18px" }} /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam cupiditate, sint maxime exercitationem magni doloribus dolore iusto.  <RiDoubleQuotesR style={{ marginBottom: "18px" }} /></p>
                                    <div className="tile-div">
                                        <h4 className='title-name'>John Smith</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#testimonial4" data-slide="prev">
                            <span className="carousel-control-prev-icon"></span>
                        </a>
                        <a className="carousel-control-next" href="#testimonial4" data-slide="next">
                            <span className="carousel-control-next-icon"></span>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SectionFour