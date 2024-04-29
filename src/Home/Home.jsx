import React, { useEffect, useState } from 'react';
import "./Home.scss";
import SectionOne from '../SectionOne/SectionOne';
import SectionTwo from '../SectionTwo/SectionTwo';
import SectionThree from '../SectionThree/SectionThree';
import SectionFour from '../SectionFour/SectionFour';
import Project from '../Project/Project';
import Lenis from '@studio-freight/lenis';

import { motion } from "framer-motion"
import { useSelector } from 'react-redux';

const Home = () => {

    // lenis

    const load = useSelector(state => state.canva.loading)

    useEffect(() => {
        // Create an instance of Lenis for smooth scrolling
        const lenis = new Lenis();

        // Event listener for smooth scrolling
        lenis.on('scroll', (e) => {
            console.log(e);
        });

        // Function for requestAnimationFrame integration with Lenis
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        // Call raf function recursively
        requestAnimationFrame(raf);

        // Preloader logic
        const preloader = document.querySelector('#preloader');
        if (preloader) {
            window.addEventListener('load', () => {
                setTimeout(() => {
                    preloader.classList.add('loaded');
                }, 1000);
                setTimeout(() => {
                    preloader.remove();
                }, 2000);
            });
        }

        // Cleanup function
        return () => {
            lenis.destroy(); // Destroy the Lenis instance to prevent memory leaks
            window.removeEventListener('load', () => { }); // Remove the load event listener
        };
    }, [load]);


    return (
        <>

            <div className='home-two'>
                <div id="preloader">
                    <div className="line"></div>
                </div>
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
