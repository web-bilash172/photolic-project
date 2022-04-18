import React from 'react';
import { Button } from 'react-bootstrap';
import './Service.css'

const Service = ({ service }) => {
    const { title, img, price, description } = service;
    return (
        <div className='service-container'>
            <img src={img} alt="" />
            <h3>{title}</h3>
            <p>Price: ${price}</p>
            <p>{description}</p>
            <Button variant="outline-secondary">Purchase</Button>{' '}
        </div>
    );
};

export default Service;