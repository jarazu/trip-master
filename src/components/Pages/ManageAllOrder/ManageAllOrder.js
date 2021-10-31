import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

const ManageAllOrder = () => {
    const [allOrders, setAllOrders] = useState([]);

    useEffect(()=>{
    fetch(`http://localhost:5000/all-booked`)
    .then(res => res.json())
    .then(data => setAllOrders(data))
    },[])

    const handleApproveReservation = id => {
        const confirmation = window.confirm('Do you want to approve this reservation!!')
        if(confirmation){
            fetch(`http://localhost:5000/room-book/${id}`,{
                method:'PUT',
                headers:{
                    'content-type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {
                const tempAllOrder = [...allOrders];
                const findUpdatedOrder = tempAllOrder.findIndex((obj => obj._id === id));
                tempAllOrder[findUpdatedOrder].status = "Approved"
                setAllOrders(tempAllOrder);
            })
        }
    }
    
    const handleDeleteReservation = id => {
        const confirmation = window.confirm('Do you want to cancel reservation!!')
        if(confirmation){
            fetch(`http://localhost:5000/room-book/${id}`,{
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                const filterdata = allOrders.filter(order => id !== order._id);
                setAllOrders(filterdata);
            })
        }
    }

    return (
        <div>
            <h2>Total {allOrders.length} numbers of reservation request</h2>
            <Container>
                <Row>
                    {
                        allOrders.map(myOrder => 
                        <Col xs={12} sm={6} md={3} key={myOrder._id}> 
                            <div className="service pb-3">
                                <img src={myOrder.service.image} alt="" className="img-fluid"/>
                                <h6 className="fw-bold mt-3">{myOrder.name}</h6>
                                <h6 className="fw-bold mt-3">({myOrder.status})</h6>
                                <h5>Price: ${myOrder.service.price}</h5>
                                <p className="px-3">{myOrder.service.description}</p>
                                <Row>
                                    <Col>
                                        <span title={myOrder.status === 'Approved' ? 'This item is already approved, and could not by cancel' : ''}>
                                            <Button disabled={myOrder.status === 'Approved'} variant="danger" onClick={ () => handleDeleteReservation(myOrder._id)}>Cancel</Button>
                                        </span>
                                    </Col>
                                    <Col>
                                        <span title={myOrder.status === 'Approved' ? 'This item is already approved' : ''}>
                                            <Button disabled={myOrder.status === 'Approved'} variant="primary" onClick={ () => handleApproveReservation(myOrder._id)}>Approve</Button>
                                        </span>
                                    </Col>
                                </Row>
                            </div>
                        </Col>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default ManageAllOrder;