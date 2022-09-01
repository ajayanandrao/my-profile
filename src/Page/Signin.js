import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import './Signin.scss';
import fb from '../img/icons/fb-sm.png';

const Signin = () => {
    return (
        <>

            <div className="About-bg" id="one">
                <Navbar />
                <span className="page-four-span">
                    <span className="span-display-block">
                        <h2 className='sign-in-margin'>Sign in</h2>
                    </span>
                    <div className="container form-center">
                        <form>
                            <div className="input-container  mb-4">
                                <input type="email" className="form-control w-150 form-control-md" placeholder="Email" id="email" />
                            </div>

                            <div className="input-container  mb-4">
                                <input type="password" className="form-control w-150 form-control-md" placeholder="Password" id="pass" />
                            </div>

                            <button type="submit" className="btn btn-glass w-150 btn-md mb-4 " id="submit">Log in</button>
                            <div className="input-container mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" >Check me out</label>

                            </div>
                            
                            <Link className="login-link" to="/signup/">Sing up</Link>                        </form>
                    </div>
                </span>

                <div className="div-center">
                    <div className="sotioal-icon">
                        <span className="sotioal-icon-row">
                            Login with :

                            <div className="fa-brand-mg">
                                <a href="https://www.facebook.com"><i className="fa-brands fa-facebook"></i></a>
                            </div>

                            <div className="fa-brand-mg">
                                <a href="https://www.gmail.com"><i className="fa-brands fa-google" ></i></a>
                            </div>

                            <div className="fa-brand-mg">
                                <a href="https://instagram.com"><i className="fa-brands fa-instagram"></i></a>
                            </div>
                        </span>
                    </div>
                </div>
                
            </div>
        </>
    )
}
{/* <i className="fa-brands fa-facebook"></i> */}
export default Signin