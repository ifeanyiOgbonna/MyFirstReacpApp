import React from 'react'
import "../styles/Products.css"


function Products(props) {
    return (
        <div className='price-detail-compound'>
            <div className='price-detail-content'>
                <p className='price-detail-title'>Total MRP</p>
                <p className='price-detail-rate'>{props.priceDetailRate}</p>
            </div>
            <div className='price-detail-content'>
                <p className='price-detail-title'>Discount on MRP</p>
                <p className='price-detail-rates'>{props.priceDetailRates}</p>
            </div>
            <div className='price-detail-content'>
                <p className='price-detail-title'>Coupon Discount</p>
                <p className='price-detail-rate'>{props.priceDetailPrice}</p>
            </div>
            <div className='price-detail-content'>
                <p className='price-detail-title'>Delivery Charge</p>
                <p className='price-detail-rates'>{props.priceDetailRat}</p>
            </div>
            <hr/>
            <div className='price-detail-content'>
                <p className='price-detail-total'>Total Amount</p>
                <p className='price-detail-set'>{props.priceDetailSet}</p>
            </div>
        </div>
    )
}

export default Products