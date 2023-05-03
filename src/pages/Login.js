import React, { useState, useEffect, useRef } from 'react';
import "../styles/Login.css"
import Logo from "../images/Frame.png";
import Img from "../images/Illustration.png"
import { AiOutlineEye } from "react-icons/ai"
import { TbEyeOff } from "react-icons/tb"
import { Link } from 'react-router-dom';

function Login() {
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

        < div className='Login-container'>
            <div className='Login'>
                <div className='container'>
                    <div className='container-box'>
                        <Link to="/"><img src={Logo} alt="logo" className='logo-img' /></Link>
                        <img src={Img} alt='img' className='background-img' />
                    </div>
                </div>

                <div className='section-main'>
                    <div className='main'>
                        <h2 className='headers'>Nice to see you again!</h2>
                        <div className='section-form'>
                            <form onSubmit={handleSubmit}>
                                <input type="email" id='email' ref={emailRef} autoComplete="off"
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder='Email or phone number' value={email} required />

                                <input type={(open === false) ? "password" : "text"} id='password'
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder='Enter password' value={password} required />

                                <div className='icons'>
                                    {
                                        (open === false) ? <AiOutlineEye size={20} onClick={toggle} /> : <TbEyeOff size={20} onClick={toggle} />
                                    }
                                </div>


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