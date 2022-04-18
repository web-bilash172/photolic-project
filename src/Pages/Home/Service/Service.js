import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, title, img, price, description } = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`)
    }
    return (
        <div className='service-container'>
            <img src={img} alt="" />
            <h3>{title}</h3>
            <p>Price: ${price}</p>
            <p>{description}</p>
            <Button onClick={() => navigateToServiceDetail(id)} variant="outline-secondary">Purchase</Button>{' '}
        </div>
    );
};

export default Service;