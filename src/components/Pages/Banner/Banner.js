import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <Carousel className="container banner-area">
            <Carousel.Item interval={1000}>
                <img
                className="d-block w-100 slider-height"
                src="https://image.freepik.com/free-photo/tidy-hall-with-two-pictures-wall_1203-1487.jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>Stay in the heart of New York</h3>
                <p>Located adjacent to Grand Central Terminal, this Manhattan hotel features onsite dining and the 24/7 StayFit fitness center. Rooms include a flat-screen TV and an iPod docking station</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                className="d-block w-100 slider-height"
                src="https://img.freepik.com/free-photo/type-entertainment-complex-popular-resort-with-pools-water-parks-turkey-with-more-than-5-million-visitors-year-amara-dolce-vita-luxury-hotel-resort-tekirova-kemer_146671-18728.jpg?size=338&ext=jpg"
                alt="Second slide"
                />
                <Carousel.Caption>
                <h3>Genius discount at Bentley Hotel!</h3>
                <p>Overlooking the East River and the historic 59th Street Bridge, this Manhattan hotel is 484 m from Rockefeller University. The hotel features a gym,</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 slider-height"
                src="https://image.freepik.com/free-photo/swimming-pool-beach-luxury-hotel-outdoor-pools-spa-amara-dolce-vita-luxury-hotel-resort-tekirova-kemer-turkey_146671-18751.jpg"
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3>Featuring a copper and wood themed design</h3>
                <p>The Hotel Edison in Manhattan offers concierge service, 24-hour business and fitness centers and a transportation desk. The Edison Ballroom provides event space.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;