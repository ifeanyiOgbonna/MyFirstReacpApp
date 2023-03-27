import React from 'react'
import { Header } from '../component/Header'
import Product from '../component/Product'
import icon from "../images/icon.png";
import vector from "../images/Vector.png";
import outline from "../images/Outline.png";
import BlueTop from "../images/BlueTop.png";
import red from "../images/red.png";
import suit from "../images/suit.png";
import couch from "../images/couch.png";
import scaff from "../images/scaff.png";
import redSuit from "../images/redSuit.png";
import black from "../images/black.png";
import white from "../images/white.png";
import socks from "../images/socks.png";
import slim from "../images/slim.png";
import lone from "../images/lone.png";
import green from "../images/green.png";
import ellipse from "../images/Ellipse 1.png";
import "../styles/Woman.css"
import {CiFilter} from "react-icons/ci"

function Woman() {
    return (
        <div>
            <Header />
            <div className='women-category'>
                <div className='women-item'>
                    <h1 className='cart-header'>WOMEN</h1>
                    <img src={ellipse} alt="icon" />
                    <p className='header-item'>456 items</p>
                </div>

                <div className='filter'>
                    <CiFilter className='filter-icon'/>
                    <p className='filter-header'>Filter</p>
                </div>
            </div>

            <div className='all-container'>
                <Product image={BlueTop} rating={4.9} icon2={outline} cardTitle={"VERO MODA"} cardHeader={"Blue Soft Knit Sweater"}
                    classRate={"Rs. 2299"} />

                <Product image={red} icon1={icon} rating={4.3} icon2={vector} cardTitle={"Forever 21"} cardHeader={"Plush body-hug sweater"}
                    cardRate={"Rs. 2999"} classRate={"Rs. 1790"} />

                <Product image={suit} icon1={icon} rating={3.2} icon2={vector} cardTitle={"HnM"} cardHeader={"Wide-leg TRF Jeans"}
                    cardRate={"Rs. 3299"} classRate={"Rs. 2299"} />

                <Product image={couch} icon1={icon} rating={3.9} icon2={vector} cardTitle={"ONLY"} cardHeader={"Floral Print Corsetry-Inspired Top"}
                    classRate={"Rs. 1790"} />

                <Product image={scaff} icon1={icon} rating={4.1} icon2={vector} cardTitle={"ZARA"} cardHeader={"Knit Scarf with diamond shapes"}
                    cardRate={"Rs. 2299"} classRate={"Rs. 2299"} />

                <Product image={redSuit} icon1={icon} rating={4.3} icon2={vector} cardTitle={"ONLY"} cardHeader={"Pink Blazer Dress"}
                    cardRate={"Rs. 2299"} classRate={"Rs. 1790"} />

                <Product image={black} icon1={icon} rating={4.1} icon2={vector} cardTitle={"VERO MODA"} cardHeader={"Velvet Halter Jumpsuit"}
                    cardRate={"Rs. 3299"} classRate={"Rs. 2999"} />

                <Product image={white} icon1={icon} rating={4.2} icon2={vector} cardTitle={"PLUSH"} cardHeader={"High Rise Jeans- Ankle Length"}
                    cardRate={"Rs. 2299"} classRate={"Rs. 1790"} />

                <Product image={socks} icon1={icon} rating={4.5} icon2={vector} cardTitle={"Dressberry"} cardHeader={"3 pack of no-show socks"}
                    cardRate={"Rs. 2299"} classRate={"Rs. 2299"} />

                <Product image={slim} icon1={icon} rating={3.3} icon2={vector} cardTitle={"ONLY"} cardHeader={"Polo Collar Jumpsuit"}
                    cardRate={"Rs. 2299"} classRate={"Rs. 1790"} />

                <Product image={lone} icon1={icon} rating={5.1} icon2={vector} cardTitle={"ZARA"} cardHeader={"Blue mini dress"}
                    cardRate={"Rs. 3299"} classRate={"Rs. 2299"} />

                <Product image={green} icon1={icon} rating={4.4} icon2={vector} cardTitle={"Forever 21"} cardHeader={"Wide Metal Choker"}
                    cardRate={"Rs. 2299"} classRate={"Rs. 1790"} />

            </div>
        </div>
    )
}

export default Woman 