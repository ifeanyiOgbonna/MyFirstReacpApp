import React from 'react'
import { MdDelete } from 'react-icons/md'
import { FaPen } from 'react-icons/fa'

function AddressStore(props) {
    return (
        <div className='address-detail'>
            <div className='addressStore'>
                <p className='address-name'>{props.addressName}</p>
                <p className={`name-btn ${props.buttonClassName}`}>{props.nameBtn}</p>
                {props.selected ? <div className='icon-container'>
                    <FaPen />
                    <MdDelete />
                </div> : ""}
            </div>

            <p className='address-description'>{props.addressDescription}</p>
            <p className='address-description'>{props.addressDescript}</p>
            <p className='address-description'>{props.addressDescriptions}</p>
            <p className='address-description'>{props.addressDes}<strong>{props.number}</strong></p>
        </div>
    )
}

export default AddressStore