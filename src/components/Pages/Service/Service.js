import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({service})  => {
    const { name, price, description, image, _id} = service;
    return (
        <div className="service pb-3">
            <img src={image} alt="" className="img-fluid"/>
            <h6 className="fw-bold mt-3">{name}</h6>
            <h5>Price: ${price}</h5>
            <p className="px-3">{description}</p>
            
            <Link
            to={{
                pathname: `/place-order/${_id}`,
                state: {
                detail: service,
                },
            }}
        ><button className="btn btn-info text-white fw-bold">Reserve</button></Link>
        </div>
    );
};

export default Service;