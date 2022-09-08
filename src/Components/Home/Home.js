import React from 'react';
import Banner from './Banner';
import CountDown from './CountDown';
import DifferentPart from './DifferentPart';
import DigitalProduct from './DigitalProduct';
import LogoSlider from './LogoSlider';
import Pricing from './Pricing';
import ServiceProvide from './ServiceProvide';
import WorkProcess from './WorkProcess';

const Home = () => {
    return (
        <>
           <Banner/>
           <LogoSlider/>
           <DifferentPart/>
           <DigitalProduct/>
           <CountDown/>
           <ServiceProvide/>
           <WorkProcess/>
           <Pricing/>
        </>
    );
};

export default Home;