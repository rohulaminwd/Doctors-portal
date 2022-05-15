import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import ReviewCard from './ReviewCard';

const Testimonials = () => {
    const reviews = [
        {
            _di: 1,
            name: "Winson Herry",
            location: "California",
            describe: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people1
        },
        {
            _di: 2,
            name: "Winson Herry",
            location: "California",
            describe: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people2
        },
        {
            _di: 3,
            name: "Winson Herry",
            location: "California",
            describe: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people3
        },
    ]
    return (
        <section className='px-4 lg:px-16 mb-16'>
            <div className="flex px-16 justify-between">
                <div className="">
                    <h3 className='text-primary text-xl font-bold'>Testimonial</h3>
                    <h1 className='text-4xl'>What Our Patients Says</h1>
                </div>
                <div className="">
                    <img src={quote} className='w-24 lg:w-48' alt="" />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-24">
                {
                    reviews.map(review => <ReviewCard
                        key={review._di}
                        review={review}
                    ></ReviewCard>)
                }
            </div>
        </section>
    );
};

export default Testimonials;