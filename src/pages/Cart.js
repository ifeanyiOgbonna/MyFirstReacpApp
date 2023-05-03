import React from 'react'
import { Header } from '../component/Header';
import "../styles/Cart.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import ellipse from "../images/Ellipse 1.png";
import lady from "../images/lady.png";
import frame from "../images/Frame 2.png";
import fame from "../images/image 14.png";
import Store from "../component/Store"
import layer from "../images/Layer 1.png"
import Products from '../component/Products';
import { Button } from '../component/Button';
import { Link } from "react-router-dom"




function Cart() {
    return (
        <div>
            <Header />

            <div className='cart-compound'>

                <div className='cart-container'>
                    <div className='cart-component'>
                        <Link to="/shop" className='header-icons'>
                            <AiOutlineArrowLeft />
                        </Link>
                        <h1 className='cart-header'>ORDER SUMMARY</h1>
                        <img src={ellipse} alt="icon" />
                        <p className='header-item'>2 items</p>
                    </div>
                    <Store image={lady} cartName={"ZARA"} nameDescription={"Blue mini dress"} contentItem={"Size: S"} contentItems={"Qty: 1"} rater={"Rs. 3299"}
                        cardRate={"Rs. 2999"} icon={frame}
                        description={"Delivery by 9th Jan, 2023 "} />

                    <Store image={fame} cartName={"Forever 21"} nameDescription={"Plush body-hug sweater"} contentItem={"Size: S"} contentItems={"Qty: 1"} closePrice={"Rs. 2299"}
                        cardRate={"Rs. 1790"} icon={frame}
                        description={"Delivery by 9th Jan, 2023 "} />
                </div>

                <div className='line'></div>

                <div className='price-container'>
                    <div className='price-component'>
                        <img src={layer} alt="icon" />
                        <p className='price-content'>Yay! <strong>No Delivery Charge</strong> on this order.</p>
                    </div>
                    <h3 className='price-header'>Have a Coupon?</h3>
                    <form className='cart-info'>
                        <input type="text" placeholder='Enter Coupon Code' />
                        <button>APPLY</button>
                    </form>
                    <div className='price-detail-component'>
                        <h2 className='price-detail-header'>PRICE DETAILS (2 ITEMS)</h2>
                        <Products priceDetailRate={"Rs. 5,598"} priceDetailRates={"-Rs. 809"} priceDetailPrice={"Rs. 0"}
                            priceDetailRat={"Free"} priceDetailSet={"Rs. 4,789"} />
                    </div>
                    <Button text="Place Order" Link="/Address" />
                </div>
            </div>
        </div>
    )
}

export { Cart }