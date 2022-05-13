import React from 'react';
import appointment from '../../assets/images/appointment.png'
import doctor from '../../assets/images/doctor.png'
import PrimaryBtn from '../Shared/PrimaryBtn';

const MakeAppoinment = () => {
    return (
        <div className='my-16' style={{background: `url(${appointment})`}}>
            <section className='flex items-center px-4 lg:px-16'>
                <div className="flex-1 hidden lg:block">
                    <img className='mt-[-120px]' src={doctor} alt="" />
                </div>
                <div className="flex-1 py-3">
                    <h3 className='text-primary text-2xl my-4 font-bold'>Appointment</h3>
                    <h1 className='text-4xl font-bold text-white'>Make an appointment Today</h1>
                    <p className='text-white my-5'>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryBtn>Get Started</PrimaryBtn>
                </div>
            </section>
        </div>
    );
};

export default MakeAppoinment;