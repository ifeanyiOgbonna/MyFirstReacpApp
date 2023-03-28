import React from 'react'
import "../styles/Home.css"
import { Header } from '../component/Header';
import data from "../images/image 1.png"
import Image from "../images/image 6.png"
import { BsArrowRight } from "react-icons/bs"
import Image2 from "../images/image 10.png"
import Image3 from "../images/image 9.png"

function Home() {
    return (
        <div>
            <Header />
            <div className='container-home'>
                <div className='main-home'>
                    <img src={data} alt="picture" />
                    <div className='header-component'>
                        <p className='main-des'>Brands Everyone’s Crushing on</p>
                        <h1 className='home-header'>Explore All<BsArrowRight className='header-icon' /></h1>
                    </div>
                </div>

                <div className='container-content'>
                    <img src={Image} alt="pictures" />
                    <div className='content-schedules'>
                        <p className='main-desc'>456 items</p>
                        <h1 className='home-header'>Footwear<BsArrowRight className='header-icon' /></h1>
                    </div>

                    <div className='container-detail'>
                        <div style={{position: "relative"}}>
                            <img src={Image2} alt="photos" />
                            <div className='detail-concept'>
                                <p className='mine'>680 items</p>
                                <h1 className='home-header'>Sweaters<BsArrowRight className='header-icon' /></h1>
                            </div>

                        </div>
                        <div style={{position: "relative"}}>
                            <img src={Image3} alt="photos" />
                            <div className='detail-concept'>
                                <p className='mine'>341 items</p>
                                <h1 className='home-header'>Demnis<BsArrowRight className='header-icon' /></h1>
                            </div>

                        </div>

                        {/* <img src={Image3} alt="phot" />
                        <div className='schedule'>
                            <div className='schedule-component'>
                                <p className='mine'>341 items</p>
                                <h1 className='home-header'>Demnis<BsArrowRight className='header-icon' /></h1>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Home }