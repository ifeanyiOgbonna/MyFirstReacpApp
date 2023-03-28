import React from 'react'
import "../styles/About.css"
import { Header } from "../component/Header";
import lady from "../images/image bac.png"


function About() {
    return (
        <div>
            <Header />
            <div className='about-container'>
                <div className='about-component'>
                    <div className='about-concept'>
                        <h1 className='about-header'>ABOUT US.</h1>
                        <div className='about-description'>
                            <p className='about-detail'>
                                Avira caters to thoughtful shoppers who appreciate unique designs and top quality pieces you just can’t find elsewhere. We are constantly curating fresh new collections and looking for the next big thing our customers will love. Founded in Vienna in 2019, we are proud to be your Online Clothing Shop that you can rely on for our expert service and care.
                            </p>
                            <p className='about-sub'>
                                We are here to serve you and make sure you find the Perfect Look for every occasion. Our passion for fashion is the reason why we are here. We absolutely love what we do, and our goal is to help our customers by providing them with unique outfit and accessories that make them stand-out from the crowd.
                            </p>
                        </div>

                        <div className='about-rate'>
                            <div className='rate-item'>
                                <h1 className='rates'>50k+</h1>
                                <p className='rates-des'>Happy Customers</p>
                            </div>
                            <div className='rate-item'>
                                <h1 className='rates'>60+</h1>
                                <p className='rates-des'>Top Partners</p>
                            </div>
                            <div className='rate-item'>
                                <h1 className='rates'>5+</h1>
                                <p className='rates-des'>Years of Trust</p>
                            </div>
                        </div>

                    </div>
                    <img src={lady} alt='img' className='about-img'/>
                </div>

            </div>
        </div>

    )
}

export { About }