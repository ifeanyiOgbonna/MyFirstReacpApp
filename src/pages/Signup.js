import React from 'react'
import "../styles/Signup.css"
import Logo from "../images/Frame.png";
import Img from "../images/Illustration.png"
import { AiOutlineEye } from "react-icons/ai"
import { Link } from 'react-router-dom';

function Signup() {
    return (
        <div className='section-box'>
            <div className='section-container'>
                <div className='container'>
                    <div className='container-box'>
                      <Link to="/"><img src={Logo} alt="logo" className='logo-img' /></Link>  
                        <img src={Img} alt='imag' className='background-img' />
                    </div>
                </div>

                <div className='section-main'>
                    <div className='main'>
                        <h2 className='header-main'>Create an account!</h2>
                        <p className='header-detail'>Hello there, Let's start your journey with us</p>
                        <div className='section-form'>
                            <form>
                                <input type="email" placeholder='Email or phone number' />

                                <input type="password" placeholder='Enter password' />
                               <AiOutlineEye className='icon' />

                                <div className='form-sub'>
                                    <div className='title-box'>
                                        <div className="box-title">
                                            <input type="checkbox" />
                                            <labe for="check" className="detail-box"></labe>
                                        </div>
                                        <label>I accept the<span>Terms of Service</span> and<span>privacy Policy.</span></label>
                                    </div>
                                </div>
                                <button className='btn'>Sign up</button>

                                <hr className='box' />
                                <div className='component'>
                                    <p className='detail'>Already have an account? <Link to="/login"><span>Login now</span></Link></p>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Signup }