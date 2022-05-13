import React from 'react';
import appointment from '../../assets/images/appointment.png'
import PrimaryBtn from '../Shared/PrimaryBtn';

const ContacUs = () => {
    return (
        <div className='text-center py-10' style={{background: `url(${appointment})`}}>
            <h3 className='text-primary text-xl font-bold'>Contact Us</h3>
            <h1 className='text-4xl text-white'>Stay connected with us</h1>
            <form action="" className='w-80 lg:w-96 mx-auto mt-10'>
                <input type="email" placeholder="Enter email" class=" mb-3 input input-bordered input-accent w-full" />
                <input type="text" placeholder="address" class=" mb-3 input input-bordered input-accent w-full" />
                <textarea class="textarea textarea-bordered w-full mb-3" placeholder="Massage"></textarea>
                <PrimaryBtn>submit</PrimaryBtn>
            </form>
        </div>
    );
};

export default ContacUs;