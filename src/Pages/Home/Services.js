import { itMatchesOne } from 'daisyui/src/lib/postcss-prefixer/utils';
import React from 'react';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import treatment from '../../assets/images/treatment.png'
import PrimaryBtn from '../Shared/PrimaryBtn';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: "Fluoride Treatment",
            describe: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: fluoride
        },
        {
            _id: 1,
            name: "Cavity Filling",
            describe: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: cavity
        },
        {
            _id: 1,
            name: "Teeth Whitening",
            describe: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: whitening
        }
    ]
    return (
        <div className='my-16 px-4 lg:px-16'>
            <div className="text-center">
                <h4 className='text-primary font-bold'>OUR SERVICES</h4>
                <h1 className='text-4xl'>Services We Provide</h1>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-16">
               { services.map(service => <div class="card bg-base-100 text-center shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={service.img} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">{service.name}</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>)}
            </div>
            <div class="hero mb-20 py-10">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={treatment} class="lg:max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p class="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryBtn>Get Started</PrimaryBtn>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;