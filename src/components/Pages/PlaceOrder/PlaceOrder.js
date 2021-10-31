import React from 'react';
import { useForm } from 'react-hook-form';
import './PlaceOrder.css'
import useAuth from '../../context/useAuth';
import { useLocation } from 'react-router';
import { Col, Container, Row } from 'react-bootstrap';

const PlaceOrder = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const {users} = useAuth();
   const location = useLocation() 
   const {_id, name, price, description, image} = location.state.detail

    // handle submit order*************
    const onSubmit = data => {
        data.status = 'Pending'
        data.service = {_id, name, price, image}
        fetch('http://localhost:5000/room-book',{
            method:'post',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then( result => {
            if(result.insertedId){
                alert('order processed successfully')
                reset()
            }
        })
    };

    return (
        <Container>
            <Row className="order-main-area">
                <Col sm={6}>
                    <div className="container details-service my-5">
                        <img src={image} alt="" className="img-fluid"/>
                        <h2 className="m-5">{name}</h2>
                        <h4>Price: ${price}</h4>
                        <p className="fw-bold pb-4">{description}</p>
                    </div>
                </Col>
                <Col sm={6}>
                    <div>
                        <form className="order-form" onSubmit={handleSubmit(onSubmit)}>
                            <input readOnly defaultValue={users?.displayName} {...register("name")} />
                            <input readOnly defaultValue={users?.email} {...register("email", { required: true })} />
                            {errors.email && <span className="error">This field is required</span>}
                            <input placeholder="Address" defaultValue="" {...register("address")} />
                            <input placeholder="City" defaultValue="" {...register("city")} />
                            <input placeholder="phone number" defaultValue="" {...register("phone")} />

                            <input type="submit" />
                        </form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default PlaceOrder;