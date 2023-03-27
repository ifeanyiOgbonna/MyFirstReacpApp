import React from 'react'
import Close from "../images/close.png"

function store(props) {
    return (
        <div className='cart-content'>
            <img src={props.image} alt="lady" />
            <div className='cart-detail'>
                <p className='cart-name'>{props.cartName}</p>
                <img src={Close} alt="icon" className='totalIcon' />
                <p className='name-description'>{props.nameDescription}</p>
                <div className='description-contain'>
                    <p className='content-item'>{props.contentItem}</p>
                    <p className='content-item'>{props.contentItems}</p>
                </div>
                <p className='rater'><s>{props.rater}</s><span>Rs. 1790</span></p>
                <p className='delivery'><img src={props.icon} alt="icon" />Delivery by 9th Jan, 2023 </p>
            </div>
        </div>
    )
}

export default store