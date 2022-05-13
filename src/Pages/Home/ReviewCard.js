import React from 'react';

const ReviewCard = ({review}) => {
    const {img, location, name, describe} = review;
    return (
        <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
            <p>{describe}</p>
            <div class="card-actions items-center mt-3">
                <div class="avatar">
                    <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={img} alt="" />
                    </div>
                </div>
                <div className="ml-4">
                    <h4 className='text-xl font-bold'>{name}</h4>
                    <h5>{location}</h5>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ReviewCard;