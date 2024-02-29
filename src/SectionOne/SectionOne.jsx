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


const SectionOne = () => {

    // const canvasRef = useRef(null);
    // const dispatch = useDispatch();
    // const Width = useSelector((state) => state.canva.canvasWidth);
    // const Height = useSelector((state) => state.canva.canvasHeight);

    // const drawMoonlight = (event) => {
    //     const canvas = canvasRef.current;
    //     const ctx = canvas.getContext('2d');

    //     ctx.clearRect(0, 0, canvas.width, canvas.height);

    //     // Get the position of the mouse hover relative to the canvas
    //     const rect = canvas.getBoundingClientRect();
    //     const x = event.clientX - rect.left;
    //     dispatch(canvasW(x));
    //     const y = event.clientY - rect.top;
    //     dispatch(canvasH(y));

    //     // Create gradient for moonlight effect
    //     const gradient = ctx.createRadialGradient(
    //         x, y, 0,
    //         x, y, canvas.width / 160
    //     );
    //     gradient.addColorStop(0.9, 'rgba(25, 60, 233)');
    //     gradient.addColorStop(1, 'transparent');

    //     // Fill canvas with gradient
    //     ctx.fillStyle = gradient;
    //     ctx.fillRect(0, 0, canvas.width, canvas.height);
    // };

    // useEffect(() => {
    //     const canvas = canvasRef.current;
    //     canvas.width = window.innerWidth;
    //     canvas.height = window.innerHeight;

    //     canvas.addEventListener('mousemove', drawMoonlight);

    //     return () => {
    //         canvas.removeEventListener('mousemove', drawMoonlight);
    //     };
    // }, []);


    return (
        <>
            {/* <canvas ref={canvasRef} style={{ position: "absolute", zIndex: "2" }} /> */}
            <div className="canvas-div">
                <Canvas />
            </div>
            <div className="div-wrapper">
                <motion.div
                    // transition={{ duration: 1.6 }}
                    // initial={{ y: 150, opacity: 0 }}
                    // animate={{ y: 0, opacity: 1 }}
                    className="div-one">
                    <div className='text-wrapper-one align-items-center '>
                        <motion.h1
                            transition={{ duration: 1.3, delay: 1 }}
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            className='mr-3'>Hi!</motion.h1>
                        <motion.div
                            transition={{ duration: 1.3, delay: 1 }}
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                        >
                            <img src={hand} className='hi-hand' alt="hi" />
                        </motion.div>

                        <motion.h1
                            transition={{ duration: 1.3, delay: 1 }}
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            className=' iam ml-4'>I'm</motion.h1>

                    </div>

                    <div className="text-wrapper-one name-text text-m">
                        <motion.h1
                            transition={{ duration: 1.3, delay: 1.3 }}
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            className='iam-name mr-4'>I'm</motion.h1>
                        <motion.h1
                            transition={{ duration: 1.3, delay: 1.8 }}
                            initial={{ x: 30, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            className='my-name'>Ajay Anandrao</motion.h1>
                    </div>

                    <motion.div
                        transition={{ duration: 1.3, delay: 2 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-wrapper-one align-items-center text-m">
                        <div className="line mr-4 mt-1"></div>
                        <div style={{ fontSize: "20px", fontWeight: 600 }}>Developer and Designer</div>
                    </motion.div>

                    <div className="text-wrapper-one social-m">
                        <motion.div
                            transition={{ duration: 1, delay: 2.2 }}
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            className="cercal">
                            <a href="https://www.linkedin.com/in/ajay-anandrao-a21582231" target='blank' className='link'>
                                <RiLinkedinFill className='social-icon' />
                            </a>
                        </motion.div>

                        <motion.div
                            transition={{ duration: 1, delay: 2.4 }}
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            className="cercal mx-5">
                            <a href="https://www.facebook.com/AJAYANANDRAO0" target='blank' className='link'>
                                <FaFacebook className='social-icon' />
                            </a>
                        </motion.div>

                        <motion.div
                            transition={{ duration: 1, delay: 2.6 }}
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            className="cercal  ">
                            <a href="https://www.instagram.com/ajayanandrao0/" target='blank' className='link'>
                                <RiInstagramFill className='social-icon' />
                            </a>
                        </motion.div>

                        <motion.div
                            transition={{ duration: 1, delay: 2.8 }}
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

export default SectionOne