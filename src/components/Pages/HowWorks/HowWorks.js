import React from 'react';
import { Accordion, Container } from 'react-bootstrap';
import './HowWorks.css'

const HowWorks = () => {
    return (
        <Container className="how-works-container">
            <h2 className="how-heading">How does it work?</h2>
            <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Getting Your Key</Accordion.Header>
                    <Accordion.Body>You’ll be able to communicate directly with your host to find out how to get your keys. Whether you meet them personally or just use a lockbox, it’ll be easy for you to access your property and start enjoying your vacation!
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Communicating With Your Host</Accordion.Header>
                    <Accordion.Body>You can always contact your host with any questions leading up to your trip. Maybe you want to let them know what time you’re arriving or you have a special request – enjoy stress-free communication at all times.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Checking In</Accordion.Header>
                    <Accordion.Body>Maybe you always stay in hotels and you’re not sure how to "check in" to an apartment or vacation home. Don’t worry, other guests feel the same way. That’s why hosts provide all the info you need to get you settled in.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    );
};

export default HowWorks;