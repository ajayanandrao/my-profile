import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  return (
    <>
     <nav className="navbar navbar-expand-md navbar-dark">
        <div className="container-fluid ">
          <Link className="navbar-brand" id="ajay" to="/">My Profile</Link>
    
          <button className="navbar-toggler" id="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"aria-controls="navbarNavDropdown"aria-expanded="false" aria-label="Toggle navigation" >
          <i style={{ fontSize:"28px"}} className="fa-solid fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <div className="navul">
            <div className="c" id="c">
            <ul className="navbar-nav "  id="ul">
              <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
               <Link className="nav-link" to="/contact/">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to="/about/">About</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to="/signin/">Sign in</Link>
              </li>
              
            </ul>
          </div>
        </div>
    
        <div className="navbar-collapse justify-content-end"></div>
          <div className="form-navbar">
            <form className="d-flex">
              <input className="form-control form-control-sm me-2" type="text" placeholder="Search"/>
              <button className="btn btn-sm btn-outline-success btn-glass" id="btn" type="button">Search</button>        
            </form>
          
          </div>
        </div>
        </div>
      </nav>  

    </>
  )
}

export default Navbar