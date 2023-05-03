import React from 'react'
import "../styles/Home.css"
import { Header } from '../component/Header';
import data from "../images/image 1.png"
import Image from "../images/image 6.png"
import { BsArrowRight } from "react-icons/bs"
import Image2 from "../images/image 10.png"
import Image3 from "../images/image 9.png"
import { Link } from "react-router-dom"

function Home() {
    return (
        <div>
            <Header />
            <div className='container-home'>
                <div className='main-home'>
                    <img src={data} alt="goat" className='goat-img' />
                    <div className='header-component'>
                        <Link to="/" className='home-info'>
                            <p className='main-des'>Brands Everyone’s Crushing on</p>
                            <h1 className='home-header'>Explore All<BsArrowRight className='header-icon' /></h1>
                        </Link>

                    </div>
                </div>

                <div className='container-content'>
                    <img src={Image} alt="pictures" />
                    <div className='content-schedules'>
                        <Link to="/" className='home-info'>
                            <p className='main-desc'>456 items</p>
                            <h1 className='home-header'>Footwear<BsArrowRight className='header-icon' /></h1>
                        </Link>
                    </div>

                    <div className='container-detail'>
                        <div className='photo-detail'>
                            <img src={Image2} alt="photos" className='photo-img' />
                            <div className='detail-concept'>
                                <Link to="/" className='home-info'>
                                    <p className='mine'>680 items</p>
                                    <h1 className='home-header'>Sweaters<BsArrowRight className='header-icon' /></h1>
                                </Link>
                            </div>

                        </div>
                        <div className='photo-detail'>
                            <img src={Image3} alt="photos" className='photo-img' />
                            <div className='detail-concept'>
                                <Link to="/" className='home-info'>
                                    <p className='mine'>341 items</p>
                                    <h1 className='home-header'>Demnis<BsArrowRight className='header-icon' /></h1>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Home }