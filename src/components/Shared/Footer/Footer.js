import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import './Footer.css'

const Footer = () => {
        return (
        // <div className="fixed-bottom">
        <div className="footer-area">
           <Container>
                <Row>
                    <Col className="fw-bold text-white">&copy; Trip Master</Col>
                    <Col className="social-list">
                        <a href="/"><FontAwesomeIcon icon={faFacebook} /></a>
                        <a href="/"><FontAwesomeIcon icon={faYoutube} /></a>
                        <a href="/"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href="/"><FontAwesomeIcon icon={faLinkedin} /></a>
                        <a href="/"><FontAwesomeIcon icon={faTwitter} /></a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;