import React from 'react';
import style from "../styles/Login.css"
import Logo from "../images/Frame.png";
import Img from "../images/Illustration.png"
import { AiOutlineEye } from "react-icons/ai"
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className='Login-container'>
            <div className='Login'>
                <div className='container'>
                    <div className='container-box'>
                      <Link to="/"><img src={Logo} alt="logo" className='logo-img' /></Link>
                        <img src={Img} alt='image' className='background-img' />
                    </div>
                </div>

                <div className='section-main'>
                    <div className='main'>
                        <h2 className='headers'>Nice to see you again!</h2>
                        <div className='section-form'>
                            <form>
                                <input type="email" placeholder='Email or phone number' />

                                <input type="password" placeholder='Enter password' />
                                <AiOutlineEye className='icons' />

                                <div className='form-sub'>
                                    <div className='title-box'>
                                    <div className="compound-title">
                                            <input type="checkbox" />
                                            <labe for="check" className="compound-box"></labe>
                                        </div>
                                        <label>Remember me</label>
                                    </div>
                                    <p className='description'>Forgot password?</p>
                                </div>
                                <button className='btn'>Sign in</button>

                                <hr className='box' />
                                <div className='component'>
                                    <p className='detail'>Don't have an account <Link to="/sign-up"><span>Get Started</span></Link>
                                   </p>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Login }