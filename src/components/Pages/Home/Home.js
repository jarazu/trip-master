import React from 'react';
import Banner from '../Banner/Banner';
import HowWorks from '../HowWorks/HowWorks';
import Services from '../Services/Services';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
    
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <HowWorks></HowWorks>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;