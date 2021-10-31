import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    // get all services *****
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setServices(data);
                setIsLoading(false);
            });
    }, [])

    if(isLoading){
        return <Spinner animation="border" variant="danger"/>
    }
    
    return (
        <div>
            <h2>This is services : {services.length}</h2>
            <Container>
                <Row>
                    {
                        services.map(service => <Col xs={12} sm={6} md={4} key={service._id}> <Service
                            key={service._id}
                            service={service}
                        ></Service></Col>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Services;