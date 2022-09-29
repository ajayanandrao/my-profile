import React from 'react'
import './MyProject.scss';
import Navbar from '../Navbar';
import one from '../../img/wallpepar/gg.png';
import two from '../../img/wallpepar/s.png';

const MyProject = () => {
  return (
    <>
      <Navbar />
      <div className="project-container">
        <div className="project-titel"><span className='project-text'>My Last Project</span></div>
        
        <div className="project-inner-container ">
          <div className="project-One">
            <img className="project-img-one pro-img" src={one}/>
            </div>
            <div className="project-One">
            <img className="project-img-one pro-img" src={two}/>
            </div>
            <div className="project-One">
            <img className="project-img-one pro-img" src={two}/>
            </div>
        </div>
      </div>

    </>
  )
}

export default MyProject