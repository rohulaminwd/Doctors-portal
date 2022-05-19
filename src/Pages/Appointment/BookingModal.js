import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const BookingModal = ({treatment, date, setTreatment, refetch}) => {
    const {_id, name, slots} = treatment;
    const [user, loading, error] = useAuthState(auth);
    console.log(user)

    const handleSubmit = (e) => {
        e.preventDefault();
        const slot = e.target.slot.value;
        const phone = e.target.phone.value;
        
        const booking = {
            treatmentId: _id,
            treatment: name,
            date: date,
            slot,
            phone,
            email: user.email,
            name: user.displayName
        }
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then( data => {
            console.log(data)
            if(data.success){
                toast(`Appoinment is set, ${date} at ${slot}`)
            }else{
                toast.error(`Already have an Appoinment, ${data.booking?.date} at ${data.booking?.slot}`)
            }
            refetch()
            setTreatment(null)
        })
        
    }

    return (
        <div>

            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">{name}</h3>
                    <form onSubmit={handleSubmit} className='grid grid-cols-1 justify-items-center gap-3 mt-8'>
                        <input type="text" name='date' value={date} disabled className="input input-bordered w-full" />
                        <select name='slot' className="select select-bordered w-full">
                            {
                                slots.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' disabled value={user?.displayName} className="input input-bordered w-full" />
                        <input type="email" name='email' disabled value={user?.email} className="input input-bordered w-full" />
                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full" />
                        <input type="submit" value="Submit" className="btn btn-black text-white w-full" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;