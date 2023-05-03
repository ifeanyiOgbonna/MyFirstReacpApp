import React, { useState, useEffect, useRef } from 'react';
import "../styles/Signup.css"
import Logo from "../images/Frame.png";
import Img from "../images/Illustration.png"
import { AiOutlineEye } from "react-icons/ai"
import { TbEyeOff } from "react-icons/tb"
import { Link } from 'react-router-dom';

function Signup() {
    const emailRef = useRef();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    useEffect(() => {
        emailRef.current.focus();
    }, [])

    useEffect(() => {
    }, [email, password])

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email, password);
        setEmail("");
        setPassword("");
    }

    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!open)
    }
    return (
        <div className='section-box'>
            <div className='section-container'>
                <div className='container'>
                    <div className='container-box'>
                        <Link to="/"><img src={Logo} alt="logo" className='logo-img' /></Link>
                        <img src={Img} alt='imag' className='background-logo' />
                    </div>
                </div>

                <div className='section-main'>
                    <div className='main'>
                        <h2 className='header-main'>Create an account!</h2>
                        <p className='header-detail'>Hello there, Let's start your journey with us</p>
                        <div className='section-form'>
                            <form onSubmit={handleSubmit}>
                                <input type="email" id='email' ref={emailRef} autoComplete="off"
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder='Email or phone number' value={email} required />

                                <input type="password" id='password'
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder='Enter password' value={password} required />
                                {/* <AiOutlineEye className='icon' /> */}
                                <div className='icon'>
                                    {
                                        (open === false) ? <AiOutlineEye size={20} onClick={toggle} /> : <TbEyeOff size={20} onClick={toggle} />
                                    }
                                </div>

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
                                    <p className='details'>Already have an account? <Link to="/login"><span>Login now</span></Link></p>
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