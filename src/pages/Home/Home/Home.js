import React from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner.js';
import Banner from '../Banner/Banner.js';
import Services from '../Services/Services.js';
import Navigation from '../Shared/Navigation/Navigation.js';
import AlwaysConnect from './AlwaysConnect/AlwaysConnect.js';
import ExceptionalDental from './ExceptionalDental/ExceptionalDental.js';
import Reviews from './Reviews/Reviews.js';
import ShortInfo from './ShortInfo/ShortInfo.js';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <ShortInfo></ShortInfo>
            <Services></Services>
            <ExceptionalDental></ExceptionalDental>
            <AppointmentBanner></AppointmentBanner>
            <Reviews></Reviews>
            <AlwaysConnect></AlwaysConnect>
        </div>
    );
};

export default Home;