import React from 'react';
import { Button, Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import './Subscribe.css'

const Subscribe = () => {
    return (
        <div className="subscribe-area">
           <Container>
                <Row>
                    <Col className="fw-bold">
                        <h2>Save time, save money!</h2>
                        <p>Sign up and we'll send the best deals to you</p>
                        <InputGroup className="mb-3 w-50 inp-group">
                            <FormControl
                            aria-label="Example text with button addon"
                            aria-describedby="basic-addon1"
                            />
                            <Button variant="outline-secondary" id="button-addon1">
                            Subscribe
                            </Button>
                        </InputGroup>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Subscribe;