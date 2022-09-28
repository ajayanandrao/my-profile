import React from 'react'
import './Contact.scss';
import Footer from './Footer';
import Navbar from './Navbar';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
   <>
   <div className="bg-container">
                <Navbar />
                <span className="page-two-span">
                    <span className="span-display-block">
                        <h2>Contact me</h2>
                    </span>
                </span>

                <div className="page-three-section1">
                    <div className="col">
                        <div className="Contact-page-card-left">

                            <div className="colum">


                                <motion.span 
                                initial={{x:200}}
                                transition={{duration:1.9,delay:2}}
                                animate={{x:0}} className="Contact-flex">
                                    <div className="Contact-inner-card1" >
                                        <span className="about-inner-img">
                                            {/* <a href="mailto:ajayanandrao@outlook.com"> */}
                                            {/* <i className="material-icons">forward_to_inbox</i> */}
                                            <i className="fa-solid fa-envelope"></i></span>
                                        <span className="about-inner-text">
                                            Email </span>ajayanandrao@outlook.com
                                    </div>
                                </motion.span>

                                <motion.span
                                transition={{duration:1.6, delay:1.5}} 
                                initial={{x:200}}
                                animate={{x:0}}
                                className="Contact-flex">
                                    <div className="Contact-inner-card1" >
                                        <span className="about-inner-img">
                                            {/* <i className="fa-brands fa-facebook-messenger" style={{fontSize: "22px"}}></i> */}
                                            <i className="fa-solid fa-message"></i>
                                        </span>
                                        <span className="about-inner-text">
                                            Message </span>Microsoft Teams
                                    </div>
                                </motion.span>
                                <motion.span
                                transition={{duration:1.3, delay:1}}
                                initial={{x:200,}}
                                animate={{x:0}}
                                className="Contact-flex">
                                    <div className="Contact-inner-card1" >
                                        <span className="about-inner-img">
                                            {/* <i className="material-icons" style={{fontSize:"24px"}}>whatsapp</i> */}
                                            <i className="fa-brands fa-whatsapp"></i>
                                        </span>
                                        <span className="about-inner-text">
                                            Whatsapp </span>7385734759
                                    </div>
                                </motion.span>

                            </div>

                        </div>
                    </div>

                    <div className="col">
                        <form>
                            <div className="page-three-card-right">
                                <label className="form-label">Name:</label>
                                <input type="email" className="form-control form-control-custom" id="email" placeholder="Enter name" name="email" style={{ background: "none", color: "white" }} />

                                <br /><label className="form-label">Email:</label>
                                <input type="email" className="form-control form-control-custom" id="email" placeholder="Enter email address" name="email" style={{ background: "none", color: "white" }} ></input>

                                <div className="mb-3 mt-3">
                                    <label >Project:</label>
                                    <textarea className="form-control form-control-custom" rows="5" id="comment" placeholder="Project" name="text" style={{ background: "none", color: "white" }} ></textarea>


                                </div>
                                <button type="submit" className="btn btn-glass"><a href="#Section-4">Send Message</a></button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
<Footer/>
   </>
  )
}

export default Contact