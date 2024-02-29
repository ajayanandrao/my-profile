import React, { useEffect, useState } from 'react'
import "./Project.scss"
import vchat from "./../img/vChat Cover2.png"
import win from "./../img/universalApp.png"
import movie from "./../img/movies.png"
import golden from "./../img/gcover.png"
import todo from "./../img/todo.png"
import ecom from "./../img/ecom.png";
import tube from "./../img/mytube.png";


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
                    <div className="project-cover-div" style={{ height: `${num}px` }}>
                        <a target="_blank" href="https://ajayanandrao.github.io/VChat/">
                            <img src={vchat} className='project-cover' style={{ objectFit: "contain" }} alt="" />
                            <div className="project-name">
                                <h2 className='pro-text'>VChat</h2>

                            </div>
                        </a>
                    </div>

                    <div className="project-cover-div" style={{ height: `${num}px` }}>
                        <a target="_blank" href="https://ajayanandrao.github.io/Golden/">
                            <img src={golden} className='project-cover' alt="" />
                            <div className="project-name" style={{ height: `${num}` }}>
                                <h2 className='pro-text'>The Golden Bakery</h2>
                            </div>
                        </a>
                    </div>

                    <div className="project-cover-div" style={{ height: `${num}px` }}>
                        <a target="_blank" href="https://ajayanandrao.github.io/MyTube/">
                            <img src={tube} className='project-cover' alt="" />
                            <div className="project-name" style={{ height: `${num}` }}>
                                <h2 className='pro-text'>MyTube</h2>
                            </div>
                        </a>
                    </div>
                    <div className="project-cover-div" style={{ height: `${num}px` }}>
                        <a target="_blank" href="https://ajayanandrao.github.io/WindowsUniversalTools/">
                            <img src={win} className='project-cover' alt="" />
                            <div className="project-name" style={{ height: `${num}` }}>
                                <h2 className='pro-text'>WindowsUniversalTools</h2>
                            </div>
                        </a>
                    </div>
                    <div className="project-cover-div" style={{ height: `${num}px` }}>
                        <a target="_blank" href="https://ajayanandrao.github.io/movies/">
                            <img src={movie} className='project-cover' alt="" />
                            <div className="project-name" style={{ height: `${num}` }}>
                                <h2 className='pro-text'>Movie</h2>
                            </div>
                        </a>
                    </div>


                    <div className="project-cover-div" style={{ height: `${num}px` }}>
                        <a target="_blank" href="https://ajayanandrao.github.io/EStore/">
                            <img src={ecom} className='project-cover' alt="" />
                            <div className="project-name" style={{ height: `${num}` }}>
                                <h2 className='pro-text'>E-Commerce</h2>
                            </div>
                        </a>
                    </div>

                    <div className="project-cover-div" style={{ height: `${num}px` }}>
                        <a target="_blank" href="https://ajayanandrao.github.io/my-todo/">
                            <img src={todo} className='project-cover' alt="" />
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