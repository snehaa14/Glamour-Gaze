import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../assets/img/breadcrum_arrow.png'

const Breadcrum = (props) => {
    const { product } = props;

    const category = product?.category ?? 'default-category'; // Provide a default value or leave as empty string
    const name = product?.name ?? 'default-name'; // Provide a default value or leave as empty string

    return (
        <div className='breadcrum'>
            HOME
            <img src={arrow_icon} alt="" />
            SHOP 
            <img src={arrow_icon} alt="" />
            {category}
            <img src={arrow_icon} alt="" />
            {name}
        </div>
    );
};

export default Breadcrum;
