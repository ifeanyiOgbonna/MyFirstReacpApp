import React from 'react'
import '../styles/Category.css'
import pro from "../images/image 13.png";
import icon from "../images/icon.png";
import vector from "../images/Vector.png";
import outline from "../images/Outline.png";
import pro131 from "../images/image 13 (1).png";
import pro132 from "../images/image 13 (2).png";
import pro134 from "../images/image 13 (3).png";
import Product from './Product';


function Category() {
    return (
        <div>
            <div className='product-container'>
                <div className='product-component'>

                    <Product image={pro} icon1={icon} rating={4.9} icon2={vector} cardTitle={"ZARA"} cardHeader={"Green High Neck Knit Sweater"}
                        cardRate={"Rs. 2999"} classRate={"Rs. 2299"} />

                    <Product image={pro131} icon1={icon} rating={4.9} icon2={vector} cardTitle={"ONLY"} cardHeader={"Plush Jogging Trousers"}
                        cardRate={"Rs. 2999"} classRate={"Rs. 1790"} />

                    <Product image={pro132} icon1={icon} rating={5.0} icon2={outline} cardTitle={"Hnm"} cardHeader={"Black sweater with long sleeves"}
                        cardRate={"Rs. 3299"} classRate={"Rs. 2299"} />

                    <Product image={pro134}  rating={4.4} icon2={outline} cardTitle={"Plush"} cardHeader={"High Rise Jeans- Ankle Length"}
                        cardRate={"Rs. 2299"} classRate={"Rs. 1790"} />
                </div>
            </div>
        </div>
    )
}

export default  Category