import React from 'react';
import chair from '../../assets/images/chair.png'

const Banner = () => {
    return (
        <div class="hero min-h-min py-24">
            <div class="hero-content flex-col lg:flex-row-reverse px-16">
                <img src={chair} class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
                <p class="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                <button class="btn btn-primary font-bold text-white uppercase bg-gradient-to-r from-secondary to-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;