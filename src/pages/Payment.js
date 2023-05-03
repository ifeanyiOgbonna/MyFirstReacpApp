import React from 'react'
import "../styles/Payment.css"
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Header } from '../component/Header';
import frame from "../images/Frame 18.png";
import { Button } from '../component/Button'
import Products from '../component/Products';
import Amazon from "../images/Amazon.png";
import plogo from "../images/Plogo.png";
import pay from "../images/pay.png";
import {Link} from "react-router-dom"

function Payment() {

    return (
        <div>
            <Header />
            <div className='payment-container'>
                <div className='payment-component'>
                    <div className='address-content'>
                        <Link to="/address" className='address-icon'>
                            <AiOutlineArrowLeft />
                        </Link>
                        <h1 className='address-header'>SELECT PAYMENT OPTION</h1>
                    </div>

                    <ul className='ul-container'>
                        <li><input type="radio" className='radio' />  Cash On Delivery</li>
                        <li><input type="radio" className='radio' />PhonePay/Google Pay/BHIM UPI</li>
                        <li><input type="radio" className='radio' />Net Banking</li>
                        <form className='payment-form'>
                            <div className='visa'>
                                <label className='form-item'><input type="radio" className='radio' />Credit/Debit Card</label>
                                <img src={frame} alt="icon" />
                            </div>
                            <input type="number" placeholder="Card Number" className='form-fill' />
                            <input type="text" placeholder="Name on Card" className='form-fill' />
                            <input type="text" placeholder="MM/YY" className='form-fill' />
                            <input type="number" placeholder="CVV" className='form-fill' />
                        </form>
                    </ul>
                    <div className='logos '>
                        <img src={frame} alt="icon" />
                        <img src={Amazon} alt="icon" />
                        <img src={plogo} alt="icon" />
                        <img src={pay} alt="icon" />
                        <div className='line-divider'></div>
                    </div>
                </div>

                <div className='divider'>
                    <div className='price-detail-component'>
                        <h2 className='price-detail-header'>PRICE DETAILS (2 ITEMS)</h2>
                        <Products priceDetailRate={"Rs. 5,598"} priceDetailRates={"-Rs. 809"} priceDetailPrice={"Rs. 0"}
                            priceDetailRat={"Free"} priceDetailSet={"Rs. 4,789"} />
                    </div>
                    <Button text="Pay and Place Order" Link="/OrderPlaced" />
                </div>
            </div>
        </div>
    )
}

export default Payment