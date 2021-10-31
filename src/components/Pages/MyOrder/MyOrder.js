import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../context/useAuth';

const MyOrder = () => {
    const [myOrders, setMyOrders] = useState([])
    const {users} = useAuth();
    const {email} = users;

    useEffect(()=>{
    fetch(`http://localhost:5000/room-booked/${email}`)
    .then(res => res.json())
    .then(data => setMyOrders(data))
    },[])

    const handleDeleteReservation = id => {
        const confirmation = window.confirm('Do you want to cancel reservation!!')
        if(confirmation){
            fetch(`http://localhost:5000/room-book/${id}`,{
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                const filterdata = myOrders.filter(order => id !== order._id);
                setMyOrders(filterdata);
            })
        }
    }

    return (
        <div>
            <h2>{users.displayName} you have total {myOrders.length} reservations</h2>
            <Container>
                <Row>
                    {
                        myOrders.map(myOrder => 
                        <Col xs={12} sm={6} md={3} key={myOrder._id}> 
                            <div className="service pb-3">
                                <img src={myOrder.service.image} alt="" className="img-fluid"/>
                                <h6 className="fw-bold mt-3">{myOrder.name}</h6>
                                <h6 className="fw-bold mt-3">({myOrder.status})</h6>
                                <h5>Price: ${myOrder.service.price}</h5>
                                <p className="px-3">{myOrder.service.description}</p>
                                
                                <span title={myOrder.status === 'Approved' ? 'This item is already approved, and could not by cancel' : ''}>
                                    <Button disabled={myOrder.status === 'Approved'} variant="danger" onClick={ () => handleDeleteReservation(myOrder._id)}>Cancel Reservation</Button>
                                </span>
                            </div>
                        </Col>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default MyOrder;