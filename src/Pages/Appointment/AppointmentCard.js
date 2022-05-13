import React from 'react';

const AppointmentCard = ({service, setTretment}) => {
    const {name, slots} = service
    return (
        <div>
            <div class="card text-center shadow-md">
                <div class="card-body">
                    <h2 class="text-xl font-bold text-secondary">{name}</h2>
                    <p className='font-bold'>{
                        slots.length > 0
                        ? <span>{slots[0]}</span>
                        : <span className='text-red-500'>Try another date</span>
                    }</p>
                    <p>{slots.length} {slots.length > 1 ? "Spaces" : "space"} Available</p>
                    <div class="card-actions justify-center">
                        <label 
                        onClick={() => setTretment(service)}
                        disabled={slots.length === 0}
                        for="booking-modal" 
                        class="btn btn-secondary text-white uppercase bg-gradient-to-r from-secondary to-primary btn-sm">Book Appointment</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentCard;