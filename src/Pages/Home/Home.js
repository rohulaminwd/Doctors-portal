import React from 'react';
import Banner from './Banner';
import Info from './Info';
import MakeAppoinment from './MakeAppoinment';
import Services from './Services';

const Home = () => {
    return (
        <div className=''>
            <Banner />
            <Info></Info>
            <Services />
            <MakeAppoinment />
        </div>
    );
};

export default Home;