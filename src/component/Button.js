import React from 'react'
import Arrow from "../images/arrow.png"
import { Link } from 'react-router-dom'
import "../styles/Button.css"

function Button(props) {
    return (
        <div>
            <div className='payment-sum'>
                <button className='order-btn'>
                    <Link to={props.Link} className='btn-link'>{props.text}</Link>
                    <img src={Arrow} alt="icon" className='arrow' />
                </button>
            </div>
            
        </div>
    )
}

export { Button };