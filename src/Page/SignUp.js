import React from 'react'
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import './SignUp.scss';
import fb from '../img/icons/f.png';
import g from '../img/icons/g.png';
import i from '../img/icons/i.png';

const SignUp = () => {
  return (
<>

<div className="About-bg" id="one"> 
<Navbar/>
<span className="page-four-span">
    <span className="span-display-block">
      <h2>Sign in</h2>
    </span>
<div className="container form-center-up">
    <form>    
      <div className="input-container  mb-3">
        <input type="text" className="form-control w-150 form-control-md" placeholder="Full Name" id="name"/>
      </div>    
        <div className="input-container  mb-3">
          <input type="email" className="form-control w-150 form-control-md" placeholder="Email" id="email" aria-describedby="emailHelp"/>
        </div>
        <div className="input-container  mb-3">
          <input type="text" className="form-control w-150 form-control-md" placeholder="Phone Number" id="number" />
        </div>
        <div className="input-container  mb-3">
          <input type="password" className="form-control w-150 form-control-md" placeholder="Password" /> 
        </div>
        <div className="input-container  mb-3">
          <input type="password" className="form-control w-150 form-control-md" placeholder="Conferm Password" /> 
        </div>
    
        <button type="submit" className="btn btn-glass w-150 btn-md mb-2 "  id="submit">Sign Up</button> 
        <div className="input-container  form-check">
            
          </div>
          <Link className="login-link" to="/signin/">Sing in</Link>
          
      </form>
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
                                <a href="https://instagram.com"><img className="img-facebook" src={i}/></a>
                            </div>
</span>
</div>
</div>
<div className="sl"></div>
</div>
<Footer/>



</>
  )
}

export default SignUp