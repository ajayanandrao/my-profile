import React, { useEffect} from 'react'
import "./SectionTwo.scss";
import ring from "./../img/Group.png"
import { RiReactjsLine } from "react-icons/ri";
import Canvas from '../Canvas/Canvas';

import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(useGSAP, ScrollTrigger);

const SectionTwo = () => {

    useEffect(() => {
        window.addEventListener(
            "scroll",
            () => {
                document.body.style.setProperty(
                    "--scroll",
                    window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
                );
            },
            false
        );

        return () => {
            window.removeEventListener("scroll", () => { });
        };
    }, []);


    useGSAP(
        () => {
            // const boxes = gsap.utils.toArray('.box');

            gsap.to(".skill-div", {
                x: 0,
                // duration: 3,
                opacity: 1,

                scrollTrigger: {
                    trigger: ".skill-div",
                    start: 'top bottom',
                    end: 'top 20%',
                    scrub: 1.5,
                    // markers: true,

                },
            });

            gsap.to(".ring-div", {
                x: 0,
                // duration: 3,
                opacity: 1,

                scrollTrigger: {
                    trigger: ".ring-div",
                    start: 'top bottom',
                    end: 'top center',
                    scrub: 1.5,
                    // markers: true,

                },
            });
        },

        // { scope: main }
    );

    return (
        <>
            <Canvas />
            <div className="About-div-wrapper" >
                <div className="SectionTwo">
                    <h1 className="SectionText">
                        About
                    </h1>
                </div>
                <p className='About-Text' >im a full stack developer in React and Firebase also ux /ui designer who loves clean, simple & unique design. i also enjoy crafting brand identities, icons, & ilustration work.</p>

                <div className="about-me" >
                    <div className="ring-div">
                        <div className='ring' style={{ backgroundImage: `url(${ring})` }} >
                            <RiReactjsLine style={{ fontSize: "80px" }} />
                        </div>
                    </div>

                    <div className="skill-div">
                        <div className='mb-4'>
                            <div className="skill-name">
                                <div>REACT</div>
                                <div>100%</div>
                            </div>
                            <div className="progress-line"></div>
                        </div>

                        <div className='mb-4'>
                            <div className="skill-name" style={{ width: "90%" }}>
                                <div>FIREBASE</div>
                                <div>90%</div>
                            </div>
                            <div className="progress-line fb"></div>
                        </div>

                        <div className='mb-4'>
                            <div className="skill-name" style={{ width: "80%" }}>
                                <div>REACT NATIVE</div>
                                <div>80%</div>
                            </div>
                            <div className="progress-line rn"></div>
                        </div>

                        <div className='mb-4'>
                            <div className="skill-name" style={{ width: "90%" }}>
                                <div>JAVASCRIPT</div>
                                <div>90%</div>
                            </div>
                            <div className="progress-line js"></div>
                        </div>
                        {/* <img src={skill} className='skill' alt="" /> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionTwo