import React from 'react'
import icon from "../images/icon.png";
import vector from "../images/Vector.png";



function Product(props) {
    return (
        <div className='product-item'>
            <img src={props.image} alt="cloth" />
            <div className='item-detail'>
                <div className='product-rate'>
                    <div className='img-content'>
                        <img src={icon} alt="icon" />
                        <p className='rate'>{props.rating}</p>
                    </div>
                    <img src={vector} alt="icon" />
                </div>

                <div className='card'>
                    <div className='card-compound'>
                        <h1 className='card-title'>{props.cardTitle}</h1>
                        <p className='card-header'>{props.cardHeader}</p>
                        <div className='rate-container'>
                            <p className='card-rate'><s>{props.cardRate}</s></p>
                            <p className='class-rate'>{props.classRate}</p>
                        </div>
                        <button className='card-btn'>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Product 