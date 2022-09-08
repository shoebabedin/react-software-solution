import React from 'react';
import Client from './Client';
import Gellary from './Gellary';
import HeroSection from './HeroSection';
import Subscribe from './Subscribe';
import Timeline from './Timeline';

const About = () => {
    return (
        <>
            <HeroSection/>
            <Gellary/>
            <Timeline/>
            <Client/>
            <Subscribe/>
        </>
    );
};

export default About;