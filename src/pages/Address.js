import React from 'react'
import { Header } from '../component/Header';
import "../styles/Address.css"
import { AiOutlineArrowLeft } from "react-icons/ai";
import AddressStore from '../component/AddressStore';
import Products from '../component/Products';
import { Link } from 'react-router-dom';
import Arrow from "../images/arrow.png"




function Address() {
  return (
    <div>
      <Header />
      <div className='address-compound'>
        <div className='address-component'>
          <div className='address-content'>
            <AiOutlineArrowLeft className='address-icon' />
            <h1 className='address-header'>SELECT DELIVERY ADDRESS</h1>
            <button className='address-btn'>ADD NEW ADDRESS</button>
          </div>
          <div className='address-container'>
            <AddressStore selected={true} buttonClassName="green" addressName={"Salem Mirza"} nameBtn={"Home"} addressDescription={"Kochi - Kanyakumari Hwy, Palayam"} addressDescript={"Thiruvananthapuram, Kerala"} addressDescriptions={"695001"} addressDes={"Mobile: "} number={" 0471 247 0240"}
            />
            <AddressStore selected={false} buttonClassName="yellow" addressName={"Kirti Bajaj"} nameBtn={"Office"} addressDescription={"3rd A Cross Rd, Sena Vihar, Kalyan Nagar"} addressDescript={"Bangalore, Karnataka"} addressDescriptions={"560043"} addressDes={"Mobile:"} number={" 080 2543 5193"}
            />
            <AddressStore selected={false} addressName={"Prabhat Sengupta"} addressDescription={"Bakerganj Shurigali, Near Rupak Cinema"} addressDescript={"Patna Metropolitan Area, Bihar"} addressDescriptions={"800004"} addressDes={"Mobile:"} number={" 099 34 079811"}
            />
          </div>
        </div>
        <div className='lines'></div>

        <div className='divider'>

          <div className='price-detail-component'>
            <h2 className='price-detail-header'>PRICE DETAILS (2 ITEMS)</h2>
            <Products priceDetailRate={"Rs. 5,598"} priceDetailRates={"-Rs. 809"} priceDetailPrice={"Rs. 0"}
              priceDetailRat={"Free"} priceDetailSet={"Rs. 4,789"} />
          </div>
          <div className='order-container'>
            <div className='order-component'>
              <button className='order-btn'>
                <Link to="/Payment" className='btn-link'>Continue</Link>
              </button>
              <img src={Arrow} alt="icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Address