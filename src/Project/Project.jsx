import React, { useEffect, useState } from 'react'
import "./Project.scss"
import vchat from "./../img/vChat Cover2.png"
import win from "./../img/universalApp.png"
import movie from "./../img/zmove.png"
import golden from "./../img/gcover.png"
import todo from "./../img/todocard.png"
import ecom from "./../img/ecomcard.png";
import tube from "./../img/mytube.png";
import iphone from "./../img/iphone13pro.png";

import vchat1 from "./../img/vChat Cover2.png"
import win1 from "./../img/universalApp.png"
import movie1 from "./../img/movies.png"
import golden1 from "./../img/gcover.png"
import todo1 from "./../img/todo.png"
import ecom1 from "./../img/ecom.png";
import tube1 from "./../img/mytube.png";
import iphone1 from "./../img/iphone13.png";
import lambra from "./../img/lambro.png";
import dolf from "./../img/dolf.png";


const Project = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        // Function to update window width
        const updateWindowWidth = () => {
            setWindowWidth(window.innerWidth);
        };

        // Add event listener for window resize
        window.addEventListener('resize', updateWindowWidth);

        // Initial window width
        setWindowWidth(window.innerWidth);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', updateWindowWidth);
        };
    }, []);

    const [setNum, setSetNum] = useState(2.5)
    // const [numWidth, setNumWidth] = useState(10)

    const num = windowWidth / setNum;
    // const width = windowWidth / numWidth;


    return (
        <div className='project-main'>
            <div className="pro-title">

                <h1 className="pro-tile-text">
                    <img src="https://i.ibb.co/vJ0Zh65/Smiling-Face-with-Sunglasses.png"
                        className='emoji' alt="" />
                    <div className='pro-title-txt'>My Latest Work</div>
                </h1>
            </div>

            <div className="pro-grid-center">
                <div className="project-wrapper">

                    <div className="project-cover-div">
                        <a target="_blank" href="https://vchatweb.netlify.app/">
                            <img src={vchat} className='project-cover' style={{ objectFit: "contain" }} alt="" />
                            <img src={vchat1} className='project-cover1' style={{ objectFit: "contain" }} alt="" />
                            <div className="project-name">
                                <h2 className='pro-text'>VChat</h2>
                            </div>
                        </a>
                    </div>
                    <div className="project-cover-div iphone">
                        <a target="_blank" href="https://revuelto.netlify.app//">
                            <img src={lambra} className='project-cover' style={{ objectFit: "contain" }} alt="" />
                            <img src={lambra} className='project-cover1' style={{ objectFit: "contain" }} alt="" />
                            <div className="project-name">
                                <h2 className='pro-text'>Revuelto</h2>

                            </div>
                        </a>
                    </div>
                    <div className="project-cover-div iphone">
                        <a target="_blank" href="https://ajayanandrao.github.io/dolph/">
                            <img src={dolf} className='project-cover' style={{ objectFit: "contain" }} alt="" />
                            <img src={dolf} className='project-cover1' style={{ objectFit: "contain" }} alt="" />
                            <div className="project-name">
                                <h2 className='pro-text'>Dolph</h2>
                            </div>
                        </a>
                    </div>

                    <div className="project-cover-div">
                        <a target="_blank" href="https://ajayanandrao.github.io/Golden/">
                            <img src={golden} className='project-cover' alt="" />
                            <img src={golden1} className='project-cover1' alt="" />
                            <div className="project-name" style={{ height: `${num}` }}>
                                <h2 className='pro-text'>The Golden <br /> Bakery</h2>
                            </div>
                        </a>
                    </div>

                    <div className="project-cover-div">
                        <a target="_blank" href="https://ajayanandrao.github.io/MyTube/">
                            <img src={tube} className='project-cover' alt="" />
                            <img src={tube1} className='project-cover1' alt="" />
                            <div className="project-name" style={{ height: `${num}` }}>
                                <h2 className='pro-text'>MyTube</h2>
                            </div>
                        </a>
                    </div>
                    <div className="project-cover-div">
                        <a target="_blank" href="https://chat-3c10a.web.app/">
                            {/* <img src={tube} className='project-cover' alt="" /> */}
                            {/* <img src={tube1} className='project-cover1' alt="" /> */}
                            <div className="project-name" style={{ height: `${num}` }}>
                                <h2 className='pro-text'>V Messenger</h2>
                            </div>
                        </a>
                    </div>
                    <div className="project-cover-div">
                        <a target="_blank" href="https://ajayanandrao.github.io/WindowsUniversalTools/">
                            <img src={win} className='project-cover' alt="" />
                            <img src={win1} className='project-cover1' alt="" />
                            <div className="project-name" style={{ height: `${num}` }}>
                                <h2 className='pro-text'>Windows <br />Universal Tools</h2>
                            </div>
                        </a>
                    </div>
                    <div className="project-cover-div">
                        <a target="_blank" href="https://ajayanandrao.github.io/movies/">
                            <img src={movie} className='project-cover' alt="" />
                            <img src={movie1} className='project-cover1' alt="" />
                            <div className="project-name" style={{ height: `${num}` }}>
                                <h2 className='pro-text'>Movie</h2>
                            </div>
                        </a>
                    </div>


                    <div className="project-cover-div">
                        <a target="_blank" href="https://ajayanandrao.github.io/EStore/">
                            <img src={ecom} className='project-cover' alt="" />
                            <img src={ecom1} className='project-cover1' alt="" />
                            <div className="project-name" style={{ height: `${num}` }}>
                                <h2 className='pro-text'>E-Commerce</h2>
                            </div>
                        </a>
                    </div>

                    <div className="project-cover-div">
                        <a target="_blank" href="https://ajayanandrao.github.io/my-todo/">
                            <img src={todo} className='project-cover' alt="" />
                            <img src={todo1} className='project-cover1' alt="" />
                            <div className="project-name" style={{ height: `${num}` }}>
                                <h2 className='pro-text'>ToDo</h2>
                            </div>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Project