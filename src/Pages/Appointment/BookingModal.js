import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const BookingModal = ({treatment, date, setTreatment}) => {
    const {_id, name, slots} = treatment;
    const [user, loading, error] = useAuthState(auth);

    const handleSubmit = (e) => {
        e.preventDefault();
        const slot = e.target.slot.value;
        const name = e.target.name.value;
        const phone = e.target.phone.value;
        const email = e.target.email.value;
        const date = e.target.date.value;

        const data = {slot, name, phone, email, date, _id}
        console.log(data)
        setTreatment(null)
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