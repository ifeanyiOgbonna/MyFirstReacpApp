import React from 'react'
import "../styles/OrderPlaced.css"
import { Header } from "../component/Header";
import good from "../images/Good.png";
import layer from "../images/Layer2.png"
import { Button } from "../component/Button";



function OrderPlaced() {
  return (
    <div>
      <Header />
      <div className='order-place'>
        <div className='order-place-container'>
          <h1 className='order-place-header'>CONFIRMED</h1>
          <img src={good} alt="icon" />
        </div>

        <div className='compliment'>
          <p className='orderPlace-detail'>THANK YOU FOR YOUR ORDER!</p>
          <p className='orderPlace-detail'>Order Id: 56089</p>
        </div>

        <img src={layer} alt="icon" className='car'/>
        <p className='final-detail'> Estimated Delivery </p>
        <p className='final-detail'>Monday, 09th January, 2023</p>

       <Button text="Continue Shopping" Link="/"/>
      </div>
    </div>
  )
}

export default OrderPlaced