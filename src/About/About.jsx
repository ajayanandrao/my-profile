import React, { useEffect, useState } from 'react'
import "./About.scss";
import ring from "./../img/Group.png"
import skill from "./../img/btn.png"
import { motion } from "framer-motion";

import html from "./../img/icons/html-5.png";
import css from "./../img/icons/css-3.png";
import js from "./../img/icons/javascrip.png";
import jq from "./../img/icons/jq 96.png";
import react from "./../img/icons/react.png";
import py from "./../img/icons/python.png";
import tailwind from "./../img/icons/tailwind.png";
import boot from "./../img/icons/bootstrap.png";
import php from "./../img/icons/php.png";
import redux from "./../img/icons/redux.png";
import fire from "./../img/icons/firebase.png";
import nativ from "./../img/icons/react.png";
import spline from "./../img/icons/icon_favicon32x32.png";
import { IoClose } from "react-icons/io5";
import { RiReactjsLine } from "react-icons/ri";
import cv from './React.pdf';
import Canvas from '../Canvas/Canvas';
import { useSelector } from 'react-redux';

const About = () => {

    const [h, setH] = useState(0);
    const [n, setN] = useState(0);
    const [e, setE] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setH((prevH) => prevH + 1);
            setN((prevN) => prevN + 1);
            setE((prevE) => prevE + 1);
        }, 10);
        return () => clearInterval(intervalId);
    }, []);

    const [on, setOn] = useState(false);

    const handleOverlay = () => {
        setOn(!on);
    }

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {

        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", updateMousePosition);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
        };
    }, []);


    return (
        <div className='about-container'>

            <motion.div
                animate={{
                    x: mousePosition.x - 100 / 2, // Adjust according to the size of your circle
                    y: mousePosition.y - 100 / 2, // Adjust according to the size of your circle
                }}
                transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
                className="circle"
            ></motion.div>

            <Canvas />
            {on &&
                <div className="overlay-skill">
                    <div className="overlay-card">
                        <IoClose className='sill-close' onClick={handleOverlay} />
                        <div className="skill-div">
                            <img src={html} alt="" className='skill-icon' />
                            <h5 className="skill-name">HTML</h5>
                        </div>
                        <div className="skill-div">
                            <img src={css} alt="" className='skill-icon' />
                            <h5 className="skill-name">CSS</h5>
                        </div>
                        <div className="skill-div">
                            <img src={boot} alt="" className='skill-icon' />
                            <h5 className="skill-name">Bootstrap</h5>
                        </div>
                        <div className="skill-div">
                            <img src={tailwind} alt="" className='skill-icon' />
                            <h5 className="skill-name">Tailwind</h5>
                        </div>
                        <div className="skill-div">
                            <img src={js} alt="" className='skill-icon' />
                            <h5 className="skill-name">Javascript</h5>
                        </div>
                        <div className="skill-div">
                            <img src={jq} alt="" className='skill-icon' />
                            <h5 className="skill-name">Jquary</h5>
                        </div>
                        <div className="skill-div">
                            <img src={react} alt="" className='skill-icon' />
                            <h5 className="skill-name">React</h5>
                        </div>
                        <div className="skill-div">
                            <img src={redux} alt="" className='skill-icon' />
                            <h5 className="skill-name">Redux</h5>
                        </div>
                        <div className="skill-div">
                            <img src={fire} alt="" className='skill-icon' />
                            <h5 className="skill-name">Firebase</h5>
                        </div>
                        <div className="skill-div">
                            <img src={php} alt="" className='skill-icon' />
                            <h5 className="skill-name">PHP</h5>
                        </div>
                        <div className="skill-div">
                            <img src={nativ} alt="" className='skill-icon' />
                            <h5 className="skill-name">React Native</h5>
                        </div>
                        <div className="skill-div">
                            <img src={spline} alt="" className='skill-icon' />
                            <h5 className="skill-name">Spline</h5>
                        </div>
                        <div className="skill-div">
                            <img src={py} alt="" className='skill-icon' />
                            <h5 className="skill-name">Python</h5>
                        </div>

                    </div>
                </div>
            }


            <div className="About-div-wrapper">
                <div className="SectionTwo">
                    <h1 className="SectionText">
                        About
                    </h1>
                </div>
                <p className='About-Text' >im a full stack developer in React and Firebase also ux /ui designer who loves clean, simple & unique design. i also enjoy crafting brand identities, icons, & ilustration work.</p>

                <div className="about-me">

                    <div
                        className="about-ring-div">
                        <motion.div
                            animate={{ rotate: 300 }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatType: "reverse",
                            }}
                            className='ring' style={{ backgroundImage: `url(${ring})` }}>
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{
                                    duration: 1,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                }}
                            >
                                <RiReactjsLine style={{ fontSize: "80px" }} />
                            </motion.div>
                        </motion.div>
                    </div>

                    <motion.div

                        className="about-skill-div">
                        <div className='mb-4'>
                            <div className="skill-name">
                                <div>REACT</div>
                                <div>100%</div>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{ width: `${h ? 100 : h}%` }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                        <div className='mb-4'>
                            <div className="skill-name" style={{ width: "90%" }}>
                                <div>FIREBASE</div>
                                <div>90%</div>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{ width: `${n ? 90 : n}%` }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>


                        <div className='mb-4'>
                            <div className="skill-name" style={{ width: "80%" }}>
                                <div>REACT NATIVE</div>
                                <div>80%</div>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{ width: `${e ? 80 : e}%` }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                        <div className='mb-4'>
                            <div className="skill-name" style={{ width: "90%" }}>
                                <div>JAVASCRIPT</div>
                                <div>90%</div>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{ width: `${n ? 90 : n}%` }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className='d-flex'>
                            <img src={skill} className='skill' alt="" onClick={handleOverlay} />
                            <a href={cv} download="React.pdf" className='link'>
                                <div className="submit ml-4" >Download CV</div>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default About