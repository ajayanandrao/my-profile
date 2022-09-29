import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import './Signin.scss';
import fb from '../img/icons/f.png';
import g from '../img/icons/g.png';
import i from '../img/icons/ii.png';

const Signin = (props) => {
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
                            
                            <Link className="login-link" to="/signup/"><span className='singup-text'>Sing up</span></Link>                        </form>
                    </div>
                </span>

                <div className="div-center">
                    <div className="sotioal-icon">
                        <span className="sotioal-icon-row">
                            Login with :

                            <div className="fa-brand-mg">
                                <a href="https://www.facebook.com"><img className="img-facebook" src={fb}/></a>
                            </div>

                            <div className="fa-brand-mg">
                                <a href="https://www.gmail.com"><img className="img-facebook" src={g}/></a>
                            </div>

                            <div className="fa-brand-mg">
                                <a href="https://instagram.com"> <img src={i}/> </a>
                            </div>
                        </span>
                    </div>
                </div>
                
            </div>
        </>
    )
}
{/* <i className="fa-brands fa-facebook"></i>

<i className="fa-brands fa-facebook"></i>

*/}
export default Signin