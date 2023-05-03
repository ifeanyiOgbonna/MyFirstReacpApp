import React from 'react'
import "../styles/ContactUs.css"
import { Header } from '../component/Header';
import point from "../images/point.png";
import call from "../images/call.png";
import mail from "../images/mail.png";
import later from "../images/later.png";
import vector2 from "../images/Vector (2).png";
import draw from "../images/Draw.png";
import { AiFillLinkedin } from "react-icons/ai";
import { BsMedium } from "react-icons/bs";
import { Link } from "react-router-dom"

function ContactUs() {
    return (
        <div>
            <Header />
            <div className='contact-compound'>
                <div className='contact-container'>
                    <h1 className='contact-header'>CONTACT US</h1>
                    <p className='contact-description'>Feel free to contact us any time. We will get back to you as soon as we can.</p>
                    <form className='user-info'>
                        <input type="text" placeholder='Name' />
                        <input type="email" placeholder='Email' />
                        <textarea className='text'>Message</textarea>
                        <button className='btn-submit'>Send</button>
                    </form>
                </div>

                <div className='contact-schedule'>
                    <div className='schedule-container'>
                        <div className='schedule-item'>
                            <img src={point} alt="icon" />
                            <p className='schedule-detail'>14 GreenRoad St.</p>
                        </div>

                        <div className='schedule-item'>
                            <img src={call} alt="icon" />
                            <p className='schedule-detail'>14 GreenRoad St.</p>
                        </div>

                        <div className='schedule-item'>
                            <img src={mail} alt="icon" />
                            <p className='schedule-detail'>avira@getinfo.com</p>
                        </div>

                        <div className='schedule-item'>
                            <img src={later} alt="icon" />
                            <p className='detail'>Mon-Fri: 9:00 AM - 8:00 PM
                                Sat: 9:30 AM - 6:30 PM</p>
                        </div>

                        <div className='schedule-item'>
                            <div className='scene'>
                                <Link to="https://Linkedin.com">
                                    <AiFillLinkedin className='linked' />
                                </Link>

                                <Link to="https://medium.com">
                                    <BsMedium className='linked' />
                                </Link>

                                <Link to="https://twitter.com">
                                    <img src={vector2} alt="icon" />
                                </Link>
                            </div>
                        </div>

                        <img src={draw} alt="icon" className='boxes' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export { ContactUs }