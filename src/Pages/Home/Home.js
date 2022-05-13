import React from 'react';
import Banner from './Banner';
import ContacUs from './ContacUs';
import Footer from '../Shared/Footer';
import Info from './Info';
import MakeAppoinment from './MakeAppoinment';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div className=''>
            <Banner />
            <Info></Info>
            <Services />
            <MakeAppoinment />
            <Testimonials />
            <ContacUs />
            <Footer />
        </div>
    );
};

export default Home;