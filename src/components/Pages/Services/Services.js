import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    // get all services *****
    useEffect(() => {
        fetch('https://creepy-castle-34408.herokuapp.com/services')
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
        <div className="services-area">
            <h2> <span className="total-service">{services.length}</span> Exiting offers available!!!</h2>
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