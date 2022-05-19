import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import AppointmentCard from './AppointmentCard';
import BookingModal from './BookingModal';

const AvailableAppointment = ({date}) => {
    // const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null)
    const formateDate = format(date, 'PP')

    const {data: services, isLoading, refetch} = useQuery(['available', formateDate], () => fetch(`http://localhost:5000/available?date=${formateDate}`)
        .then(res => res.json())
    )
    if(isLoading){
        return <Loading />
    }
    // useEffect(() => {
    //     fetch(`http://localhost:5000/available?date=${formateDate}`)
    //     .then(res => res.json())
    //     .then(data => setServices(data))
    // }, [formateDate])
    return (
        <div className='px-4 lg:px-16'>
            <h1 className='text-center text-xl text-secondary font-bold'>Available Appointment {format(date, 'PP')}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-20">
            {
                services?.map(service => <AppointmentCard
                key={service._id}
                service={service}
                setTretment={setTreatment}
                ></AppointmentCard>)
            }
            </div>
            {treatment && <BookingModal refetch={refetch} setTreatment={setTreatment} date={format(date, 'PP')} treatment={treatment}></BookingModal>}
        </div>
    );
};

export default AvailableAppointment;