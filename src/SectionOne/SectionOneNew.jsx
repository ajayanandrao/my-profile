import React, { useEffect, useRef } from 'react'
import "./SectionOne.scss";
import hand from "./../img/hand.png"
import start from "./../img/Star.png"
import { RiLinkedinFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import aj from "./../img/0033.png";
import Canvas from '../Canvas/Canvas';
import { useDispatch, useSelector } from 'react-redux';
import { canvasH, canvasW } from '../Redux/CanvasSlice';
import { motion } from "framer-motion";


const SectionOneNew = () => {


    return (
        <>

            <div className="canvas-div">
                <Canvas />
            </div>
            <div className="div-wrapper">
                <motion.div
                    transition={{ duration: 1.6 }}
                    initial={{ y: 150, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="div-one">
                    <div className='text-wrapper-one align-items-center '>
                        <h1 className='me-3'>Hi!</h1>
                        <div>
                            <img src={hand} className='hi-hand' alt="hi" />
                        </div>

                        <h1 className=' iam ms-4'>I'm</h1>

                    </div>

                    <div className="text-wrapper-one name-text text-m">
                        <h1 className='iam-name me-4'>I'm</h1>
                        <h1 className='my-name'>Ajay Anandrao</h1>
                    </div>

                    <div className="text-wrapper-one align-items-center text-m">
                        <div className="line me-4 mt-1"></div>
                        <div
                            style={{ fontSize: "20px", fontWeight: 600 }}>Developer and Designer</div>
                    </div>

                    <div className="text-wrapper-one social-m">
                        <div className="cercal">
                            <a href="https://www.linkedin.com/in/ajay-anandrao-a21582231" target='blank' className='link'>
                                <RiLinkedinFill className='social-icon' />
                            </a>
                        </div>

                        <div
                            transition={{ duration: 1, delay: 6 }}
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            className="cercal mx-5">
                            <a href="https://www.facebook.com/AJAYANANDRAO0" target='blank' className='link'>
                                <FaFacebook className='social-icon' />
                            </a>
                        </div>

                        <motion.div
                            transition={{ duration: 1, delay: 5.5 }}
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            className="cercal  ">
                            <a href="https://www.instagram.com/ajayanandrao0/" target='blank' className='link'>
                                <RiInstagramFill className='social-icon' />
                            </a>
                        </motion.div>

                        <motion.div
                            transition={{ duration: 1, delay: 5 }}
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            className="cercal mx-5">
                            <a href="https://twitter.com/AjayAnandrao0" target='blank' className='link'>
                                <FaTwitter className='social-icon' />
                            </a>
                        </motion.div>
                    </div>
                </motion.div>

                <motion.div
                    transition={{ duration: 1.6, delay: 0.5 }}
                    initial={{ y: 150, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="div-two">
                    <div className="aj-photo-div">
                        <div className="aj-photo-inner-div"></div>
                        <img src={aj} alt="" className='aj-photo' />
                    </div>
                    <div className="cercal-one"></div>
                    <div className="cercal-two"></div>
                    <img src={start} className='star-one' alt="" />
                    <img src={start} className='star-two' alt="" />
                </motion.div>

                <motion.div
                    transition={{ duration: 1.6, delay: 0.5 }}
                    initial={{ y: 150, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-wrapper-one social-m">
                    <div className="cercal">
                        <a href="https://www.linkedin.com/in/ajay-anandrao-a21582231" target='blank' className='link'>
                            <RiLinkedinFill className='social-icon' />
                        </a>
                    </div>

                    <div className="cercal mx-2">
                        <a href="https://www.facebook.com/AJAYANANDRAO0" target='blank' className='link'>
                            <FaFacebook className='social-icon' />
                        </a>
                    </div>

                    <div className="cercal  mx-2">
                        <a href="https://www.instagram.com/ajayanandrao0/" target='blank' className='link'>
                            <RiInstagramFill className='social-icon' />
                        </a>
                    </div>
                    <div className="cercal mx-2">
                        <a href="https://twitter.com/AjayAnandrao0" target='blank' className='link'>
                            <FaTwitter className='social-icon' />
                        </a>
                    </div>
                </motion.div>
            </div>

        </>
    )
}

export default SectionOneNew