import React, { useEffect, useState } from 'react';
import "./Home.scss";
import SectionOne from '../SectionOne/SectionOne';
import SectionTwo from '../SectionTwo/SectionTwo';
import SectionThree from '../SectionThree/SectionThree';
import SectionFour from '../SectionFour/SectionFour';
import Project from '../Project/Project';
import Lenis from '@studio-freight/lenis';

import { motion } from "framer-motion"

const Home = () => {

    // lenis

    const lenis = new Lenis()
    lenis.on('scroll', (e) => {
        console.log(e)
    })
    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf);


    return (
        <>

            <div className='home-two'>
                <SectionOne />
                <SectionTwo />
                <Project />
                <SectionThree />
                <SectionFour />
            </div>

        </>
    );
};

export default Home;
