import React from 'react'
import { Header } from "../component/Header";
import "../styles/Shop.css";
import { SectionTitle } from '../component/SectionTitle';
import shop12 from "../images/image 12.png";
import shop2 from "../images/image 2.png";
import shop4 from "../images/image 4.png";
import shop11 from "../images/image 11.png";
import shop5 from "../images/image 5.png";
import shop8 from "../images/image 8.png";
import Category from "../component/Category";
import {Link} from "react-router-dom"

function Shop() {
    return (
        <div>
            <Header />
            <SectionTitle text="SHOP BY CATEGORIES" />

            <div className='shop-container'>
                <div className='shop-content'>
                    <div className='shop-concept'>
                        <img src={shop12} alt="phot" />
                        <div className='item-container'>
                            <button className='shop-item'>MEN</button>
                        </div>
                    </div>

                    <div className='shop-concept'>
                        <img src={shop2} alt="woman" />
                        <div className='item-container'>
                            <button className='shop-item'> <Link to="/Woman" className='try'>WOMAN</Link></button>
                        </div>

                    </div>

                    <div className='description-container'>
                        <div className='description-content'>
                            <div className='dest'>
                                <img src={shop4} alt="Accessories" />
                                <div className='item-cons bottom'>
                                    <button className='shop-item'>ACCESSORIES</button>
                                </div>
                            </div>
                            <div className='dest'>
                                <img src={shop11} alt="kids" />
                                <div className='item-cons bottom'>
                                    <button className='shop-item'>KIDS</button>
                                </div>
                            </div>
                        </div>

                        <div className='description-details'>

                            <div className='dest'>
                                <img src={shop5} alt="Beauty" />
                                <div className='item-cons top'>
                                    <button className='shop-item'>FOOTWEAR</button>
                                </div>
                            </div>

                            <div className='dest'>
                                <img src={shop8} alt="Beauty" />
                                <div className='item-cons top'>
                                    <button className='shop-item'>BEAUTY</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <SectionTitle text="PRODUCTS AT SLASHED PRICES" />
                <Category />
            </div>
        </div>
    )
}

export { Shop }