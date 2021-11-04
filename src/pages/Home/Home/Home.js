import React from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner.js';
import Banner from '../Banner/Banner.js';
import Services from '../Services/Services.js';
import Navigation from '../Shared/Navigation/Navigation.js';
import AlwaysConnect from './AlwaysConnect/AlwaysConnect.js';
import ExceptionalDental from './ExceptionalDental/ExceptionalDental.js';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <ExceptionalDental></ExceptionalDental>
            <AppointmentBanner></AppointmentBanner>
            <AlwaysConnect></AlwaysConnect>
        </div>
    );
};

export default Home;