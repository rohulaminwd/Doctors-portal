import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentCard from './AppointmentCard';
import BookingModal from './BookingModal';

const AvailableAppointment = ({date}) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null)

    useEffect(() => {
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div className='px-4 lg:px-16'>
            <h1 className='text-center text-xl text-secondary font-bold'>Available Appointment {format(date, 'PP')}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-20">
            {
                services.map(service => <AppointmentCard
                key={service._id}
                service={service}
                setTretment={setTreatment}
                ></AppointmentCard>)
            }
            </div>
            {treatment && <BookingModal setTreatment={setTreatment} date={format(date, 'PP')} treatment={treatment}></BookingModal>}
        </div>
    );
};

export default AvailableAppointment;