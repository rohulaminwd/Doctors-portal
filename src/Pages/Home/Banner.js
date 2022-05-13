import React from 'react';
import chair from '../../assets/images/chair.png'
import bg from '../../assets/images/bg.png'
import PrimaryBtn from '../Shared/PrimaryBtn';

const Banner = () => {
    return (
        <div class="hero min-h-min py-24 bg-cover" style={{background: `url(${bg})`}}>
            <div class="hero-content flex-col lg:flex-row-reverse px-4 lg:px-16">
                <img src={chair} class="lg:max-w-sm rounded-lg shadow-2xl" />
                <div>
                <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
                <p class="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                <PrimaryBtn>Get started</PrimaryBtn>
                </div>
            </div>
        </div>
    );
};

export default Banner;